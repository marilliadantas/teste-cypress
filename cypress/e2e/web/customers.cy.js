/// <reference types="cypress" />

import { faker } from '@faker-js/faker'

describe('Usuários devem realizar o cadastro de novos clientes', () => {
    let data

  before(() => {
    cy.fixture("login").then((tData) => {
      data = tData;
      // cy.log(data.username)
      // cy.log(data.password)

      // cy.login_api(data.username, data.password).then((token) => Cypress.env('auth.token', token))
      // cy.find_user_by_username_api(data.username).then((user) => Cypress.env('auth.user.id'))
    })
  })

  it("através do form da aplicação com sucesso", () => {

    cy.login(data.username, data.password)
    cy.new_customer(faker.person.fullName(),
                    faker.internet.email(), 
                    faker.company.name(),
                    faker.random.numeric(6),
                    faker.location.city(),
                    faker.location.state(),
                    faker.location.streetAddress(),
                    faker.location.country(),
                    faker.location.zipCode(),
                    faker.phone.number()
    )                
  })
})