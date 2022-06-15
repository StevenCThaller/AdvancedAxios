import axios from 'axios'

// ensures that all axios calls will have the url appended to
// this base url. this makes it so we do not have to write out
// 'http://localhost:8000/api' every time we make an axios call
const instance = axios.create({
  baseURL: 'http://localhost:8000/api'
})

instance.interceptors.response.use(
  // Function to intercept a non-error response; modifies what the parameter of axios'
  // .then() callback will be
  function(response) {
    return response.data
  },
  // Function to intercept an error response; modifies what the parameter of axios' 
  // .catch() callback will be
  function(error) {
    throw error.response.data
  }
)

export default instance