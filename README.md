# learn-web-components

A project for learning and experimenting with Web Components using vanilla JavaScript and TypeScript.

## Project Structure

```
learn-web-components/
├── README.md                     # This file
├── learn-web-components/         # Basic web components examples (JavaScript)
│   ├── index.html
│   ├── package.json
│   └── src/
│       ├── main.js
│       ├── styles.css
│       └── *.js                  # Various component examples
└── sw-character-web-components/  # Star Wars character app (TypeScript)
    ├── README.md
    ├── index.html
    ├── package.json
    ├── tsconfig.json
    └── src/
        ├── main.ts
        ├── style.css
        ├── types.d.ts
        └── components/
            ├── x-character-list.ts
            └── x-character-detail.ts
```

## Projects

### 1. learn-web-components (JavaScript)

Basic web components examples demonstrating fundamental concepts like:

- Custom dropdown component
- Event handling
- Styling with CSS parts
- Component properties
- Host styling

**To run:**

```bash
cd learn-web-components
npm install
npm run dev
```

### 2. sw-character-web-components (TypeScript)

A Star Wars character browser application built with web components, featuring:

- Character list component that fetches data from SWAPI
- Character detail view with navigation
- TypeScript for type safety
- Custom events for component communication
- Responsive design

**To run:**

```bash
cd sw-character-web-components
npm install
npm run dev
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
