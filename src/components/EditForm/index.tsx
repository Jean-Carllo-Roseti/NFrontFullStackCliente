import React, { useState } from 'react'
import { Cliente } from '../../types/index'
import { ContentForm, ContentButton } from '../FormCadastro/style'
import { Botoes } from '../FormCadastro/style'
import Select from 'react-select'

const estados = [
  { label: 'AC', value: 'AC ' },
  { label: 'AL', value: 'AL' },
  { label: 'AP', value: 'AP' },
  { label: 'AM', value: 'AM' },
  { label: 'BA', value: 'BA' },
  { label: 'CE', value: 'CE' },
  { label: 'DF', value: 'DF' },
  { label: 'ES', value: 'ES' },
  { label: 'GO', value: 'Go' },
  { label: 'MA', value: 'MA' },
  { label: 'MT', value: 'MT' },
  { label: 'MS', value: 'MS' },
  { label: 'MG', value: 'MG' },
  { label: 'PA', value: 'PA' },
  { label: 'PB', value: 'PB' },
  { label: 'PR', value: 'PA' },
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

const EditForm: React.FC<{
  cliente: Cliente
  onSave: (cliente: Cliente) => void
  onCancel: () => void
}> = ({ cliente, onSave, onCancel }) => {
  const [editorClient, setEditorCliente] = useState<Cliente>(cliente)
  const [mensagem, setMensagem] = useState<string | null>(null)
  const [selectedState, setSelectedState] = useState<{
    value: string
    label: string
  } | null>(null)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target

    if (id === 'idade') {
      const onlyNumbers = value.replace(/[^0-9]/g, '')

      // Definir limites para a idade
      const minAge = 18 // Valor mínimo
      const maxAge = 120 // Valor máximo

      let age = Number(onlyNumbers)

      // Aplicar os limites: se for menor que o mínimo ou maior que o máximo
      if (age < minAge) age = minAge
      if (age > maxAge) age = maxAge

      setEditorCliente((prevCliente) => ({
        ...prevCliente,
        [id]: age || 0 // Definir a idade como 0 se o campo estiver vazio
      }))
    } else {
      setEditorCliente((prevCliente) => ({
        ...prevCliente,
        [id]: value
      }))
    }
  }

  const handleChange = (
    selectedOption: { value: string; label: string } | null
  ) => {
    setSelectedState(selectedOption)
    if (selectedOption) {
      setEditorCliente((prevCliente) => ({
        ...prevCliente,
        estado: selectedOption.value
      }))
    } else {
      setEditorCliente((prevCliente) => ({ ...prevCliente, estado: '' }))
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
            required
            value={editorClient.nome}
            onChange={onChange}
          />
          <label htmlFor="sobreNome">Sobre Nome</label>
          <input
            id="sobreNome"
            type="text"
            required
            value={editorClient.sobreNome}
            onChange={onChange}
          />
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            required
            value={editorClient.email}
            onChange={onChange}
          />
          <label htmlFor="idade">Idade</label>
          <input
            max={120}
            id="idade"
            type="text"
            required
            value={editorClient.idade}
            onChange={onChange}
            maxLength={2}
          />
          <label htmlFor="endereco">Endereço</label>
          <input
            id="endereco"
            type="text"
            required
            value={editorClient.endereco}
            onChange={onChange}
          />
          <label htmlFor="cidade">Cidade</label>
          <input
            id="cidade"
            type="text"
            required
            value={editorClient.cidade}
            onChange={onChange}
          />
          <label htmlFor="estado">Estado</label>
          <Select
            className="campoSelect"
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
