import styled from 'styled-components'

export const ContentForm = styled.div`
  margin: 0 auto;

  h1 {
    text-align: center;
  }

  form {
    margin: 0 auto;
    width: 40%;
    display: flex;
    flex-direction: column;
  }

  label {
    margin: 12px 2px 2px 0;
  }

  input {
    padding: 8px;
  }
`
export const ContentButton = styled.div`
  display: flex;
  justify-content: space-around;

  button {
    width: 45%;
    padding: 6px;
    margin: 12px 0;
    cursor: pointer;
  }
`
