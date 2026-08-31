import React from 'react'
import styles from './NavBar.module.css';
import { Logo } from '../Logo/Logo';


const NavBar = ({children}) => {
  return (
    <div className={styles.navContainer}>
        <Logo/>
        {children}
    </div>
  )
}

export default NavBar