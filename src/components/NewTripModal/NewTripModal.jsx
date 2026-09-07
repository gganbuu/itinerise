import styles from "./NewTripModal.module.css"
import React from 'react'
import TextInput from "../TextInput/TextInput"
import SecondaryButton from "../SecondaryButton/SecondaryButton"
import PageButton from "../PageButton/PageButton"
import DateInput from "../DateInput/DateInput"

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
                <main className={styles.newTripMain}> 
                    <label className={styles.modalLabel} htmlFor="tripName">Trip name 
                        <TextInput placeholder="the best trip ever"/>
                    </label>

                    <label className={styles.modalLabel} htmlFor="tripName">Destination 
                        <TextInput name placeholder="Timbuktoo"/>
                    </label>

                    <div className={styles.dateLabel}>
                        <label className={styles.modalLabel} htmlFor="tripName">Start Date 
                            <DateInput/>
                        </label>
                        <label className={styles.modalLabel} htmlFor="tripName">End Date 
                            <DateInput/>
                        </label>
                    </div>
                </main>
                <hr />
                <footer>
                    <SecondaryButton name="Cancel"/>
                    <PageButton name="Create trip"></PageButton>
                </footer>
            </div>
        </div>
    )
}

export default NewTripModal;
