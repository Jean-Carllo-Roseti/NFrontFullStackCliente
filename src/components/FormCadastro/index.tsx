import React, { useState } from 'react'
import { BotaoExibir, Botoes, ContentButton, ContentForm } from './style'
import useClientes from '../../hooks/useClientes'
import { Cliente } from '../../types'
import TabelaConsulta from '../TabelaConsulta'
import EditForm from '../EditForm'
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

const FormCadastro = () => {
  const { addCliente } = useClientes()
  const [selectedState, setSelectedState] = useState<{
    value: string
    label: string
  } | null>(null)
  const [exibirTabela, setExibirTabela] = useState(false)
  const [mensagem, setMensagem] = useState<string | null>(null)
  const [editandoCliente, setEditandoCliente] = useState<Cliente | null>(null)
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

  const handleToggeTabela = () => {
    setExibirTabela(!exibirTabela)
  }

  const handleChange = (
    selectedOption: { value: string; label: string } | null
  ) => {
    setSelectedState(selectedOption)
    if (selectedOption) {
      setCliente((prevCliente) => ({
        ...prevCliente,
        estado: selectedOption.value
      }))
    } else {
      setCliente((prevCliente) => ({ ...prevCliente, estado: '' }))
    }
  }

  const handleBack = () => {
    setExibirTabela(false)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addCliente(cliente)
    setCliente({
      id: 0,
      nome: '',
      sobreNome: '',
      idade: 0,
      email: '',
      endereco: '',
      cidade: '',
      estado: ''
    })
    setSelectedState(null) // Resetar a seleção do estado
    setMensagem('Cliente cadastrado com sucesso!')
    setTimeout(() => setMensagem(null), 3000)
  }

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

  const handleSave = (updatedCliente: Cliente) => {
    addCliente(updatedCliente)
    setEditandoCliente(null)
  }

  const handleCancel = () => {
    setEditandoCliente(null)
  }

  return (
    <ContentForm>
      <header>
        <h2>Dados Pessoais</h2>
      </header>
      {mensagem && (
        <p id="msgSucesso" style={{ color: 'green' }}>
          {mensagem}
        </p>
      )}
      {exibirTabela ? (
        <TabelaConsulta onBack={handleBack} onEdit={setEditandoCliente} />
      ) : editandoCliente ? (
        <EditForm
          cliente={editandoCliente}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      ) : (
        <form data-testid="formCastro" onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            type="text"
            placeholder="Nome"
            value={cliente.nome}
            onChange={onChange}
            required
            data-testid="testeNome"
          />
          <label htmlFor="sobreNome">Sobre Nome</label>
          <input
            id="sobreNome"
            type="text"
            placeholder="Sobre Nome"
            value={cliente.sobreNome}
            onChange={onChange}
            required
            data-testid="testeSobre"
          />
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            placeholder="E-mail"
            value={cliente.email}
            onChange={onChange}
            required
            data-testid="testeE-mail"
          />
          <label htmlFor="idade">Idade</label>
          <input
            data-testid="testeIdade"
            id="idade"
            type="text"
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
            data-testid="testeEnd"
          />
          <label htmlFor="cidade">Cidade</label>
          <input
            id="cidade"
            type="text"
            placeholder="Cidade"
            value={cliente.cidade}
            onChange={onChange}
            required
            data-testid="testeCid"
          />
          <label htmlFor="estado">Estado</label>
          <Select
            className="campoSelect"
            id="estado"
            placeholder="Selecione o Estado"
            value={selectedState}
            onChange={handleChange}
            options={estados}
            required
            data-testid="testeEst"
            styles={{
              menu: (base) => ({
                ...base,
                maxHeight: 200, // Defina a altura máxima do dropdown
                overflowY: 'hidden' // Permite rolagem se necessário
              }),
              option: (base, state) => ({
                ...base,
                cursor: 'pointer', // Define o cursor como pointer em todas as opções
                backgroundColor: state.isFocused ? '#f1b692' : '#fff', // Cor de fundo quando a opção é focada
                '&:hover': {
                  backgroundColor: '#f1b692' // Cor de fundo no hover
                }
              })
            }}
          />
          <ContentButton>
            <Botoes data-testid="salvar" type="submit">
              Salvar
            </Botoes>
            <Botoes
              type="button"
              data-testid="limpar"
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
            </Botoes>
          </ContentButton>
          <BotaoExibir
            className="exibir"
            data-testid="exibir"
            type="button"
            onClick={handleToggeTabela}
          >
            Exibir Tabela
          </BotaoExibir>
        </form>
      )}
    </ContentForm>
  )
}

export default FormCadastro
