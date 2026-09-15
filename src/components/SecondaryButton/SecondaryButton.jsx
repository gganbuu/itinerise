import React from 'react'
import styles from './SecondaryButton.module.css'

const SecondaryButton = ({name, onClick, type = "button"}) => {
  return (
    <button className={styles.secondaryButton} type={type} onClick={onClick}>
        {name}
    </button>
  )
}

export default SecondaryButton