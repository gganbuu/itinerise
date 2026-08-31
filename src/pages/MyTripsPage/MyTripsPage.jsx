import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import styles from './MyTripsPage.module.css'

const MyTripsPage = () => {
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main className={styles.myTripsBody}>
        <h1>My Trips</h1>
      </main>
    </>
  )
}

export default MyTripsPage;