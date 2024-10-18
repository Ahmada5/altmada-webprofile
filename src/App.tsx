// src/App.tsx
import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import * as ReactDOM from 'react-dom/client';

// Import your custom theme from chakra.ts
import theme from './libs/chakra/chakra';

import HomePage from "./pages/HomePage.tsx";

const rootElement = document.getElementById('root');
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            {/* Use the custom theme from chakra.ts */}
            <ChakraProvider theme={theme}>
                <HomePage />
            </ChakraProvider>
        </React.StrictMode>,
    );
} else {
    console.error("Root element not found!");
}
