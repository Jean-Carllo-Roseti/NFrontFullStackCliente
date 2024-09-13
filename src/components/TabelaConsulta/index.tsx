import React from 'react'
import { ContentTabela } from './style'
import useClientes from '../../hooks/useClientes'

const TabelaConsulta: React.FC = () => {
  const { clientes, loading, error, removeCliente } = useClientes()

  if (loading) return <p>Carregando...</p>
  if (error) return <p>{error}</p>

  return (
    <ContentTabela>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>nome</th>
            <th>sobre Nome</th>
            <th>email</th>
            <th>idade</th>
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
                <button onClick={() => removeCliente(cliente.id)}>
                  Remover
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
