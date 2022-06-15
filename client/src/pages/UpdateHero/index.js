import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { HeroForm } from '../../components'
import axios from '../../utils/axiosConfig'

const initialState = {
  name: '',
  alterEgo: '',
  firstAppearance: '',
  publisher: ''
}

const UpdateHero = () => {
  const [hero, setHero] = useState(initialState)
  const [loaded, setLoaded] = useState(false)
  const { index } = useParams()

  useEffect(() => {
    // get the hero that we want to update
    axios.get(`/${index}`)
      .then((response) => {
        setHero(response.result)
        setLoaded(true)
      })
      .catch((error) => console.log(error))
  }, [])

  const handleChange = (e) => {
    setHero({
      ...hero,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.put(`/${index}`, hero)  
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
  }

  return (
    <div>
      {
        loaded ?
        <>
          <h2>Update { hero.name }</h2>
          <HeroForm 
            hero={hero}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            submitText="Update Hero"
          />
        </>
        :
        <p>Loading</p>
      }
    </div>
  )
}

export default UpdateHero