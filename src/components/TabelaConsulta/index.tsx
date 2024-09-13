import React, { useState } from 'react'
import { ContentTabela } from './style'
import useClientes from '../../hooks/useClientes'
import EditForm from '../EditForm'
import { Cliente } from '../../types'

const TabelaConsulta: React.FC = () => {
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
    <ContentTabela>
      {editandoCliente && (
        <EditForm
          cliente={editandoCliente}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>nome</th>
            <th>sobre Nome</th>
            <th>idade</th>
            <th>email</th>
            <th>endereço</th>
            <th>cidade</th>
            <th>estado</th>
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
                <button
                  onClick={() => removeCliente(cliente.id)}
                  title="remover cadastro"
                >
                  X
                </button>
                <button
                  onClick={() => handleEdit(cliente)}
                  title="alterar cadastro"
                >
                  E
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </ContentTabela>
  )
}

export default TabelaConsulta
