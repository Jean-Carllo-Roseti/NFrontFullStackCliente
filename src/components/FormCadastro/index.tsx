import React, { useState } from 'react'
import { ContentButton, ContentForm } from './style'
import useClientes from '../../hooks/useClientes'
import { Cliente } from '../../types'
import TabelaConsulta from '../TabelaConsulta'
// import Header from '../Header'

const FormCadastro = () => {
  const { addCliente } = useClientes()
  const [exibirTabela, setExibirTabela] = useState(false)

  const handleToggeTabela = () => {
    setExibirTabela(!exibirTabela)
  }

  const handleBack = () => {
    setExibirTabela(false)
  }

  const [cliente, setCliente] = useState<Cliente>({
    id: 0,
    nome: '',
    sobreNome: '',
    idade: 0,
    email: '',
    endereco: '',
    cidade: '',
    estado: ''
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target

    setCliente({ ...cliente, [e.target.name]: e.target.value })
    setCliente((prevCliente) => ({
      ...prevCliente,
      [id]: id === 'idade' ? Number(value) : value // Converta a idade para número
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Chame a função para adicionar o cliente
    addCliente(cliente)
  }

  return (
    <>
      <header>
        <h1>Dados Pessoais</h1>
      </header>
      <ContentForm>
        {exibirTabela ? (
          <TabelaConsulta onBack={handleBack} />
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="nome">Nome</label>
            <input
              id="nome"
              type="text"
              placeholder="Nome"
              value={cliente.nome}
              onChange={onChange}
              required
            />
            <label htmlFor="sobreNome">Sobre Nome</label>
            <input
              id="sobreNome"
              type="text"
              placeholder="Sobre Nome"
              value={cliente.sobreNome}
              onChange={onChange}
              required
            />
            <label htmlFor="email"> E-mail</label>
            <input
              id="email"
              type="email"
              placeholder="E-mail"
              value={cliente.email}
              onChange={onChange}
              required
            />
            <label htmlFor="idade">Idade</label>
            <input
              id="idade"
              type="number"
              placeholder="Idade"
              value={cliente.idade}
              onChange={onChange}
              required
            />
            <label htmlFor="endereco">Endereço</label>
            <input
              id="endereco"
              type="text"
              placeholder="Endereço"
              value={cliente.endereco}
              onChange={onChange}
              required
            />
            <label htmlFor="cidade">Cidade</label>
            <input
              id="cidade"
              type="text"
              placeholder="Cidade"
              value={cliente.cidade}
              onChange={onChange}
              required
            />
            <label htmlFor="estado">Estado</label>
            <input
              id="estado"
              type="text"
              placeholder="Estado"
              value={cliente.estado}
              onChange={onChange}
              required
            />
            <ContentButton>
              <button type="submit">Salvar</button>
              <button
                type="button"
                onClick={() =>
                  setCliente({
                    id: 0,
                    nome: '',
                    sobreNome: '',
                    email: '',
                    idade: 0,
                    endereco: '',
                    cidade: '',
                    estado: ''
                  })
                }
              >
                Limpar
              </button>
              <button type="button" onClick={handleToggeTabela}>
                Exibir Tabela
              </button>
            </ContentButton>
          </form>
        )}
      </ContentForm>
    </>
  )
}

export default FormCadastro
