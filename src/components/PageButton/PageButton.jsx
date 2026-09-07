import styles from './PageButton.module.css'

import React from 'react'

const PageButton = ({name, onClick}) => {
  return (
    <button onClick={onClick} className={styles.pageButton}>
        {name}
    </button>
  )
}

export default PageButton