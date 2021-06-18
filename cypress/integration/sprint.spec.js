//Created sprint test file
describe('Lambda Eats App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza') //tell cypress to visit my order form page before each individual test
    })

    const nameInput = () => cy.get('#name-input')
    const specialInput = () =>  cy.get('#special-text')

    it('Can add text to the box', () =>{
        nameInput().type('Name')
        specialInput().type('Handle with care')
    })
})