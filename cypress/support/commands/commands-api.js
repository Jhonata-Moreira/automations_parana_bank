import headers from "../../fixtures/headers.json"
import body from "../../fixtures/body.json"
import endpoint from "../../config/endpoint.json"

let url = endpoint["url"]
let bodyTeste = body.bodySubmit;
let headersTeste = headers.headers;

Cypress.Commands.add('consultarListaDeUsuários', () => {
    cy.request({
        url: url,
        method: 'GET',
        headers: headersTeste,
    })
    .as("GET")
})

Cypress.Commands.add('deletarUsuário', () => {
    cy.request({
        url: 'http://jsonplaceholder.typicode.com/users/1',
        method: 'DELETE',
        headers: headersTeste,
    })
    .as("DELETE")
})

Cypress.Commands.add('cadastrarNovoUsuario', () => {
    cy.request({
        url: url,
        method: 'POST',
        headers: headersTeste,
        body: bodyTeste,
    })
    .as("POST")
})

Cypress.Commands.add('alterarNomeDoUsuário', () => {
    cy.request({
        url: 'http://jsonplaceholder.typicode.com/users/2',
        method: 'PUT',
        headers: headersTeste,
        body: bodyTeste,
    })
    .as("PUT")
})