import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import TabelaConsulta from './index'
import useClientes from '../../hooks/useClientes'

// Mock da função useClientes
jest.mock('../../hooks/useClientes', () => {
  return jest.fn()
})

describe('TabelaConsulta', () => {
  const mockRemoveCliente = jest.fn()
  const mockEditCliente = jest.fn()

  beforeEach(() => {
    ;(useClientes as jest.Mock).mockReturnValue({
      clientes: [
        {
          id: 1,
          nome: 'Cliente 1',
          sobreNome: 'SobreNome 1',
          idade: 30,
          email: 'cliente1@example.com',
          endereco: 'Rua A',
          cidade: 'Cidade A',
          estado: 'Estado A'
        }
      ],
      loading: false,
      error: null,
      removeCliente: mockRemoveCliente,
      editCliente: mockEditCliente
    })
  })

  test('renders tabela de clientes', () => {
    render(<TabelaConsulta onBack={jest.fn()} />)

    expect(screen.getByTestId('tabelaCont')).toBeInTheDocument()
    expect(screen.getByText('Cliente 1')).toBeInTheDocument()
    expect(screen.getByTestId('alterar')).toBeInTheDocument()
    expect(screen.getByTestId('remover')).toBeInTheDocument()
  })

  test('deve chamar removeCliente ao clicar no botão de remover', () => {
    render(<TabelaConsulta onBack={jest.fn()} />)

    fireEvent.click(screen.getByLabelText('Delete'))

    expect(mockRemoveCliente).toHaveBeenCalledWith(1)
  })
})
