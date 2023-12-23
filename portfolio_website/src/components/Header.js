import React from 'react'
import { Link } from "react-router-dom";


function Header() {
  return (
    <div className='header'>   
      <div className="headerElement logo">LOGO</div>
      <div className="headerElement active"><Link to="/home">Home</Link></div>
      <div className="headerElement"><Link to="/about">About</Link></div>
      <div className="headerElement"><Link to="/resume">Resume</Link></div>
      <div className="headerElement"><Link to="/games">Games</Link></div>
      <div className="headerElement"><Link to="/portfolio">Portfolio</Link></div>
      <div className="headerElement"><Link to="/blog">Blog</Link></div>
    </div>
  )
}

export default Header