import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://backfullstackcliente-production.up.railway.app/api'
})

export default axiosInstance
