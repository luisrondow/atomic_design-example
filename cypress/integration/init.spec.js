describe('App Component Test', () => {
    it('successfully loads', () => {
        cy.visit('/');
    });

    it('should not be able to type letters', () => {
        const form = cy.get('form');

        form.get('input').clear().type('Lorem Impsum');

        form.get('input').should('have.value', '');
    })

    it('should not be render list when input is empty', () => {
        const form = cy.get('form');

        form.get('button').click();

        cy.get('div').eq(2).should('not.be.visible') ;
    })

    it('should input value and return the right values', () => {
        const form = cy.get('form');

        form.get('input').type('1000000');

        form.get('button').click();

        const list = cy.get('div').eq(2);

        list.contains('Millennium Falcon').parents().eq(1).within(() => {
            cy.get('span').eq(2).should('have.text', '9 Paradas');
        });
    })

    it('should render no stops', () => {
        const form = cy.get('form');

        form.get('input').clear().type('1000000');

        form.get('button').click();

        const list = cy.get('div').eq(2);

        list.contains('Executor').parents().eq(1).within(() => {
            cy.get('span').eq(2).should('have.text', 'Nenhuma parada!');
        });
    })

});

