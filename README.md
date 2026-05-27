# Book Your Counselling - Playwright Automation

## Overview
This project contains End-to-End (E2E) automation testing for the Book Your Counselling website using Playwright.

### What the framework tests
- Search functionality
- Mentor filtering
- Navigation flow
- Form validation
- Booking counselling flow

### Tech Stack Used
- Playwright
  - Git
- GitHub

### Main Features
- Cross-browser testing
- Automated E2E testing
- HTML test reports
- Reusable test structure
- Easy test execution

---

## Folder Structure

```bash
BookYourCounselling/
│
├── tests/                 # Test specification files
├── playwright-report/     # HTML reports
├── test-results/          # Test execution results
├── node_modules/          # Dependencies
├── playwright.config.js   # Playwright configuration
├── package.json           # Project dependencies
└── README.md              # Project documentation
```

---

## Installation Steps

### Clone Repository
```bash
git clone https://github.com/AashikaDahal/BookYourCounselling.git
```

### Navigate to Project Folder
```bash
cd BookYourCounselling
```

### Install Dependencies
```bash
npm install
```

### Install Playwright Browsers
```bash
npx playwright install
```

---

## How to Run Tests

### Run All Tests
```bash
npx playwright test
```

### Run Tests in Headed Mode
```bash
npx playwright test --headed
```

### Run Specific Test File
```bash
npx playwright test tests/example.spec.js
```

### Open HTML Report
```bash
npx playwright show-report
```

---

## Author
Aashika Dahal
