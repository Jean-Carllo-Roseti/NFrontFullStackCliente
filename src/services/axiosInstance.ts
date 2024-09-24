import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://backfullstackcliente-production.up.railway.app/api'
})

export const buscarClientes = async () => {
  const response = await axiosInstance.get('/clientes') // A rota pode ser ajustada conforme necessário
  return response.data
}
export default axiosInstance
