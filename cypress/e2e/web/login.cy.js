/// <reference types="cypress" />

describe("Usuários devem realizar o login", () => {
  let data

  before(() => {
    cy.fixture("login").then((tData) => {
      data = tData;
      // cy.log(data.username)
      // cy.log(data.password)
    })
  })

  it("através da página da aplicação com sucesso", () => {
    // cy.viewport("iphone-xr")
    cy.login(data.username, data.password)
  })
})
