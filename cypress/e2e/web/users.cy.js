/// <reference types="cypress" />

import { fakerPT_BR as faker} from '@faker-js/faker'

describe('Admins devem realizar o cadastro de novos usuários', () => {
    let data

  before(() => {
    cy.fixture("login").then((tData) => {
      data = tData;
      // cy.log(data.username)
      // cy.log(data.password)
    })
  })

  it("através do form da aplicação com sucesso", () => {

    const password = faker.internet.password(10)

    cy.login(data.username, data.password)
    cy.new_user(faker.person.fullName(), faker.internet.email(), password, "ADMIN")
  })
})