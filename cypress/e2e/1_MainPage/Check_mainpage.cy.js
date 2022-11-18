/// <reference types="cypress"/>

describe('Check Home Page', () => {
    it('Should open home page', () => {
      cy.visit('/')

      cy.url().should('include', 'https://testeroprogramowania.github.io/selenium/')
    })
  })