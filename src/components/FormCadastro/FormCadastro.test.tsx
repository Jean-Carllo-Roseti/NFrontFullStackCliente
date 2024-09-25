import React from 'react'
import { render, screen } from '@testing-library/react'
import FormCadastro from './index' // supondo que o componente se chama FormCadastro

test('Deve renderizar o formulário com os campos corretos e botões.', () => {
  render(<FormCadastro />)
  // Testar se o título está presente
  // expect(screen.getByText(/Cvs Online/i)).toBeInTheDocument()
  expect(screen.getByText(/Dados Pessoais/i)).toBeInTheDocument()

  // Testar se os campos do formulário estão presentes
  expect(screen.getByTestId('formCastro')).toBeInTheDocument()
  expect(screen.getByTestId('testeNome')).toBeInTheDocument()
  expect(screen.getByTestId('testeSobre')).toBeInTheDocument()
  expect(screen.getByTestId('testeE-mail')).toBeInTheDocument()
  expect(screen.getByTestId('testeIdade')).toBeInTheDocument()
  expect(screen.getByTestId('testeEnd')).toBeInTheDocument()
  expect(screen.getByTestId('testeCid')).toBeInTheDocument()
  // expect(screen.getByTestId('testeEst')).toBeInTheDocument()

  //Testar se os botões estão renderizando
  expect(screen.getByTestId('exibir')).toBeInTheDocument()
  expect(screen.getByTestId('salvar')).toBeInTheDocument()
  expect(screen.getByTestId('limpar')).toBeInTheDocument()
})
