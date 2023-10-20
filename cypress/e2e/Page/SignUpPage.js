export class SignUpPage{

    myAccount()
    {
       cy.get('.sign-in > a').click();
       cy.get('#wedevs_wc_login > .woocommerce-form > .wedevs__sign-in-footer > p > a').click();
       cy.get('#onesignal-slidedown-allow-button').click();
       cy.wait(2000);
       //cy.screenshot();
    }

    signUpForm()
    {
        cy.get('#first_name').type('Nahid');
        cy.get('#last_name').type('Islam');
        cy.get('#reg_email').type('nahid@gmail.com')
        cy.get('#reg_password').type('123');
        cy.get('#reg_password2').type('123');
        cy.wait(2000);
       // cy.get('#wedevs_wc_register').screenshot();
        
    }
}