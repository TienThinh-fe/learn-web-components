# learn-web-components

A project for learning and experimenting with Web Components using vanilla JavaScript.

## Project Structure

```
learn-web-components/
├── README.md
├── index.html          # Main HTML file with component usage examples
├── package.json        # Project configuration and dependencies
├── src/
│   └── main.js        # Web component implementations
└── .gitignore         # Git ignore rules
```

## Components

### XDropdown Component

A custom dropdown web component that provides a toggleable content area.

**Usage:**

```html
<x-dropdown>
  <span>Your content here</span>
</x-dropdown>
```

**Features:**

- Click to toggle dropdown visibility
- Uses Shadow DOM for encapsulation
- Slot-based content projection

## Getting Started

### Prerequisites

- Node.js (for development server)

### Installation

1. Clone the repository
2. Navigate to the project directory:
   ```bash
   cd learn-web-components
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
npm run dev
```

### Build

Build the project for production:

```bash
npm run build
```

### Preview

Preview the production build:

```bash
npm run preview
```

## Web Components Concepts Demonstrated

- **Custom Elements**: Creating custom HTML elements with `customElements.define()`
- **Shadow DOM**: Encapsulating component styles and markup
- **Templates**: Using `<template>` elements for reusable markup
- **Slots**: Content projection with named and unnamed slots
- **Lifecycle Callbacks**: Using `connectedCallback()` for initialization

## Files

- [`index.html`](learn-web-components/index.html) - Main HTML file demonstrating component usage
- [`src/main.js`](learn-web-components/src/main.js) - Web component implementations
