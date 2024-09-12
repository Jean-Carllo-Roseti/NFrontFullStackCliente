import React from 'react'

const FormCadastro = () => (
  <div>
    <form action="">
      <label htmlFor="nome">Nome:</label>
      <input id="nome" type="text" placeholder="Nome" />
      <label htmlFor="sobreNome">Sobre Nome</label>
      <input id="sobreNome" type="email" placeholder="Sobre Nome" />
      <label htmlFor="email"> E-mail</label>
      <input id="email" type="email" placeholder="E-mail" />
      <label htmlFor="idade">Idade</label>
      <input id="idade" type="number" placeholder="Idade" />
      <label htmlFor="endereco">Endereço</label>
      <input id="endereco" type="text" placeholder="Endereço" />
      <label htmlFor="cidade">Cidade</label>
      <input id="cidade" type="text" placeholder="Cidade" />
      <label htmlFor="estado">Estado</label>
      <input id="estado" type="text" placeholder="Estado" />
    </form>
  </div>
)

export default FormCadastro
