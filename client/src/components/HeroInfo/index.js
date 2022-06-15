import React from 'react'

const HeroInfo = ({ name, alterEgo, firstAppearance, publisher}) => {

  const handleDelete = () => {
    
  }

  return (
    <div>
      <h1>{name}, a.k.a {alterEgo}</h1>
      <p>First appeared in {firstAppearance}, and published by {publisher}</p>
      <button onClick={handleDelete}>Delete { name }</button>
    </div>
  )
}

export default HeroInfo