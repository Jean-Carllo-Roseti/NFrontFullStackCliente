/// <reference types="cypress" />

describe('Teste  Formulário', () => {
  beforeEach(() => {
    cy.visit('https://n-front-full-stack-cliente.vercel.app/')
  })

  it("Deve renderizar título", () => {
    cy.get('.sc-blHHSb > h1').should('contain.text', 'Cvs Online')
    cy.get('.sc-gtLWhw > header > h2').should('contain.text', 'Dados Pessoais')
  })

  it("Deve renderizar os campos do formulário", () => {
    cy.get('input').should('have.length', 7)
    cy.get('label').should('have.length', 7)
  })

  it("Testes de buttons", () => {
    cy.get('button').should('have.length', 3)
  })

  it('Text Campos', () => {
    cy.get('#nome').type('Luffy')
    cy.get('#sobreNome').type('Monkey')
    cy.get('#email').type('GoMary@gmail.com')
    cy.get('#idade').type('16')
    cy.get('#endereco').type('West Blue')
    cy.get('#cidade').type('Praia')
    cy.get('#estado').type('Red Line')
  })
})
