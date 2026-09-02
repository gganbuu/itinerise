import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import FilterBar from '../../components/FilterBar/FilterBar'
import FilterButton from '../../components/FilterBar/FilterButton'
import styles from './MyTripsPage.module.css'
import PageButton from '../../components/PageButton/PageButton'
import SearchBar from '../../components/SearchBar/SearchBar'


const MyTripsPage = () => {
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
            <PageButton name="New trip"/>
            <SearchBar/>
          </div>
        </FilterBar>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default MyTripsPage;