import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../../utils/axiosConfig'

const OneHero = () => {
  // get the one hero based on the index --> route parameter
  const { index } = useParams()

  useEffect(() => {
    axios.get(`/${index}`)
      .then((response) => console.log(response))
      .catch((error) => console.log)
  }, [index])

  return (
    <div>OneHero</div>
  )
}

export default OneHero