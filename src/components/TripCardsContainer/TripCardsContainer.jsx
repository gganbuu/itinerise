import React from 'react'
import styles from './TripCardsContainer.module.css'
import TripCard from '../TripCard/TripCard'

const TripCardsContainer = ({children}) => {
  return (
    <div className={styles.tripCardsContainer}>
        {children}
    </div>
  )
}

export default TripCardsContainer