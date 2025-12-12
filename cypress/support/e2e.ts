// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Handle uncaught exceptions from the website
Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignore errors related to 'track' property
  if (err.message.includes('track')) {
    return false
  }
  // Ignore other common website errors
  if (err.message.includes('Cannot read properties of undefined')) {
    return false
  }
  // Let other errors fail the test
  return true
})

// Alternatively you can use CommonJS syntax:
// require('./commands')
