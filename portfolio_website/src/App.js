import './App.css';
import TicTacToe from './Games/TicTacToe';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import Games from './Games/Games';
import { useTheme } from './Contexts/ThemeContext';

function App() {
  const { theme } = useTheme();
  return (
    <div id="mainElement" className={theme === 'light' ? 'light-mode' : 'dark-mode' }>
    <BrowserRouter>
    
     <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <Header />
      {/* <div className="mouse-dot"></div> */}
      {/* <button className="btn btn-primary" onClick={toggleDarkMode}>Drak Mode</button> */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/tictactoe" element={<TicTacToe />} />
        <Route path="/contact" element={<Contact />} />
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


// document.addEventListener('mousemove', (event) => {
//   const dot = document.querySelector('.mouse-dot');
//   if (dot) {
//     // Set the dot's position to the mouse coordinates
//     dot.style.left = event.pageX + 'px';
//     dot.style.top = event.pageY + 'px';
//   }
// });

export default App;
