require('cypress-xpath') 
class inventoryPage {

    elements = {
        buttonSort: () => cy.document()
                            .get('#root')
                            .find('#page_wrapper')
                            .find('.header_secondary_container')
                            .find('.product_sort_container'),
        buttonAtc: () => cy.document()
                            .get('#root')
                            .find('#page_wrapper')
                            .find('#add-to-cart-sauce-labs-fleece-jacket'),
        buttonCart: () => cy.document()
                            .get('#root')
                            .find('#page_wrapper')
                            .find('.shopping_cart_link')
                            // 
    }

    clickSortHightoLow(){
        this.elements.buttonSort().select('Price (high to low)');
    }
    clickBuyJacket(){
        this.elements.buttonAtc().click();
    }
    clickCart(){
        this.elements.buttonCart().click();
    }


}

module.exports = new inventoryPage();