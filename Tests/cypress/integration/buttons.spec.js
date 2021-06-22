/* eslint-disable no-undef */
describe('Buttons.', () => {
    beforeEach(() => {
        cy.visit('/');
    })
    it('Should change background color of a square', () => {
        const datas = [
            {id: '#button__red', color: 'rgb(255, 0, 0)'},
            {id: '#button__green', color: 'rgb(0, 255, 0)'},
            {id: '#button__blue', color: 'rgb(0, 0, 255)'},
        ]

        datas.forEach(data => {
            cy.get(data.id)
                .click();

            cy.get('#square')
                .should('have.css', 'background-color', data.color);

        })

    })
})