import assertions from "../support/assertions/assertions-test"

describe("Realizar consultas do tipo GET", () => {
    it("Ao consultar devo receber um array com 10 cadastros", () => {
        cy.consultarListaDeUsuários()
        assertions.consultaRealizada(200)
    })
})

describe("Realizar deleção de usuário com método DELETE", () => {
    it("Devo receber retorno 200 quando deletar usuário", () => {
        cy.deletarUsuário()
        assertions.usuarioDeletado(200)
    })
})

describe("Realizar cadastro de usuário com método POST", () => {
    it("Devo receber retorno 201 e novo id do usuário ao cadastrá-lo", () => {
        cy.cadastrarNovoUsuario()
        assertions.usuarioCadastrado(201)
    })
})

describe("Realizar alteração de nome do usuário com método PUT", () => {
    it("Devo receber retorno 200 quando alterar nome do usuário", () => {
        cy.alterarNomeDoUsuário()
        assertions.alterandoNomeDoUsuario(200)
    })
})