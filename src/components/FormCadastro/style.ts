import styled from 'styled-components'

export const ContentForm = styled.div`
  max-width: 40%;
  margin: 0 auto;

  form {
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
