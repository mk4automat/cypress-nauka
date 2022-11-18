/// <reference types="cypress"/>


describe('Check page Podstawowa strona testowa', () => {

    beforeEach(() => {
        cy.podstawowaStronaTestowa();
    })


    it('Should check page', () => {

        // //Nagłówek - dodanie polecenia i sprawdzenie tła po najechaniu
        // cy.get('h1')
        //     .realHover()
        //     .should('have.css', 'background-color', 'rgb(255, 255, 0)')

        // //Button Kliknij mnie
        // cy.get('#clickOnMe')
        //     .should('be.visible')
        //     .should('have.text', 'Kliknij mnie!')

        // //First name
        // cy.get('body > label[for="fname"]')
        //     .should('be.visible')
        //     .should('have.text', ' First name:')

        // //Input
        // cy.get('#fname')
        //     .should('be.visible')
        //     .should('have.attr', 'type', 'text')
        //     .clear()
        //     .type('Paul')
        //     .should('have.value', 'Paul')

        // //Link W3Schools
        // cy.get('[href="https://www.w3schools.com"]')
        //     .should('be.visible')
        //     .should('have.text', 'Visit W3Schools.com!')

        // //Link WeirdLink
        // cy.get('[href="https://www.google.com"]')
        //     .should('be.visible')
        //     .should('have.text', 'IamWeirdLink')

        // //Tabela
        // cy.get('table')
        //     .should('be.visible')
        //     .should('have.attr', 'border', '1')

        // //Dropdown
        // cy.get('select')
        //     .should('be.visible')
        //     .should('contain', 'Volvo')
        //     .should('contain', 'Saab')
        //     .should('contain', 'Mercedes')
        //     .should('contain', 'Audi')

        //     .select('Volvo')
        //     .invoke('val')
        //     .should('eq', 'volvo')


        // //Checkbox i regulamin
        // cy.get('label')
        // .contains(" Potwierdzam 100% nieznajomość regulaminu. Kto ma czas na czytanie regulaminów")
        // .should('be.visible')
        // .invoke("text")
        // .then(tekst => {
        //     cy.log(tekst)
        // })

        // // cy.get('[type="checkbox"]').check({ force: true }).should('be.checked')
        // // cy.get('[type="checkbox"]').uncheck({ force: true }).should('not.be.checked')


        // //Radio

        // cy.get('form')
        //     .contains('male')
        //     .contains('Female')
        //     .contains('Other')

        // //Radio Male
        // // cy.get('[type="radio"]')
        // // .should('be.visible')
        // // .check('male')

        // //Radio female
        // // cy.get('[type="radio"]')
        // // .should('be.visible')
        // // .check('female')

        // //Rdio Other
        // // cy.get('[type="radio"]')
        // // .should('be.visible')
        // // .check('other')


        //Użytkownik
        cy.get('form')
            .should('contain', 'Nazwa użytkownika')

        // //Input nazwa użytkownika
        // // cy.get('[onsubmit="alert('On submit method')"] > [type="text"]')

        // //Input password
        // // cy.get('[onsubmit="alert('On submit method')"] > [type="text"]')

        // //Button Submit
        // cy.get('[type="submit"]')

        // //Smile Image
        // cy.get('#smileImage')

        // //Button Click me
        // cy.get('#newPage')

        // //Lista dolna
        // cy.get('#container > :nth-child(1)')

        // //Lista pierwszy
        // cy.get('#container > :nth-child(1) > :nth-child(1)')

        // //Lista pierwszy i child
        // cy.get(':nth-child(1) > ul > li')

        // //Lista drugi
        // cy.get('#container > :nth-child(1) > :nth-child(2)')

        // //Lista trzeci
        // cy.get('#container > :nth-child(1) > :nth-child(3)')

        // //Lista czwarty
        // cy.get('#container > :nth-child(1) > :nth-child(3)')


    })
})