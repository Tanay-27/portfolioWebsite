import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Games from './Games/Games';
import TicTacToe from './Games/TicTacToe';
import Hangman from './Games/Hangman';
import { useTheme } from './Contexts/ThemeContext';

function App() {
  const { theme } = useTheme();

  return (
    <div id="mainElement" className={theme === 'light' ? 'light-mode' : 'dark-mode'}>
      <HashRouter>
        <Header />
        <main className="body">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/games" element={<Games />} />
            <Route path="/games/tictactoe" element={<TicTacToe />} />
            <Route path="/games/hangman" element={<Hangman />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </HashRouter>
    </div>
  );
}

export default App;
