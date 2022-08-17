require('cypress-iframe')
import homeSaucedemoPage from '../pages/homeSaucePage.cy'
import inventoryPage from '../pages/inventoryPage.cy'

describe('test login', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
    cy.clearCookies()
    cy.getCookies().should('be.empty')
    cy.visit('https://www.saucedemo.com/')
  })
  it('Login and sort high to low', () => {
    homeSaucedemoPage.typeUsername('standard_user')
    homeSaucedemoPage.typePassword('secret_sauce')
    homeSaucedemoPage.clickLogin()
    inventoryPage.clickSortHightoLow()
    cy.wait(2)
  })
})