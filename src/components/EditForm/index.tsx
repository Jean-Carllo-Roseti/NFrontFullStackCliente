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

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setEditorCliente((prev) => ({
      ...prev,
      [id]: id === 'idade' ? Number(value) : value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSave(editorClient)
  }

  return (
    <ContentForm style={{ paddingBottom: '18px' }}>
      <form onSubmit={handleSubmit}>
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
          type="number"
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
  )
}

export default EditForm
