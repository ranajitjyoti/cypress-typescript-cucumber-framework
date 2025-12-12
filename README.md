# Cypress TypeScript Cucumber Framework

A comprehensive BDD (Behavior Driven Development) test automation framework using Cypress, Cucumber, and TypeScript with Page Object Model design pattern.

## 🚀 Features

- **BDD Testing**: Gherkin syntax with Cucumber for readable test scenarios
- **TypeScript Support**: Full TypeScript integration for better code quality
- **Page Object Model**: Organized and maintainable page object structure
- **Multiple Test Sites**: Support for testing DuckDuckGo and Mi.com websites
- **Comprehensive Reporting**: HTML, JSON, and console reports
- **Tag-based Execution**: Run specific test suites using tags
- **Cross-platform**: Works on Windows, macOS, and Linux

## 📁 Project Structure

```
cypress-typescript-cucumber-framework/
├── cypress/
│   ├── e2e/
│   │   ├── features/
│   │   │   ├── Duckduckgo.feature
│   │   │   └── MiWebsite.feature
│   │   └── steps/
│   │       ├── src/
│   │       │   └── pages/
│   │       │       ├── BasePage.ts
│   │       │       ├── duckduckgo/
│   │       │       │   ├── HomePage.ts
│   │       │       │   └── SearchPage.ts
│   │       │       └── mi/
│   │       │           ├── HomePage.ts
│   │       │           └── ProductPage.ts
│   │       └── stepDefinitions/
│   │           ├── common.step.ts
│   │           ├── duckduckgo/
│   │           │   └── searchEngine.step.ts
│   │           └── mi/
│   │               └── miWebsite.step.ts
│   ├── screenshots/
│   ├── support/
│   │   ├── commands.ts
│   │   └── e2e.ts
│   └── videos/
├── results/
│   ├── cucumber-report.html
│   ├── cucumber-report.json
│   └── cucumber-messages.ndjson
├── cypress.config.ts
├── package.json
└── README.md
```

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ranajitjyoti/cypress-typescript-cucumber-framework.git
   cd cypress-typescript-cucumber-framework
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Install Cypress binary:**
   ```bash
   npx cypress install
   ```

## 🎯 Usage

### Running Tests

**All tests (headless):**
```bash
npm test
```

**All tests (headed - browser visible):**
```bash
npm run test:headed
```

**Open Cypress Test Runner:**
```bash
npm run cypress:open
```

### Tag-based Test Execution

**Run smoke tests:**
```bash
npm run tag:smoke
npm run tag:smoke:headed  # with browser visible
```

**Run DuckDuckGo tests:**
```bash
npm run tag:duckduckgo
npm run tag:duckduckgo:headed  # with browser visible
```

**Run Mi.com tests:**
```bash
npm run tag:mi
npm run tag:mi:headed  # with browser visible
npm run tag:mi:smoke   # Mi smoke tests only
```

### Code Quality

**Run linting:**
```bash
npm run lint
```

**Fix linting issues:**
```bash
npm run lint:fix
```

## 📊 Reports

After test execution, reports are generated in the `results/` folder:

- **HTML Report**: `results/cucumber-report.html` - Open in browser for detailed results
- **JSON Report**: `results/cucumber-report.json` - For CI/CD integration
- **Messages**: `results/cucumber-messages.ndjson` - Detailed step execution logs

## 🏗️ Framework Architecture

### Page Object Model
- **BasePage**: Abstract base class with common page methods
- **Site-specific Pages**: Inherit from BasePage for each website
- **Reusable Methods**: Common actions like click, type, wait, etc.

### Step Definitions
- **Modular Structure**: Organized by website/feature
- **Reusable Steps**: Common steps in `common.step.ts`
- **Type Safety**: Full TypeScript support

### Features
- **Gherkin Syntax**: Human-readable test scenarios
- **Background Steps**: Common setup steps
- **Scenario Outlines**: Data-driven testing
- **Tags**: Organize and filter tests

## 🔧 Configuration

### Cypress Configuration
- File: `cypress.config.ts`
- Cucumber preprocessor integration
- ESBuild for TypeScript compilation

### Cucumber Configuration
- File: `package.json` (cypress-cucumber-preprocessor section)
- Step definitions paths
- Report generation settings
- Tag filtering support

## 🌐 Supported Websites

1. **DuckDuckGo** (`@duckduckgo`)
   - Search functionality testing
   - Result verification

2. **Mi India** (`@mi`)
   - Product search
   - Navigation testing
   - Product details verification

## 🚦 Adding New Tests

1. **Create Feature File:**
   ```gherkin
   @your-tag
   Feature: Your feature description
   
   Scenario: Your test scenario
     Given I do something
     When I perform an action
     Then I should see a result
   ```

2. **Create Page Object:**
   ```typescript
   import BasePage from '../BasePage'
   
   export default class YourPage extends BasePage {
     protected readonly BASE_URL = 'https://your-site.com'
     
     yourMethod(): void {
       // Implementation
     }
   }
   ```

3. **Create Step Definitions:**
   ```typescript
   import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
   
   Given('I do something', function () {
     // Implementation
   })
   ```

4. **Add npm Script:**
   ```json
   "tag:your-tag": "cypress run --env tags='@your-tag'"
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Run linting and tests
6. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🔗 Links

- [Cypress Documentation](https://docs.cypress.io/)
- [Cucumber Documentation](https://cucumber.io/docs/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)