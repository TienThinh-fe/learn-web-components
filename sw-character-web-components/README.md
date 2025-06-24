# Star Wars Character Web Components

A Star Wars character browser application built with TypeScript and Web Components. This project demonstrates advanced web component concepts including component communication, state management, and API integration.

## Features

- **Character List**: Browse Star Wars characters fetched from the SWAPI (Star Wars API)
- **Character Details**: View detailed information about each character
- **Navigation**: Seamless navigation between list and detail views
- **Custom Events**: Component communication using custom events
- **TypeScript**: Full type safety and better development experience
- **Responsive Design**: Works on desktop and mobile devices

## Project Structure

```
sw-character-web-components/
├── README.md
├── index.html              # Main HTML file
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── src/
    ├── main.ts            # Application entry point and navigation logic
    ├── style.css          # Global styles
    ├── types.d.ts         # TypeScript type definitions
    ├── vite-env.d.ts      # Vite environment types
    └── components/
        ├── x-character-list.ts     # Character list component
        └── x-character-detail.ts   # Character detail component
```

## Components

### XCharacterList

A web component that displays a list of Star Wars characters.

**Features:**

- Fetches character data from SWAPI
- Displays characters in a clickable list
- Emits `character-selected` custom event when a character is clicked
- Error handling for API failures
- Hover effects and interactive styling

**Usage:**

```html
<x-character-list></x-character-list>
```

### XCharacterDetail

A web component that displays detailed information about a selected character.

**Features:**

- Shows character details (name, height, mass, hair color, etc.)
- Back button to return to the character list
- Emits `back-to-list` custom event when back button is clicked
- Responsive layout

**Usage:**

```html
<x-character-detail></x-character-detail>
```

**Setting character data:**

```javascript
const detailComponent = document.querySelector('x-character-detail')
detailComponent.character = characterData
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:

   ```bash
   cd sw-character-web-components
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

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

## How It Works

### Navigation Flow

1. **Initial State**: The application loads showing the character list
2. **Character Selection**: User clicks on a character in the list
3. **Event Handling**: The list component emits a `character-selected` event
4. **View Switch**: Main application hides the list and shows the detail view
5. **Back Navigation**: User clicks the back button in the detail view
6. **Return to List**: Detail component emits `back-to-list` event, application shows the list again

### Custom Events

The application uses custom events for component communication:

- `character-selected`: Emitted when a character is clicked in the list
- `back-to-list`: Emitted when the back button is clicked in the detail view

### API Integration

The application fetches character data from the Star Wars API (SWAPI):

- Endpoint: `https://swapi.info/api/people`
- Returns an array of character objects with detailed information

## Web Components Concepts Demonstrated

- **Custom Elements**: Creating reusable custom HTML elements
- **Shadow DOM**: Encapsulating component styles and markup
- **Custom Events**: Component-to-component communication
- **TypeScript Integration**: Type-safe web component development
- **Property Setters**: Reactive component properties
- **Lifecycle Callbacks**: Using `connectedCallback()` for initialization
- **Event Bubbling**: Using bubbling and composed events for cross-shadow-boundary communication

## Technologies Used

- **TypeScript**: For type safety and better development experience
- **Vite**: For fast development and building
- **Web Components API**: For creating custom elements
- **SWAPI**: Star Wars API for character data
- **CSS**: For styling and responsive design

## Browser Support

This application uses modern web standards and requires a browser that supports:

- Custom Elements v1
- Shadow DOM v1
- ES6 Modules
- Fetch API

All modern browsers (Chrome, Firefox, Safari, Edge) support these features.
