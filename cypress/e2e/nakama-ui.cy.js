require('cypress-iframe')
import homeSaucedemoPage from '../pages/homeSaucePage.cy'
import inventoryPage from '../pages/inventoryPage.cy'
import cartPage from '../pages/cartPage.cy'
import checkoutPage from '../pages/checkoutPage.cy'

describe('test login', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
    cy.clearCookies()
    cy.getCookies().should('be.empty')
    cy.visit('https://www.saucedemo.com/')
  })

  it('Ui test', () => {
    cy.url().should('eq', 'https://www.saucedemo.com/');
    homeSaucedemoPage.typeUsername('standard_user')
    homeSaucedemoPage.typePassword('secret_sauce')
    homeSaucedemoPage.clickLogin()

    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
    inventoryPage.clickSortHightoLow()
    inventoryPage.clickBuyJacket()
    inventoryPage.clickCart()
    cy.wait(2)

    cy.url().should('eq', 'https://www.saucedemo.com/cart.html');
    cartPage.clickCheckoutButton()
    cy.wait(2)

    cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-one.html');
    checkoutPage.typeFirstName("luffy")
    checkoutPage.typeLastName("monkey")
    checkoutPage.typeZipCode("12345")
    checkoutPage.clickContinue()
    cy.screenshot('nakama')

    cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-two.html');
    checkoutPage.clickFinish()
    cy.wait(2)
    cy.screenshot('nakama-finish')
    checkoutPage.clickBacktoHome()

    cy.wait(1)
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
    cy.screenshot('nakama-back-to-home')
  })
})