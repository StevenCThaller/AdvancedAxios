import React from 'react'

const TextInput = ({ label, name, value, handleChange }) => {
  return (
    <label>
      { label }:&nbsp;
      <input type="text" name={name} value={value} onChange={handleChange} />
    </label>
  )
}

export default TextInput