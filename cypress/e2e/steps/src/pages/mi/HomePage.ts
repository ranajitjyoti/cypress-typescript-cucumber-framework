import BasePage from '../BasePage'

export default class HomePage extends BasePage {
    protected readonly BASE_URL = 'https://www.mi.com/in'

    private readonly CSS_SEARCH_ICON = '.search-icon, [data-testid="search"], .header-search'
    private readonly CSS_SEARCH_INPUT = 'input[type="search"], .search-input, #search-input'
    private readonly CSS_PRODUCT_LINK = '.product-item, .product-card, .item-box'

    clickSearchIcon(): void {
        this.clickElement(this.CSS_SEARCH_ICON)
    }

    searchProduct(productName: string): void {
        this.typeText(this.CSS_SEARCH_INPUT, productName)
        cy.get(this.CSS_SEARCH_INPUT).type('{enter}')
    }

    clickFirstProduct(): void {
        this.clickElement(this.CSS_PRODUCT_LINK)
    }

    verifyPageTitle(): void {
        cy.title().should('exist').and('not.be.empty')
        cy.url().should('include', 'mi.com')
    }
}