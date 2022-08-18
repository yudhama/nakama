require('cypress-xpath') 
class cartPage {

    elements = {
        buttonCheckout: () => cy.document()
                            .get('#root')
                            .find('#page_wrapper')
                            .find('.cart_footer')
                            .find('#checkout')
    }

    clickCheckoutButton(){
        this.elements.buttonCheckout().click();
    }

}

module.exports = new cartPage();