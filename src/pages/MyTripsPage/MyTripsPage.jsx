import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import FilterBar from '../../components/FilterBar/FilterBar'
import FilterButton from '../../components/FilterBar/FilterButton'
import styles from './MyTripsPage.module.css'
import PageButton from '../../components/PageButton/PageButton'
import SearchBar from '../../components/SearchBar/SearchBar'
import TripCardsContainer from '../../components/TripCardsContainer/TripCardsContainer'
import TripCard from '../../components/TripCard/TripCard'
import NewTripCard from '../../components/NewTripCard/NewTripCard'
import NewTripModal from '../../components/NewTripModal/NewTripModal'

import { useState } from 'react'


const MyTripsPage = () => {
  const [modalState, setModalState] = useState(false)
  const toggleModal = () => {
    console.log("modal hit")
    setModalState(!modalState)
  } 

  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main className={styles.myTripsMain}>
        <h1>My Trips</h1>
        <FilterBar>
          <div className={styles.tabCluster}>
            <FilterButton name="All"/>
            <FilterButton name="Upcoming"/>
            <FilterButton name="Past"/>
          </div>

          <div className={styles.buttonCluster}>
            <PageButton name="New trip" onClick={() => toggleModal()}/>
            <SearchBar/>
          </div>
        </FilterBar>

        <TripCardsContainer>
          <TripCard title="Malaysia: Kuala Lumpur & Penang"
                    startDate="2026-09-24"
                    endDate="2026-10-03"/>
          <NewTripCard/>
        </TripCardsContainer>
        
        {modalState && (<NewTripModal onClose={toggleModal}/>)}
      </main>
      <footer>

      </footer>
    </>
  )
}

export default MyTripsPage;