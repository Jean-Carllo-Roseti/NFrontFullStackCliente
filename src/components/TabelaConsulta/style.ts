import styled from 'styled-components'
import { Botoes } from '../FormCadastro/style'

export const ContentTabela = styled.div`
  margin: 20px;
  overflow-x: auto;
  background-color: #9e9e9ead;

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
    font-size: 14px;
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

  /* Responsividade */

  @media (max-width: 760px) {
    table {
      width: 100%; /* Mantém a tabela dentro da tela */
    }

    th,
    td {
      font-size: 12px; /* Diminui o tamanho da fonte */
      padding: 6px;
    }

    th:nth-child(5),
    td:nth-child(5),
    th:nth-child(6),
    td:nth-child(6),
    th:nth-child(7),
    td:nth-child(7) {
      display: none;
    }
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

  &:hover {
    background-color: #e74c3c;
  }
`
