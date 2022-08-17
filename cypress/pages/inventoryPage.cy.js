require('cypress-xpath') 
class inventoryPage {

    elements = {
        buttonSort: () => cy.document()
                            .get('#root')
                            .find('#page_wrapper')
                            .find('.header_secondary_container')
                            .find('.product_sort_container')
    }

    clickSortHightoLow(){
        this.elements.buttonSort().select('Price (high to low)');
    }

}

module.exports = new inventoryPage();