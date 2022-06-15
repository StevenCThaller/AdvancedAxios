import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8000/api'
})

instance.interceptors.response.use(
  function(response) {
    return response.data
  },
  function(error) {
    throw error.response.data
  }
)

export default instance