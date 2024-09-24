import styled from 'styled-components'

export const ContentForm = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  width: 100%;
  margin-top: 60px;
  overflow: hidden; /* Evita o scroll indesejado */

  h2 {
    text-align: center;
    margin-bottom: 18px;
    color: #2c3e50;
  }

  form {
    background-color: #e74c3c;
    margin: 0 auto;
    margin-bottom: 12px;
    width: 40%;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    border: none; /* Remove a borda */
    outline: 10px solid #c0392b; /* Use o outline para criar a borda */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }

  label {
    margin: 12px 2px 2px 24px;
    color: #2c3e50;
  }

  input,
  .campoSelect {
    padding: 8px;
    width: 90%;
    margin: 0 auto;
    border-radius: 8px;
    border: none;
  }

  .campoSelect {
    margin: 0 auto;
    padding: 8px 0;
  }
`
export const ContentButton = styled.div`
  display: flex;
  justify-content: space-around;
`
export const Botoes = styled.button`
  background-color: #f1b692;
  width: 45%;
  padding: 8px;
  margin: 12px 0;
  cursor: pointer;
  border-radius: 6px;
  border: none;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #e67e22;
    color: #e9ded6;
  }
`

export const BotaoExibir = styled(Botoes)`
  width: 95%;
  margin: 0 auto;
  margin-bottom: 18px;
`
