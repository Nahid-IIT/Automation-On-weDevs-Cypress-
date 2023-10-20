export class OpenUrl{

    visit(url){
        cy.on('uncaught:exception', (err, runnable)=>{
            return false;
        })
        cy.visit(url);
    }

    
}