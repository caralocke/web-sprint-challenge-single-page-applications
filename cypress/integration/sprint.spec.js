//Created sprint test file
/* eslint-disable cypress/no-unnecessary-waiting */
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
    const homeBtn = () => cy.get('#go-home')
    const orderNowBtn = () => cy.get('#order-pizza')
    const crust = () => {cy.get('input[type=radio]')}

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

    //adding more tests for stretch
    it('The button to submit the order is disabled by default', () => {
        orderBtn().should('be.disabled')
    })

    it('Can navigate home and back to the order page', () => {
        homeBtn().click()
        orderNowBtn().click()
    })

    it('Can select a crust option', () => {
        crust().each(elem => {
            elem.click()
        })
        cy.get("input[value='hand-tossed']").should('be.checked')
    })
})