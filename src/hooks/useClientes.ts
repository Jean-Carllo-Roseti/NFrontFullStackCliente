import { useReducer, useEffect } from 'react'
import {
  getClientes,
  createCliente,
  updateCliente,
  deleteCliente
} from '../services/clienteService'
import { Cliente } from '../types'

type State = {
  clientes: Cliente[]
  loading: boolean
  error: string | null
}

type Action =
  | { type: 'FETCH_SUCCESS'; payload: Cliente[] }
  | { type: 'FETCH_ERROR'; payload: string }
  | { type: 'ADD_CLIENTE'; payload: Cliente }
  | { type: 'EDIT_CLIENTE'; payload: Cliente }
  | { type: 'REMOVE_CLIENTE'; payload: number }

const initialState: State = {
  clientes: [],
  loading: true,
  error: null
}

const clienteReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return { ...state, clientes: action.payload, loading: false }
    case 'FETCH_ERROR':
      return { ...state, error: action.payload, loading: false }
    case 'ADD_CLIENTE':
      return { ...state, clientes: [...state.clientes, action.payload] }
    case 'EDIT_CLIENTE':
      return {
        ...state,
        clientes: state.clientes.map((c) =>
          c.id === action.payload.id ? action.payload : c
        )
      }
    case 'REMOVE_CLIENTE':
      return {
        ...state,
        clientes: state.clientes.filter((c) => c.id !== action.payload)
      }
    default:
      return state
  }
}

const useClientes = () => {
  const [state, dispatch] = useReducer(clienteReducer, initialState)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getClientes()
        dispatch({ type: 'FETCH_SUCCESS', payload: data })
      } catch (err) {
        console.error('Erro ao buscar clientes:', err)
        dispatch({ type: 'FETCH_ERROR', payload: 'Erro ao buscar clientes' })
      }
    }

    fetchData()
  }, [])

  const addCliente = async (cliente: Cliente) => {
    const idTemporario = Date.now() // ID temporário
    const clienteTemporario = { ...cliente, id: idTemporario }
    dispatch({ type: 'ADD_CLIENTE', payload: clienteTemporario })

    try {
      const novoCliente = await createCliente(cliente)
      dispatch({ type: 'EDIT_CLIENTE', payload: novoCliente })
    } catch (err) {
      console.error('Erro ao criar cliente:', err)
      dispatch({ type: 'REMOVE_CLIENTE', payload: idTemporario })
      dispatch({ type: 'FETCH_ERROR', payload: 'Erro ao criar cliente' })
    }
  }

  const editCliente = async (id: number, cliente: Cliente) => {
    try {
      const clienteAtualizado = await updateCliente(id, cliente)
      dispatch({ type: 'EDIT_CLIENTE', payload: clienteAtualizado })
    } catch (err) {
      console.error('Erro ao editar o cliente:', err)
      dispatch({ type: 'FETCH_ERROR', payload: 'Erro ao editar cliente' })
    }
  }

  const removeCliente = async (id: number) => {
    try {
      await deleteCliente(id)
      dispatch({ type: 'REMOVE_CLIENTE', payload: id })
    } catch (err) {
      console.error('Erro ao remover cliente:', err)
      dispatch({ type: 'FETCH_ERROR', payload: 'Erro ao remover cliente' })
    }
  }

  return { ...state, addCliente, editCliente, removeCliente }
}

export default useClientes
