import axiosInstance from './axiosInstance'
import { Cliente } from '../types'

export const getClientes = async (): Promise<Cliente[]> => {
  const response = await axiosInstance.get('/clientes')
  return response.data
}

export const createCliente = async (cliente: Cliente): Promise<Cliente> => {
  const response = await axiosInstance.post('/clientes', cliente)
  return response.data
}

export const updateCliente = async (
  id: number,
  cliente: Cliente
): Promise<Cliente> => {
  const response = await axiosInstance.put(`/clientes/${id}`, cliente)
  return response.data
}

export const deleteCliente = async (id: number): Promise<void> => {
  await axiosInstance.delete(`/clientes/${id}`)
}
