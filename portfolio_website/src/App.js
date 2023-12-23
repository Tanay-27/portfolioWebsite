import './App.css';
import TicTacToe from './Games/TicTacToe';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';

function App() {
  return (
    <div id="mainElement">
    <BrowserRouter>
     <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <Header />
      <button className="btn btn-primary" onClick={toggleDarkMode}>Drak Mode</button>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/games" element={<TicTacToe />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

let darkMode = false;
function toggleDarkMode(){
  darkMode = !darkMode;
  if(darkMode) document.getElementById('mainElement').classList.add('dark-mode');
  else document.getElementById('mainElement').classList.remove('dark-mode');
}
export default App;
