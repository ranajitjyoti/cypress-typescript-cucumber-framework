export default abstract class BasePage {
    protected abstract readonly BASE_URL: string

    open(): void {
        cy.visit(this.BASE_URL)
        // this.waitForPageLoad()
    }

    protected waitForPageLoad(): void {
        cy.get('body').should('be.visible')
    }

    protected clickElement(selector: string): void {
        cy.get(selector).should('be.visible').click()
    }

    protected typeText(selector: string, text: string): void {
        if (text && text.length > 0) {
            cy.get(selector).should('be.visible').clear().type(text)
        }
    }

    protected getText(selector: string): Cypress.Chainable<string> {
        return cy.get(selector).invoke('text')
    }

    protected isElementVisible(selector: string): Cypress.Chainable<boolean> {
        return cy.get(selector).should('be.visible').then(() => true)
    }

    protected waitForElement(selector: string, timeout: number = 10000): void {
        cy.get(selector, { timeout }).should('be.visible')
    }
}