# Changelog

All notable changes to this project will be documented in this file.

## [2.0.0] - 2026

### 🚀 Features
- Migrate to ES Modules (ESM)
  - Add `"type": "module"` to package.json
  - Convert all source files to ESM syntax
  - Update imports with .js extensions

### 🧪 Testing
- Migrate from Mocha/Chai to Vitest
  - Update test framework to Vitest 4.x
  - Add vitest.config.js for test configuration
  - Convert all test files to Vitest format

### 🛠️ Dependencies
- Update to Vitest 4.x (latest)
- Update to ESLint 10.x (latest)
- Remove outdated Mocha/Chai dependencies

### ♻️ Refactoring
- Fix critical bug: instances now have proper encapsulation
  - Use private class fields (#str) for instance state
  - Previously all instances shared the same module-level `str` variable

### 📝 Code Improvements
- Modernize regexes with named capture groups
  - Replace `$1$2` with `$<rest>$<consonants>` for clarity
  - Add descriptive names to capture groups
- Replace `let` with `const` where appropriate

### 🔧 Tooling
- Add ESLint flat config (eslint.config.js)
- Add modern npm scripts: `test`, `test:run`, `lint`, `lint:fix`
