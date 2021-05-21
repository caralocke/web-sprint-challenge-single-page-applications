describe('Lambda Eats App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    const nameInput = () => cy.get('#name-input')
    const sizeInput = () => cy.get('#size-dropdown')
    const orderBtn = () =>  cy.get('#order-button')

    it('Get an input and utilize it', () => {
        nameInput().type('Cara')
        sizeInput().select('large')
        orderBtn().click()
    })
})