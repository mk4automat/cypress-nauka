/// <reference types="cypress"/>


describe('Check links on the Home Page', () => {

    it('Should check body', () => {
        cy.get('body')
            .should('be.visible')

        //Nagłówek strony
        cy.get('h4')
            .should('be.visible')
            .should('have.text', 'Witaj na stronie startowej kursu Selenium!')

        //1 link
        cy.get('body > a[href="basics.html"]')
            .should('be.visible')
            .should('have.text', 'Podstawowa strona testowa')

        //2 link
        cy.get('[href="iframe.html"]')
            .should('be.visible')
            .should('have.text', 'Strona z iframe')

        //3 link
        cy.get('[href="fileupload.html"]')
            .should('be.visible')
            .should('have.text', 'Załadowanie pliku')

        //4 link
        cy.get('[href="doubleclick.html"]')
            .should('be.visible')
            .should('have.text', 'Podwójne kliknięcie')

        //5 link
        cy.get('[href="wait.html"]')
            .should('be.visible')
            .should('have.text', 'Oczekiwanie na element  I')

        //6 link
        cy.get('[href="wait2.html"]')
            .should('be.visible')
            .should('have.text', 'Oczekiwanie na element  II ')

        //7 link
        cy.get('[href="image.html"]')
            .should('be.visible')
            .should('have.text', 'Ładowanie obrazka')
    })

    it('Should check 1 link', () => {

        //1 link
        cy.podstawowaStronaTestowa();

    })

    it('Should check 2 link', () => {

        //2 link
        cy.get('[href="iframe.html"]')
            .should('be.visible')
            .should('have.text', 'Strona z iframe')
            .click()

        cy.url().should('include', '/iframe.html')

    })

    it('Should check 3 link', () => {

        //3 link
        cy.get('[href="fileupload.html"]')
            .should('be.visible')
            .should('have.text', 'Załadowanie pliku')
            .click()

        cy.url().should('include', '/fileupload.html')

    })

    it('Should check 4 link', () => {

        //4 link
        cy.get('[href="doubleclick.html"]')
            .should('be.visible')
            .should('have.text', 'Podwójne kliknięcie')
            .click()

        cy.url().should('include', '/doubleclick.html')

    })

    it('Should check 5 link', () => {

        //5 link
        cy.get('[href="wait.html"]')
            .should('be.visible')
            .should('have.text', 'Oczekiwanie na element  I')
            .click()

        cy.url().should('include', '/wait.html')

    })

    it('Should check 6 link', () => {

        //6 link
        cy.get('[href="wait2.html"]')
            .should('be.visible')
            .should('have.text', 'Oczekiwanie na element  II ')
            .click()

        cy.url().should('include', '/wait2.html')

    })

    it('Should check 7 link', () => {

        //7 link
        cy.get('[href="image.html"]')
            .should('be.visible')
            .should('have.text', 'Ładowanie obrazka')
            .click()

        cy.url().should('include', '/image.html')

    })
})