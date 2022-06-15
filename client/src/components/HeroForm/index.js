import React from 'react'
import NumberInput from '../NumberInput'
import TextInput from '../TextInput'

const HeroForm = ({ hero, handleChange, handleSubmit, submitText}) => {
  const { name, alterEgo, firstAppearance, publisher } = hero
  return (
    <form onSubmit={handleSubmit}>
      <TextInput 
        label="Name"
        name="name"
        value={name}
        handleChange={handleChange}
      />
      <TextInput
        label="Alter Ego"
        name="alterEgo"
        value={alterEgo}
        handleChange={handleChange}
      />
      <NumberInput 
        label="First Appearance"
        name="firstAppearance"
        value={firstAppearance}
        handleChange={handleChange}
      />
      <TextInput 
        label="Publisher"
        name="publisher"
        value={publisher}
        handleChange={handleChange}
      />
      <input type="submit" value={submitText}/>
    </form>
  )
}

export default HeroForm