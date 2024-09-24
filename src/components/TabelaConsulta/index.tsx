import React, { useState } from 'react'
import { BotoesAjuste, ContentTabela, TableButton } from './style'
import useClientes from '../../hooks/useClientes'
import EditForm from '../EditForm'
import { Cliente } from '../../types'
import { FaTrash } from 'react-icons/fa'
import { FaPen } from 'react-icons/fa'

interface TabelaConsultaProps {
  onBack: () => void
  onEdit?: React.Dispatch<React.SetStateAction<Cliente | null>>
}

const TabelaConsulta: React.FC<TabelaConsultaProps> = ({ onBack }) => {
  const { clientes, loading, error, removeCliente, editCliente } = useClientes()
  const [editandoCliente, setEditandoCliente] = useState<Cliente | null>(null)

  if (loading) return <p>Carregando...</p>
  if (error) return <p>{error}</p>

  const handleEdit = (cliente: Cliente) => {
    setEditandoCliente(cliente)
  }

  const handleSave = (cliente: Cliente) => {
    editCliente(cliente.id, cliente)
    setEditandoCliente(null)
  }

  const handleCancel = () => {
    setEditandoCliente(null)
  }

  return (
    <>
      <BotoesAjuste onClick={onBack} title="fechar tabela">
        Tela de cadastro
      </BotoesAjuste>
      <ContentTabela
        style={{
          backgroundColor: editandoCliente ? 'transparent' : '#9e9e9ead'
        }}
      >
        {editandoCliente ? (
          <EditForm
            cliente={editandoCliente}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        ) : (
          <table data-testid="tabelaCont">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Sobre Nome</th>
                <th>Idade</th>
                <th>E-mail</th>
                <th>Endereço</th>
                <th>Cidade</th>
                <th>Estado</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((cliente) => (
                <tr key={cliente.id}>
                  <td>{cliente.id}</td>
                  <td>{cliente.nome}</td>
                  <td>{cliente.sobreNome}</td>
                  <td>{cliente.idade}</td>
                  <td>{cliente.email}</td>
                  <td>{cliente.endereco}</td>
                  <td>{cliente.cidade}</td>
                  <td>{cliente.estado}</td>
                  <td>
                    <TableButton
                      onClick={() => removeCliente(cliente.id)}
                      title="remover cadastro"
                      data-testid="remover"
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#d65547', // Cor do ícone
                        fontSize: '20px' // Tamanho do ícone
                      }}
                      aria-label="Delete"
                    >
                      <FaTrash />
                    </TableButton>
                    <button
                      onClick={() => handleEdit(cliente)}
                      title="alterar cadastro"
                      data-testid="alterar"
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#39435a', // Cor do ícone
                        fontSize: '20px' // Tamanho do ícone
                      }}
                      aria-label="Edit"
                    >
                      <FaPen />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </ContentTabela>
    </>
  )
}

export default TabelaConsulta
