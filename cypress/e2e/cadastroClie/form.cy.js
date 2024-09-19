/// <reference types="cypress" />

describe('Teste  Formulário', () => {
  beforeEach(() => {
    cy.visit('https://n-front-full-stack-cliente.vercel.app/')
  })

  it('Deve renderizar título', () => {
    cy.get('.sc-blHHSb > h1').should('contain.text', 'Cvs Online')
    cy.get('.sc-gtLWhw > header > h2').should('contain.text', 'Dados Pessoais')
  })

  it('Deve renderizar os campos do formulário', () => {
    cy.get('input').should('have.length', 7)
    cy.get('label').should('have.length', 7)
  })

  it('Testes de buttons', () => {
    cy.get('button').should('have.length', 3)
  })

  it('Teste text Campos de castro', () => {
    cy.get('#nome').type('Luffy')
    cy.get('#nome').should('have.value', 'Luffy')

    cy.get('#sobreNome').type('Monkey')
    cy.get('#sobreNome').should('have.value', 'Monkey')

    cy.get('#email').type('GoMary@gmail.com')
    cy.get('#email').should('have.value', 'GoMary@gmail.com')

    // eslint-disable-next-line cypress/unsafe-to-chain-command
    cy.get('#idade').clear().type('16')
    cy.get('#idade').should('have.value', '16')

    cy.get('#endereco').type('West Blue')
    cy.get('#endereco').should('have.value', 'West Blue')

    cy.get('#cidade').type('Praia')
    cy.get('#cidade').should('have.value', 'Praia')

    cy.get('#estado').type('Red Line')
    cy.get('#estado').should('have.value', 'Red Line')
  })

  it('Test button salvar', () => {
    cy.get('[type="submit"]').click()

    cy.get('#nome').should('have.value', '')
    cy.get('#sobreNome').should('have.value', '')
    cy.get('#email').should('have.value', '')
    cy.get('#idade').should('have.value', '')
    cy.get('#endereco').should('have.value', '')
    cy.get('#cidade').should('have.value', '')
    cy.get('#estado').should('have.value', '')
  })
})
