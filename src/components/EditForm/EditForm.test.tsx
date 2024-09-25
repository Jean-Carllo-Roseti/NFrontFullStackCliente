import React from 'react'

import { render, screen, fireEvent } from '@testing-library/react'
import TabelaConsulta from '../TabelaConsulta'
import useClientes from '../../hooks/useClientes'

jest.mock('../../hooks/useClientes', () => {
  return jest.fn()
})

describe('Tabela Consulta', () => {
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
      editCliente: mockEditCliente
    })
  })

  test('renders tabela de clientes', () => {
    render(<TabelaConsulta onBack={jest.fn()} />)

    expect(screen.getByTestId('tabelaCont')).toBeInTheDocument()
    expect(screen.getByText('Cliente 1')).toBeInTheDocument()
  })

  test('Deve exibir o EditForm ao clicar no botão de editar', () => {
    render(<TabelaConsulta onBack={jest.fn()} />)

    expect(screen.getByTestId('alterar')).toBeInTheDocument()
    fireEvent.click(screen.getByTestId('alterar'))

    expect(screen.getByTestId('formEdicao')).toBeInTheDocument()

    fireEvent.change(screen.getByDisplayValue('Cliente 1'), {
      target: { value: 'Cliente 1 Atualizado' }
    })

    fireEvent.click(screen.getByText('Salvar'))

    expect(mockEditCliente).toHaveBeenCalledWith(1, {
      id: 1,
      nome: 'Cliente 1 Atualizado',
      sobreNome: 'SobreNome 1',
      idade: 30,
      email: 'cliente1@example.com',
      endereco: 'Rua A',
      cidade: 'Cidade A',
      estado: 'Estado A'
    })
  })
})
