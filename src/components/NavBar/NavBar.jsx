import React from 'react'
import styles from './NavBar.module.css';
import { Logo } from '../Logo/Logo';


const NavBar = ({children}) => {
  return (
    <header>
      <nav className={styles.navContainer}>
          <Logo/>
          {children}
      </nav>
    </header>
  )
}

export default NavBar