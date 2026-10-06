import { render, screen, fireEvent } from '@testing-library/react';
import Hangman from './Hangman';

// Math.random() === 0 always picks the first word in the pool ("python").
beforeEach(() => jest.spyOn(Math, 'random').mockReturnValue(0));
afterEach(() => jest.restoreAllMocks());

const press = (letters) => letters.split('').forEach((l) =>
    fireEvent.click(screen.getByRole('button', { name: l })));

test('guessing every letter wins', () => {
    render(<Hangman />);
    press('python');
    expect(screen.getByText('You won!')).toBeInTheDocument();
});

test('six wrong guesses loses and reveals the word', () => {
    render(<Hangman />);
    press('zxqwkj');
    expect(screen.getByText(/You lost/)).toBeInTheDocument();
    expect(screen.getByLabelText('word to guess').textContent).toBe('python');
});

test('keyboard input guesses letters and new word resets the board', () => {
    render(<Hangman />);
    fireEvent.keyDown(window, { key: 'z' });
    expect(screen.getByText('Wrong guesses left: 5')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /new word/i }));
    expect(screen.getByText('Wrong guesses left: 6')).toBeInTheDocument();
});
