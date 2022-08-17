require('cypress-xpath') 
class homeSaucedemoPage {

    elements = {
        usernameInput: () => cy.document()
                            .get('#root')
                            .find('.login_wrapper-inner')
                            .find('.login-box')
                            .xpath('//*[@id="user-name"]'),
        passwordInput: () => cy.document()
                            .get('#root')
                            .find('.login_wrapper-inner')
                            .find('.login-box')
                            .find("#password"),
        loginButton: () => cy.document()
                            .get('#root')
                            .find('.login_wrapper-inner')
                            .find('.login-box')
                            .find("#login-button")
    }
    
    typeUsername(username){
        this.elements.usernameInput().type(username);
    }

    typePassword(password){
        this.elements.passwordInput().type(password);
    }

    clickLogin(){
        this.elements.loginButton().click();
    }

}

module.exports = new homeSaucedemoPage();