import styles from './PageButton.module.css'

import React from 'react'

const PageButton = ({name, onClick, type = "button" }) => {
  return (
    <button type={type} onClick={onClick} className={styles.pageButton}>
        {name}
    </button>
  )
}

export default PageButton