import React from 'react'
import styles from './FilterButton.module.css'

const FilterButton = ({onClick, name}) => {
  return (
    <button className={styles.filterButton} onClick={() => onClick}>
        <p>{name}</p>
    </button>
  )
}

export default FilterButton