import Axios from 'axios'

const axiosInstance = Axios.create({
  baseURL: import.meta.env.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
})

export default axiosInstance