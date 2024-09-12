import React from 'react'
import { ContentTabela } from './style'

const TabelaConsulta = () => (
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
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>João</td>
          <td>Nunes</td>
          <td>joaoDaSilva@gmail.com</td>
          <td>43</td>
          <td>a.v Martins Fontes</td>
          <td>Magalhães</td>
          <td>Rs</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Flávia</td>
          <td>Augusta</td>
          <td>flaveteMoraesa@gmail.com</td>
          <td>29</td>
          <td>a.v Augustasss Fontes</td>
          <td>Magalhães</td>
          <td>Rs</td>
        </tr>
      </tbody>
    </table>
  </ContentTabela>
)

export default TabelaConsulta
