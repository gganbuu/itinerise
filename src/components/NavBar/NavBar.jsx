import React from 'react'
import styles from './NavBar.module.css';
import { Logo } from '../Logo/Logo';
import { Link } from 'react-router';

const NavBar = ({children}) => {
  return (
    <header>
      <nav className={styles.navContainer}>
          {children}
      </nav>
    </header>
  )
}

export default NavBar