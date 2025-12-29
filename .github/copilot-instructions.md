# Copilot Instructions for nIT Project

## Project Overview
This is an **educational coding practice repository** for learning web development fundamentals. The project contains JavaScript exercises, HTML structure, CSS styling, and Python script scaffolding. The primary codebase is a learning course tracker with commented-out examples serving as educational reference material.

## Architecture & Project Structure

### Frontend Stack (Active)
- **HTML Entry Point**: `index.html` - Minimal document structure that loads two JavaScript modules
  - Uses `<meta charset="UTF-8">` and responsive viewport configuration
  - Loads JavaScript files with `type="module"` and `defer` attributes for ES6 module support
  
- **JavaScript Modules** (`js/` directory):
  - `index.js` (301 lines) - Main learning file containing:
    - Browser APIs: `confirm()`, `prompt()` for user interaction
    - Number parsing & conversion: `Number.parseInt()`, `Number.parseFloat()`, `Number()`, `.toFixed()`
    - Math operations: `Math.pow()`, exponentiation operator `**`, `Math.sqrt()`, `Math.random()`
    - String methods: `.length`, `.toUpperCase()`, `.slice()`, `.includes()`, `.endsWith()`, `.replace()`, `.replaceAll()`
    - Control flow: conditional operators (ternary), `switch` statements
    - Loop patterns: `while`, `do...while`, `for` loops with modulo operations
    - Loop control: `break` and `continue` statements
  - `index2.js` - Empty/placeholder file (reserved for future exercises)

- **Styling**: `css/styles.css` - Minimal stylesheet with body styling (lightpink background)

### Static Assets & Reference
- `for google/` - Unrelated configuration/reference files (not part of core project)
- `for rainmeter/` - External tool integration files
- `js/drivers.txt` - Documentation reference

### Backend (Minimal)
- `main.py` - Commented-out Python placeholder (no active Python logic)

## Code Patterns & Conventions

### JavaScript Module Loading Pattern
```javascript
// index.html uses:
<script src="js/index.js" type="module" defer></script>
<script src="js/index2.js" type="module" defer></script>
// This ensures modules load after DOM parsing and can use ES6 imports/exports
```

### Educational Comment Structure
Code in `index.js` follows a pattern of:
1. Problem statement in Ukrainian/English comments
2. Multiple solution approaches shown
3. Example outputs and console logs
4. Sections separated by comment dividers (`// -----`)

### Language & Locale
- Mixed Ukrainian (Українська) and English in comments
- Ukrainian terminology for variables and comments is standard in this codebase
- Terminal URLs reference GoIT course (YouTube learning resource)

## Development Workflows

### Running the Project
- **Browser preview**: Open `index.html` directly in a browser or use Live Server extension
- **Console debugging**: Open DevTools (F12) to see console output from JavaScript exercises
- **No build step required** - This is a vanilla HTML/CSS/JS project with no bundler

### Code Organization Pattern
- All commented code examples in `index.js` are learning exercises, not live features
- Active code sections are minimal; most content is educational reference material
- Each code block demonstrates a specific JavaScript concept in isolation

## Common Tasks & When to Apply Them

### Adding New JavaScript Exercises
1. Add commented-out examples to `index.js` following existing patterns
2. Use Ukrainian variable names when appropriate (matches file convention)
3. Include explanatory comments before each example
4. Separate sections with divider comments

### Modifying HTML
- Keep structure minimal - avoid adding complexity
- Always include `defer` attribute for script tags
- Use `type="module"` for JavaScript imports

### Styling Changes
- Keep CSS minimal - this is a learning project
- Use `styles.css` for global body/document styles
- Avoid complexity that obscures JavaScript learning goals

## Key Files for Reference
- **`index.html`**: Entry point, module loading configuration
- **`js/index.js`**: Primary learning content with JavaScript examples
- **`css/styles.css`**: Minimal styling (body only)
- **`README.md`**: Project title only (minimal documentation)

## Important Notes for AI Agents
- This is a **learning/practice repository**, not a production application
- Code is intentionally kept simple to facilitate understanding
- Commented-out code is intentional educational reference material
- No external dependencies or package managers in use
- No testing framework configured (learning project)
- Changes should maintain the educational purpose and readability
