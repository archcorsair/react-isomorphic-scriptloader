# React Isomorphic ScriptLoader

A lightweight React component to load scripts into your isomorphic (server-side rendered) web application.

## Features

- **Isomorphic/Universal**: Works on both server (SSR) and client.
- **Modern Stack**: Built with TypeScript, supports React 18 and React 19.
- **Zero Dependencies**: Lightweight and efficient.
- **Typed**: Includes first-class TypeScript definitions.

## Installation

```bash
# npm
npm install react-isomorphic-scriptloader

# yarn
yarn add react-isomorphic-scriptloader

# pnpm
pnpm add react-isomorphic-scriptloader
```

## Usage

### Functional Component (Hooks)

```tsx
import React, { useState } from 'react';
import ScriptLoader from 'react-isomorphic-scriptloader';

export default function MyComponent() {
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

  return (
    <div>
      <ScriptLoader 
        src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places" 
        onLoad={() => setScriptsLoaded(true)} 
      />
      
      {scriptsLoaded ? (
        <div>Google Maps Loaded!</div>
      ) : (
        <div>Loading Maps...</div>
      )}
    </div>
  );
}
```

## Props

| Prop | Type | Description |
|------|------|-------------|
| `src` | `string` | The URL of the script to load. |
| `onLoad` | `() => void` | Callback function executed when the script has loaded. |

## License

This package is licensed under the MIT License.
