# Crown of Europe E2E Tests

Selenide-based end-to-end tests for the Crown of Europe web application.

## Prerequisites

- Java 17+
- Maven 3.8+
- Chrome browser (for local testing)

## Running Tests

### Run all tests (headless)
```bash
mvn clean test
```

### Run with browser visible
```bash
mvn clean test -Dselenide.headless=false
```

### Run specific test class
```bash
mvn clean test -Dtest=PageLoadTest
```

### Run tests against different URL
```bash
mvn clean test -Dapp.url=http://localhost:4200
```

### Run tests with specific browser
```bash
mvn clean test -Dselenide.browser=firefox
```

## Test Categories

Tests are organized by feature and tagged:

- `@Tag("smoke")` - Critical smoke tests
- `@Tag("search")` - Search functionality tests
- `@Tag("sorting")` - Table sorting tests
- `@Tag("checkbox")` - Checkbox/climbed status tests
- `@Tag("modal")` - Mountain detail modal tests
- `@Tag("dark-mode")` - Dark mode toggle tests
- `@Tag("pdf")` - PDF generation tests
- `@Tag("import-export")` - Import/Export functionality tests
- `@Tag("statistics")` - Statistics display tests

### Run tests by tag
```bash
mvn clean test -Dgroups=smoke
mvn clean test -Dgroups="smoke,search"
```

## Allure Reports

### Generate and view report
```bash
mvn allure:serve
```

### Generate report without opening
```bash
mvn allure:report
```

Report will be generated in `target/site/allure-maven-plugin/`

## CI/CD

Tests run automatically on:
- Push to `main` branch
- Pull requests to `main` branch
- Manual workflow dispatch

See `.github/workflows/e2e-tests.yml` for configuration.

## Project Structure

```
e2e-tests/
├── src/test/java/com/crownofeurope/
│   ├── pages/           # Page Object classes
│   │   ├── MainPage.java
│   │   └── MountainDetailModal.java
│   └── tests/           # Test classes
│       ├── BaseTest.java
│       ├── PageLoadTest.java
│       ├── SearchTest.java
│       ├── SortingTest.java
│       ├── CheckboxTest.java
│       ├── MountainDetailModalTest.java
│       ├── DarkModeTest.java
│       ├── PdfGenerationTest.java
│       ├── ImportExportTest.java
│       └── StatisticsTest.java
└── src/test/resources/
    └── allure.properties
```

## Test Coverage

| Feature | Tests |
|---------|-------|
| Page Load | 3 |
| Search | 5 |
| Sorting | 5 |
| Checkbox | 3 |
| Modal | 9 |
| Dark Mode | 2 |
| PDF | 2 |
| Import/Export | 3 |
| Statistics | 3 |
| **Total** | **35** |
