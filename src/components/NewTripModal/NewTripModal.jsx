import styles from "./NewTripModal.module.css"
import React from 'react'
import TextInput from "../TextInput/TextInput"

const NewTripModal = ({onClose}) => {
  return (
    <div className={styles.newTripModal}>
        <div className={styles.newTripContainer}>
            <header>
                <div className={styles.newTripTitleAndButton}>
                    <h2>Plan a new trip</h2>
                    <button onClick={onClose}>x</button>
                </div>
                <p>add your vacation details here</p>
            </header>
            <hr />
            <main> 
                <label htmlFor="tripName">Trip name
                    <TextInput/>
                </label>

            </main>
            <hr />
            <footer>

            </footer>
        </div>
    </div>
  )
}

export default NewTripModal;
