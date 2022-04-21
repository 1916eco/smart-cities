/// <reference types="cypress" />

describe('Test all aspects of Smart cities site', () => {

    beforeEach(() => {
        cy.visit('https://enricosimon.xyz/')
    })

    it('Navigation Around and use website', () => {
        cy.get('#custom-switch').click()
        cy.get(':nth-child(2) > .nav-link').click()
        cy.get(':nth-child(2) > .form-check > .form-check-input').click()
        cy.wait(1000)
        cy.get(':nth-child(3) > .form-check > .form-check-input').click()
        cy.wait(1000)
        cy.get(':nth-child(4) > .form-check > .form-check-input').click()

    })
    it('Login', () => {
        // logout before login
        cy.get(':nth-child(2) > .nav-link').should('have.text', 'Logout').click()
        cy.get(':nth-child(2) > .nav-link').should('have.text', 'Login').click()
        cy.get('#formEmail').type('admin@admin.co.uk')
        cy.get('#formPassword').type('admin123?')
        cy.get('.btn').click()
        cy.get(':nth-child(2) > .nav-link').should('have.text', 'Logout')

    })
    it('Add new Home base', () => {
        cy.get('.btn-circle').click()
        cy.get('#formEmail').type("My Home")
        cy.get('.btn').click()
        cy.get(':nth-child(3) > .form-check > .form-check-input').click()
        cy.get('.leaflet-marker-icon').click()
        cy.get('b').should('have.text', 'Name: My Home')

    })
    it('Delete Homes', () => {
        cy.wait(1000)
        cy.visit('http://localhost:3000/ProfileEditor')
        cy.wait(1000)
    })
    it('Logout', () => {
        cy.get(':nth-child(2) > .nav-link').should('have.text', 'Logout').click()
        cy.get(':nth-child(2) > .nav-link').should('have.text', 'Login')
    })
    it('SignUp', () => {
        cy.get(':nth-child(2) > .nav-link').should('have.text', 'Login').click()
        cy.get(':nth-child(5) > a').click()
        cy.get('#formEmail').type('testemail@email.com')
        cy.get('#formName').type('Test User')
        cy.get('#formPassword').type('test123?')
        cy.get('.btn').click()

    })
    it('Delete Account', () => {
        cy.get('[href="/ProfileEditor"]').click()
        cy.get('.btn').click()
        cy.get('#exampleForm\.ControlInput1').type('testemail@email.com')
        cy.get('.modal-footer > .btn-danger').click()
        
    })
})