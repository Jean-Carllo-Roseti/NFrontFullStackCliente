import styled from 'styled-components'
import { Botoes } from '../FormCadastro/style'

export const ContentTabela = styled.div`
  margin: 20px;
  overflow-x: auto;
  background-color: #9e9e9ead;

  table {
    width: 100%;
    border-collapse: collapse;

    // @media (max-width: 760px) {
    //   width: 70%;
    // }
  }

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f4f4f4;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tr:hover {
    border: 2px solid #000;
  }
`
export const TableButton = styled.button`
  padding: 2px;
  margin: 0 4px 0 0;
  cursor: pointer;
  background-color: red;
`
export const BotoesAjuste = styled(Botoes)`
  margin-left: 20px;
  width: 20%;

  &: hover {
    background-color: #e74c3c;
  }
`
