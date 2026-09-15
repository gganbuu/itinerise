import React from 'react'

const DateInput = ({id, name, required}) => {
  return (
    <input id={id}
           type="date"
           name={name}
           required={required}/>
  )
}

export default DateInput