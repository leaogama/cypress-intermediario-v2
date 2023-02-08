/// <reference types="cypress"/>


import enva from "../../../cypress.env.json"
describe('Tela login', () => {

  beforeEach(() => {
    cy.visit('/')
  });


  it('c01-login ok', () => {
      cy.get('#user_login')
      .should('be.visible')
      .type('root')
      cy.get('#user_password')
      .should('be.visible')
      .type(enva.user_password)
      cy.get('#new_user > .submit-container > .btn').click()
  })
  it('c02-login error password', () => {
      cy.get('#user_login')
      .should('be.visible')
      .type('root')
      cy.get('#user_password')
      .should('be.visible')
      .type('enva.user_password')
      cy.get('#new_user > .submit-container > .btn').click()
      cy.get('.flash-alert > span').contains('Invalid Login or password.')
  })
  it('c02-login error user', () => {
      cy.get('#user_login')
      .should('be.visible')
      .type('roota')
      cy.get('#user_password')
      .should('be.visible')
      .type(enva.user_password)
      cy.get('#new_user > .submit-container > .btn').click()
      cy.get('.flash-alert > span').contains('Invalid Login or password.')
  })




});


