import React, { useState } from 'react'
import { ContentButton, ContentForm } from './style'
import useClientes from '../../hooks/useClientes'
import { Cliente } from '../../types'

const FormCadastro = () => {
  const { addCliente } = useClientes()

  const [cliente, setCliente] = useState<Cliente>({
    id: 0,
    nome: '',
    sobreNome: '',
    email: '',
    idade: 0,
    endereco: '',
    cidade: '',
    estado: ''
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setCliente((prevCliente) => ({
      ...prevCliente,
      [id]: id === 'idade' ? Number(value) : value // Converta a idade para número
    }))
  }

  // Função chamada quando o formulário é enviado
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addCliente(cliente)
  }

  return (
    <ContentForm>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          type="text"
          placeholder="Nome"
          value={cliente.nome}
          onChange={onChange}
        />
        <label htmlFor="sobreNome">Sobre Nome</label>
        <input
          id="sobreNome"
          type="email"
          placeholder="Sobre Nome"
          value={cliente.sobreNome}
          onChange={onChange}
        />
        <label htmlFor="email"> E-mail</label>
        <input
          id="email"
          type="email"
          placeholder="E-mail"
          value={cliente.email}
          onChange={onChange}
        />
        <label htmlFor="idade">Idade</label>
        <input
          id="idade"
          type="number"
          placeholder="Idade"
          value={cliente.idade}
          onChange={onChange}
        />
        <label htmlFor="endereco">Endereço</label>
        <input
          id="endereco"
          type="text"
          placeholder="Endereço"
          value={cliente.endereco}
          onChange={onChange}
        />
        <label htmlFor="cidade">Cidade</label>
        <input
          id="cidade"
          type="text"
          placeholder="Cidade"
          value={cliente.cidade}
          onChange={onChange}
        />
        <label htmlFor="estado">Estado</label>
        <input
          id="estado"
          type="text"
          placeholder="Estado"
          value={cliente.estado}
          onChange={onChange}
        />
      </form>
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
      </ContentButton>
    </ContentForm>
  )
}

export default FormCadastro
