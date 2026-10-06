import React from 'react'
import { NavLink } from "react-router-dom";
import './Header.scss';
import { useTheme } from '../Contexts/ThemeContext';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const links = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/resume', 'Resume'],
  ['/portfolio', 'Projects'],
  ['/games', 'Games'],
  ['/contact', 'Contact'],
];

function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="site-header">
      <nav className="nav">
        <NavLink to="/" className="brand">ts<span>.</span></NavLink>
        <ul className="nav-links">
          {links.map(([to, label]) => (
            <li key={to}>
              <NavLink to={to} end={to === '/'} className={({ isActive }) => (isActive ? 'active' : '')}>{label}</NavLink>
            </li>
          ))}
        </ul>
        <button className="theme-toggle" onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
          <FontAwesomeIcon icon={theme === 'dark' ? faMoon : faSun} />
        </button>
      </nav>
    </header>
  )
}

export default Header
