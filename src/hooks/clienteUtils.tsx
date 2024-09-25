import React from 'react'
import { Cliente } from '../types'

// Lista de estados
export const estados = [
  { label: 'AC', value: 'AC' },
  { label: 'AL', value: 'AL' },
  { label: 'AP', value: 'AP' },
  { label: 'AM', value: 'AM' },
  { label: 'BA', value: 'BA' },
  { label: 'CE', value: 'CE' },
  { label: 'DF', value: 'DF' },
  { label: 'ES', value: 'ES' },
  { label: 'GO', value: 'GO' },
  { label: 'MA', value: 'MA' },
  { label: 'MT', value: 'MT' },
  { label: 'MS', value: 'MS' },
  { label: 'MG', value: 'MG' },
  { label: 'PA', value: 'PA' },
  { label: 'PB', value: 'PB' },
  { label: 'PR', value: 'PR' },
  { label: 'PE', value: 'PE' },
  { label: 'PI', value: 'PI' },
  { label: 'RJ', value: 'RJ' },
  { label: 'RN', value: 'RN' },
  { label: 'RS', value: 'RS' },
  { label: 'RO', value: 'RO' },
  { label: 'RR', value: 'RR' },
  { label: 'SC', value: 'SC' },
  { label: 'SP', value: 'SP' },
  { label: 'SE', value: 'SE' },
  { label: 'TO', value: 'TO' }
]

// Estado inicial
export const initialState = {
  id: 0,
  nome: '',
  sobreNome: '',
  idade: 0,
  email: '',
  endereco: '',
  cidade: '',
  estado: ''
}

// Função para calcular a idade
export const calcularIdade = (
  id: string,
  value: string,
  setCliente: React.Dispatch<React.SetStateAction<Cliente>>
) => {
  if (id === 'idade') {
    const onlyNumbers = value.replace(/[^0-9]/g, '')

    // Definir limites para a idade
    const minAge = 18 // Valor mínimo
    const maxAge = 120 // Valor máximo

    let age = Number(onlyNumbers)

    // Aplicar os limites: se for menor que o mínimo ou maior que o máximo
    if (age < minAge) age = minAge
    if (age > maxAge) age = maxAge

    setCliente((prevCliente) => ({
      ...prevCliente,
      [id]: age || 0 // Definir a idade como 0 se o campo estiver vazio
    }))
  } else {
    setCliente((prevCliente) => ({
      ...prevCliente,
      [id]: value
    }))
  }
}
