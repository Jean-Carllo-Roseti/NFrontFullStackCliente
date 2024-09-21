import React from 'react'
import { render, screen } from '@testing-library/react'
import FormCadastro from './index' // supondo que o componente se chama FormCadastro

test('Deve renderizar o formulário com os campos corretos', () => {
  render(<FormCadastro />)
  // Testar se o título está presente
  // expect(screen.getByText(/Cvs Online/i)).toBeInTheDocument()
  expect(screen.getByText(/Dados Pessoais/i)).toBeInTheDocument()

  // Testar se os campos do formulário estão presentes
  expect(screen.getByTestId('testeNome')).toBeInTheDocument()
  expect(screen.getByTestId('testeSobre')).toBeInTheDocument()
  expect(screen.getByTestId('testeE-mail')).toBeInTheDocument()
  expect(screen.getByTestId('testeIdade')).toBeInTheDocument()
  expect(screen.getByTestId('testeEnd')).toBeInTheDocument()
  expect(screen.getByTestId('testeCid')).toBeInTheDocument()
  expect(screen.getByTestId('testeEst')).toBeInTheDocument()
})
