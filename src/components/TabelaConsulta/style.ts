import styled from 'styled-components'

// export const ContentTabela = styled.div`
//   margin: 0 auto;
//   background-color: #ddd;
//   margin-top: 18px;

//   table {
//     width: 100%;

//   }
// `

export const ContentTabela = styled.div`
  margin: 20px;
  // overflow-x: auto; /* Permite rolar horizontalmente se necessário */

  table {
    width: 100%;
    border-collapse: collapse; /* Remove espaços entre as células */
  }

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center; /* Centraliza o texto horizontalmente */
  }

  th {
    background-color: #f4f4f4;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tr:hover {
    background-color: #f1f1f1;
  }

  button {
    margin: 0 4px 0 0;
  }
`
