require('cypress-xpath') 
class checkoutPage {

    elements = {
        txtFirstName: () => cy.document()
                            .get('#root')
                            .find('#page_wrapper')
                            .find('.checkout_info')
                            .find('#first-name'),
        txtLastName: () => cy.document()
                            .get('#root')
                            .find('#page_wrapper')
                            .find('.checkout_info')
                            .find('#last-name'),
        txtZipCode: () => cy.document()
                            .get('#root')
                            .find('#page_wrapper')
                            .find('.checkout_info')
                            .find('#postal-code'),
        btnContinue: () => cy.document()
                            .get('#root')
                            .find('#page_wrapper')
                            .find('.checkout_buttons')
                            .find('#continue'),
        btnFinish: () => cy.document()
                            .get('#root')
                            .find('#page_wrapper')
                            .find('.cart_footer')
                            .find('#finish'),
        btnBacktoHome: () => cy.document()
                            .get('#root')
                            .find('#page_wrapper')
                            .find('.checkout_complete_container')
                            .find('#back-to-products')
    }

    typeFirstName(firstname){
        this.elements.txtFirstName().type(firstname);
    }
    typeLastName(lastname){
        this.elements.txtLastName().type(lastname);
    }
    typeZipCode(zipcode){
        this.elements.txtZipCode().type(zipcode);
    }
    clickContinue(){
        this.elements.btnContinue().click();
    }
    clickFinish(){
        this.elements.btnFinish().click();
    }
    clickBacktoHome(){
        this.elements.btnBacktoHome().click();
    }

}

module.exports = new checkoutPage();