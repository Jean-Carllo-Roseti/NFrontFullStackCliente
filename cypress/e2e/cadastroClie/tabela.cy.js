/// <reference types="cypress" />

describe('Teste de tabela', () => {
  beforeEach(() => {
    cy.visit('https://n-front-full-stack-cliente.vercel.app/')
    cy.get('.sc-dntaoT').contains('Exibir Tabela').click()
  })

  it(' Teste alterar cadastro', () => {
    cy.get(
      ':nth-child(1) > :nth-child(9) > [title="alterar cadastro"] > svg > path'
    ).click()

    cy.get('form').should('be.visible')

    cy.get('#nome').clear()
    cy.get('#nome').type('Oracio')

    cy.get('#sobreNome').clear()
    cy.get('#sobreNome').type('Velozo')

    cy.get('#email').clear()
    cy.get('#email').type('ovelozo@gmail.com')

    cy.get('#idade').clear()
    cy.get('#idade').type('33')

    cy.get('#endereco').clear()
    cy.get('#endereco').type('A.V Presidente Kenned')

    cy.get('#cidade').clear()
    cy.get('#cidade').type('Praia Grande')

    cy.get('#estado').clear()
    cy.get('#estado').type('SP')

    cy.get('[type="submit"]').click()

    cy.get('table').should('be.visible')

    cy.get('table').contains('td', 'Oracio')
    cy.get('table').contains('td', 'Velozo')
    cy.get('table').contains('td', 'ovelozo@gmail.com')
    cy.get('table').contains('td', '33')
    cy.get('table').contains('td', 'A.V Presidente Kenned')
    cy.get('table').contains('td', 'Praia Grande')
    cy.get('table').contains('td', 'SP')
  })

  it('Teste de exclusão de cadastros', () => {
    cy.get('table')
      .contains('td', 'Oracio')
      .parent('tr')
      .within(() => {
        cy.contains('Velozo')
        cy.contains('ovelozo@gmail.com')
        cy.contains('33')
        cy.contains('A.V Presidente Kenned')
        cy.contains('Praia Grande')
        cy.contains('SP')

        cy.get('button[title="remover cadastro"]').click()
      })
  })

  it('Teste de Button Tela de cadastro', () => {
    cy.get('button[title="fechar tabela"]').click()
    cy.get('form').should('be.visible')
  })
})
