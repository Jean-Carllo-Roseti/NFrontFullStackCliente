import React from 'react'
import { GlobalCss } from './styles'

import Header from './components/Header'
import TabelaConsulta from './components/TabelaConsulta'
import FormCadastro from './components/FormCadastro'

function App() {
  return (
    <>
      <GlobalCss />
      <div>
        <Header />
        <FormCadastro />
        <TabelaConsulta />
      </div>
    </>
  )
}

export default App
