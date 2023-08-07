class Assertions {
    consultaRealizada(status) {
        cy.get("@GET").should((res) => {
            expect(res.status).to.be.equal(status)
            expect(res.body).to.be.not.empty
            expect(res.body).to.have.length(10)
        })
    }

    usuarioDeletado(status) {
        cy.get("@DELETE").should((res) => {
            expect(res.status).to.be.equal(status)
            expect(res.body).to.be.empty
        })
    }

    usuarioCadastrado(status) {
        cy.get("@POST").should((res) => {
            expect(res.status).to.be.equal(status)
            expect(res.body).to.not.be.empty
            expect(JSON.stringify(res.body.id)).to.be.equal('11')
        })
    }

    alterandoNomeDoUsuario(status) {
        cy.get("@PUT").should((res) => {
            expect(res.status).to.be.equal(status)
            expect(res.body).to.not.be.empty
            expect(JSON.stringify(res.body.id)).to.be.equal('2')
        })
    }
}

export default new Assertions();