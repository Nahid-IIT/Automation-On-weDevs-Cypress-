export class CheckTitle{

    getTitle(title){
        return cy.title().should('eq', title);
    }
}