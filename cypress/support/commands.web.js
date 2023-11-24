import urls from './urls.js'
import login from '../selectors/login.sel.cy.js'
import users from '../selectors/users.sel.cy.js'
import customers from '../selectors/customers.sel.cy.js'

require('cypress-xpath')

Cypress.Commands.add('login', (username, password) => {

    cy.visit(urls.login)

    cy.get(login.username).type(username, {log: false})
    cy.get(login.password).type(password, {log: false})
    cy.get(login.loginButton).click()
    
    cy.contains('h1', 'Dashboard')
})

Cypress.Commands.add('new_user', (name, username, password, roles) => {

    cy.visit(urls.users)

    cy.get(users.name).click({force: true}).type(name)
    cy.get(users.username).type(username)
    cy.get(users.password).type(password)
    cy.get(users.passwordConfirmation).type(password)
    cy.get(users.roles).type(roles)
    cy.get(users.submitButton).click()

    cy.get(users.panel_success).should('be.visible')
})

Cypress.Commands.add('new_customer', (name, email, company, salary, city, state, address, country, zipCode, phoneNumber) => {

    cy.visit(urls.customers)

    cy.xpath(customers.name).click({force: true}).type(name)
    cy.xpath(customers.email).click({force: true}).type(email)
    cy.xpath(customers.company).click({force: true}).type(company)
    cy.xpath(customers.salary).click({force: true}).type(salary)
    cy.xpath(customers.city).click({force: true}).type(city)
    cy.xpath(customers.state).click({force: true}).type(state)
    cy.xpath(customers.address).click({force: true}).type(address)
    cy.xpath(customers.country).select(country)
    cy.xpath(customers.zipCode).click({force: true}).type(zipCode)
    cy.xpath(customers.phoneNumber).click({force: true}).type(phoneNumber)
    cy.xpath(customers.submit).click({force: true})

    cy.xpath(customers.panel_success).should('be.visible')
})