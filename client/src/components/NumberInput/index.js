import React from 'react'

const NumberInput = ({ label, name, value, handleChange }) => {
  return (
    <label>
      { label }:&nbsp;
      <input type="number" name={name} value={value} onChange={handleChange} />
    </label>
  )
}

export default NumberInput