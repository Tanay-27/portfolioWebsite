import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { ThemeProvider } from './Contexts/ThemeContext';

const renderApp = () => render(<ThemeProvider><App /></ThemeProvider>);

beforeEach(() => {
  window.location.hash = '#/';
  localStorage.clear();
});

test('home page shows the headline and primary calls to action', () => {
  renderApp();
  expect(screen.getByText(/I build AI systems that hold up in production/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /view resume/i })).toBeInTheDocument();
});

test('navigating to Resume shows experience and the PDF download', () => {
  renderApp();
  fireEvent.click(screen.getByRole('link', { name: 'Resume' }));
  expect(screen.getByText('Appknox')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /download pdf/i })).toHaveAttribute('href', expect.stringContaining('Tanay_Shah_Resume.pdf'));
});

test('every nav route renders without crashing', () => {
  renderApp();
  for (const name of ['About', 'Projects', 'Games', 'Contact']) {
    fireEvent.click(screen.getByRole('link', { name }));
    expect(screen.getByRole('link', { name })).toHaveClass('active');
  }
});

test('theme toggle switches mode and remembers the choice', () => {
  const { container } = renderApp();
  const root = container.querySelector('#mainElement');
  const before = root.className;
  fireEvent.click(screen.getByRole('button', { name: /switch to/i }));
  expect(root.className).not.toBe(before);
  expect(localStorage.getItem('theme')).toBe(root.className.includes('light') ? 'light' : 'dark');
});

test('contact page has only email and GitHub, and no phone number', () => {
  renderApp();
  fireEvent.click(screen.getByRole('link', { name: 'Contact' }));
  expect(screen.getByRole('link', { name: 'tanayshah027@gmail.com' })).toHaveAttribute('href', 'mailto:tanayshah027@gmail.com');
  expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
  expect(screen.queryByText(/instagram/i)).not.toBeInTheDocument();
  expect(document.body.textContent).not.toMatch(/\d{10}/); // no 10-digit phone number
});

test('copy button writes the email to the clipboard', async () => {
  const writeText = jest.fn().mockResolvedValue();
  Object.assign(navigator, { clipboard: { writeText } });
  renderApp();
  fireEvent.click(screen.getByRole('link', { name: 'Contact' }));
  fireEvent.click(screen.getByRole('button', { name: /copy email/i }));
  expect(writeText).toHaveBeenCalledWith('tanayshah027@gmail.com');
  expect(await screen.findByText('Copied')).toBeInTheDocument();
});
