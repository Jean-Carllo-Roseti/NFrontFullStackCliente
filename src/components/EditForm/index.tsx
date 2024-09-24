import React, { useState } from 'react'
import { Cliente } from '../../types/index'
import { ContentForm, ContentButton } from '../FormCadastro/style'
import { Botoes } from '../FormCadastro/style'

const EditForm: React.FC<{
  cliente: Cliente
  onSave: (cliente: Cliente) => void
  onCancel: () => void
}> = ({ cliente, onSave, onCancel }) => {
  const [editorClient, setEditorCliente] = useState<Cliente>(cliente)
  const [mensagem, setMensagem] = useState<string | null>(null)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target

    // Se for o campo de idade, aplique a regex para permitir apenas números
    if (id === 'idade') {
      const onlyNumbers = value.replace(/[^0-9]/g, '') // Permite apenas números
      setEditorCliente((prevCliente) => ({
        ...prevCliente,
        [id]: onlyNumbers ? Number(onlyNumbers) : 0 // Armazena a idade apenas com números
      }))
    } else {
      // Para os outros campos, basta atualizar o estado normalmente
      setEditorCliente((prevCliente) => ({
        ...prevCliente,
        [id]: value
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSave(editorClient)

    setMensagem('Cliente cadastrado com sucesso!')

    setTimeout(() => setMensagem(null), 3000)
  }

  return (
    <>
      {mensagem && (
        <p id="msgSucesso" style={{ color: 'green' }}>
          {mensagem}
        </p>
      )}
      <ContentForm style={{ paddingBottom: '18px' }}>
        <form data-testid="formEdicao" onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            type="text"
            value={editorClient.nome}
            onChange={onChange}
          />
          <label htmlFor="sobreNome">Sobre Nome</label>
          <input
            id="sobreNome"
            type="text"
            value={editorClient.sobreNome}
            onChange={onChange}
          />
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            value={editorClient.email}
            onChange={onChange}
          />
          <label htmlFor="idade">Idade</label>
          <input
            id="idade"
            type="text"
            value={editorClient.idade}
            onChange={onChange}
          />
          <label htmlFor="endereco">Endereço</label>
          <input
            id="endereco"
            type="text"
            value={editorClient.endereco}
            onChange={onChange}
          />
          <label htmlFor="cidade">Cidade</label>
          <input
            id="cidade"
            type="text"
            value={editorClient.cidade}
            onChange={onChange}
          />
          <label htmlFor="estado">Estado</label>
          <input
            id="estado"
            type="text"
            value={editorClient.estado}
            onChange={onChange}
          />
          <ContentButton>
            <Botoes type="submit">Salvar</Botoes>
            <Botoes type="button" onClick={onCancel}>
              Cancelar
            </Botoes>
          </ContentButton>
        </form>
      </ContentForm>
    </>
  )
}

export default EditForm
