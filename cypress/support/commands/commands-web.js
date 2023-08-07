// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('clicarNoBotãoAzul', () => {
    cy.visit('/challenging_dom')
    cy.xpath('/html/body/div[2]/div/div/div/div/div[1]/a[1]').click()
})

Cypress.Commands.add('clicarNoBotãoVermelho', () => {
    cy.visit('/challenging_dom')
    cy.xpath('/html/body/div[2]/div/div/div/div/div[1]/a[2]').click()
})

Cypress.Commands.add('clicarNoBotãoVerde', () => {
    cy.visit('/challenging_dom')
    cy.xpath('/html/body/div[2]/div/div/div/div/div[1]/a[3]').click()
})

Cypress.Commands.add('clicarEmEditarNoItem', (btn) => {
    cy.get(':nth-child('+btn+') > :nth-child(7) > [href="#edit"]').click()
})

Cypress.Commands.add('validarUrl', () => {
    cy.url().should('be.equal', 'https://the-internet.herokuapp.com/challenging_dom#edit')
})

Cypress.Commands.add('clicarEmDeletarNoItem', (btn) => {
    cy.get(':nth-child('+btn+') > :nth-child(7) > [href="#delete"]').click()
})

Cypress.Commands.add('validarUrlDelete', () => {
    cy.url().should('be.equal', 'https://the-internet.herokuapp.com/challenging_dom#delete')
})