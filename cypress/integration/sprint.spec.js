//Created sprint test file
describe('Lambda Eats App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza') //tell cypress to visit my order form page before each individual test
    })

    const nameInput = () => cy.get('#name-input')
    const specialInput = () =>  cy.get('#special-text')
    const cheeseInput = () => cy.get('input[name=cheese]')
    const pepperoniInput = () => cy.get('input[name=pepperoni]')
    const sausageInput = () => cy.get('input[name=sausage]')
    const vegetableInput = () => cy.get('input[name=vegetable]')
    const sizeInput = () => cy.get('#size-dropdown')
    const orderBtn = () => cy.get('#order-button')

    it('Can add text to the box', () =>{
        nameInput().type('Name')
        specialInput().type('Handle with care')
    })

    it('Can select multiple toppings', () => {
        cheeseInput().click()
        pepperoniInput().click()
        sausageInput().click()
        vegetableInput().click()
    })

    it('Can submit the form', () => {
        nameInput().type('Name')
        sizeInput().select('small')
        cheeseInput().click()
        orderBtn().click()
    })
})