/// <reference types="cypress" />

describe("Usuários devem realizar o login", () => {

  let data;

  before(() => {
    cy.fixture("login").then((tData) => {
      data = tData;
    })
  })

  it("através do api da aplicação com sucesso", () => {
    cy.login_api(data.username, data.password)
  })
})
