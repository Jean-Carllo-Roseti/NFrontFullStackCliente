import { useState, useEffect } from 'react'
import {
  getClientes,
  createCliente,
  updateCliente,
  deleteCliente
} from '../services/clienteService'
import { Cliente } from '../types'

const useClientes = () => {
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getClientes()
        setClientes(data)
      } catch (err) {
        console.error('Erro de requermiento de  clientes:', err)
        setError('Erro de requermiento de  clientes')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const addCliente = async (cliente: Cliente) => {
    try {
      const novoCliente = await createCliente(cliente)
      setClientes([...clientes, novoCliente])
    } catch (err) {
      console.error('Erro ao criar cliente:', err)
      setError('Erro ao criar cliente')
    }
  }

  const editCliente = async (id: number, cliente: Cliente) => {
    try {
      const clienteAtualizado = await updateCliente(id, cliente)
      setClientes(clientes.map((c) => (c.id === id ? clienteAtualizado : c)))
    } catch (err) {
      console.error('Erro ao editar o cliente:', err)
      setError('Erro ao editar o cliente')
    }
  }

  const removeCliente = async (id: number) => {
    try {
      await deleteCliente(id)
      setClientes(clientes.filter((cliente) => cliente.id !== id))
    } catch (err) {
      console.error('Erro ao deletar cliente:', err)
      setError('Erro ao deletar cliente')
    }
  }

  return { clientes, loading, error, addCliente, editCliente, removeCliente }
}

export default useClientes
