import BasePage from '../BasePage'

export default class ProductPage extends BasePage {
    protected readonly BASE_URL = 'https://www.mi.com/in'

    private readonly CSS_PRODUCT_TITLE = '.product-title, .item-title, h1'
    private readonly CSS_PRODUCT_PRICE = '.price, .product-price, .item-price'
    private readonly CSS_ADD_TO_CART = '.add-to-cart, .buy-now, .purchase-btn'
    private readonly CSS_PRODUCT_IMAGE = '.product-image, .item-image, .main-image'

    getProductTitle(): Cypress.Chainable<string> {
        return this.getText(this.CSS_PRODUCT_TITLE)
    }

    getProductPrice(): Cypress.Chainable<string> {
        return this.getText(this.CSS_PRODUCT_PRICE)
    }

    clickAddToCart(): void {
        this.clickElement(this.CSS_ADD_TO_CART)
    }

    verifyProductImageVisible(): void {
        this.isElementVisible(this.CSS_PRODUCT_IMAGE)
    }

    verifyProductDetailsVisible(productName: string): void {
        cy.contains(productName).should('be.visible')
    }
}