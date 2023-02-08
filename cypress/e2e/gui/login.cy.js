/// <reference types="cypress"/>

describe('Login', () => {

  it('successifully', () => {
    cy.login()
    cy.get('.qa-user-avatar').should('be.visible')
  });

});