import { useEffect } from 'react'
import axios from '../../utils/axiosConfig'

const AllHeroes = () => {
  useEffect(() => {
    // Because this axios instance is coming from axiosConfig, it already has
    // the base http://localhost:8000/api route preceding whatever we pass in
    axios.get('')
      .then((response) => {
        console.log(response) // this works because of the intercepter for responses
        // that we set up in the axiosConfig file
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const deleteFirstItem = () => {
    axios.delete('/0')
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
  }

  return (
    <div>
      AllHeroes
      <button onClick={deleteFirstItem}>Delete First Item</button>
    </div>
  )
}

export default AllHeroes