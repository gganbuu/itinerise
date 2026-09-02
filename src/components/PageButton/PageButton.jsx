import styles from './PageButton.module.css'

import React from 'react'

const PageButton = ({name}) => {
  return (
    <button className={styles.pageButton}>
        {name}
    </button>
  )
}

export default PageButton