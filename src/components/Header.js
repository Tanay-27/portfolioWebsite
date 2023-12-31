import React from 'react'
import { Link } from "react-router-dom";
import './Header.scss';
import { useTheme } from '../Contexts/ThemeContext';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-regular-svg-icons';

function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
    <div className='header'>
      <div className="headerBtns">
      <div className="headerElement logo">LOGO</div>
      <div className="headerElement active"><Link to="/home">Home</Link></div>
      {/* <div className="headerElement"><Link to="/about">About</Link></div> */}
      <div className="headerElement"><Link to="/resume">Resume</Link></div>
      <div className="headerElement"><Link to="/games">Games</Link></div>
      {/* <div className="headerElement"><Link to="/portfolio">Portfolio</Link></div> */}
      <div className="headerElement"><Link to="/contact">Contact</Link></div>
      {/* <div className="headerElement"><Link to="/blog">Blog</Link></div> */}
        </div>
      <div className="headerThemeToggle">
        <div className="headerElement" onClick={toggleTheme}><FontAwesomeIcon icon={theme==='dark'?faMoon:faSun} /></div>
      </div>   
    </div>
    <div className="blankSpace"></div>
    </>
  )
}

export default Header