import React from 'react'
import styles from './SearchBar.module.css'
import { input } from '@testing-library/user-event/dist/cjs/event/input.js'

const SearchBar = () => {
  return (
    <input className={styles.searchBar}
           type="text"
           placeholder="search trips"

    />
  )
}

export default SearchBar