import { useState } from 'react'
import { HeroForm } from '../../components'
import axios from '../../utils/axiosConfig'

const initialState = {
  name: '',
  alterEgo: '',
  firstAppearance: '',
  publisher: ''
}

const CreateHero = () => {
  const [hero, setHero] = useState(initialState)

  const handleChange = (e) => {
    setHero({
      ...hero,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // what to do when we submit the form?
    axios.post('', hero)
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
  }


  return (
    <div>
      <h2>Add a New Hero</h2>
      <HeroForm 
        hero={hero}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        submitText="Create Hero"
      />
    </div>
  )
}

export default CreateHero