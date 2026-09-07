import React from 'react'
import styles from './TextInput.module.css'

const TextInput = ({placeholder, name}) => {
  return (
    <input type="text" name={name} placeholder={placeholder} />
  )
}

export default TextInput