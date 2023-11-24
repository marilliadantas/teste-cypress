import urls from './urls.js'
import login from '../selectors/login.sel.cy.js'
import users from '../selectors/users.sel.cy.js'

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

    cy.get(users.SubmitButton).click()

    cy.get(users.panel_success).should('be.visible')
})