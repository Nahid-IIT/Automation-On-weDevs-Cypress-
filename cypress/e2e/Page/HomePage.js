
export class HomePage{
    
     elementTextvarify(){
       // cy.get('.dropdown-toggle').should('eq','Products');
        cy.get('#menu-main-menu > :nth-child(2) > a').should('contain', 'Blog')
        cy.get('#menu-main-menu > :nth-child(3) > a').should('have.text', 'About')
        cy.get('#menu-main-menu > :nth-child(4) > a').should('have.text', 'Docs')
        cy.get('#menu-main-menu > :nth-child(5) > a').should('have.text', 'Contact Us')
        cy.screenshot();
     }

}