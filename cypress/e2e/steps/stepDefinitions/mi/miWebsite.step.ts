import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import HomePage from '../../src/pages/mi/HomePage'
import ProductPage from '../../src/pages/mi/ProductPage'

Given('I go to the Mi India website', function () {
    this.home_page = new HomePage()
    this.home_page.open()
})

Given('I search for {string} product', function (productName: string) {
    this.home_page.clickSearchIcon()
    cy.wait(2000)
    this.home_page.searchProduct(productName)
})

When('I click on the first product', function () {
    this.home_page.clickFirstProduct()
})

Then('I should see the product details for {string}', function (productName: string) {
    this.product_page = new ProductPage()
    this.product_page.verifyProductDetailsVisible(productName)
})

Then('I should see the Mi India page title', function () {
    this.home_page.verifyPageTitle()
})

When('I click add to cart button', function () {
    this.product_page.clickAddToCart()
})

Then('the product image should be visible', function () {
    this.product_page.verifyProductImageVisible()
})