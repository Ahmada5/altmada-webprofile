import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import * as ReactDOM from 'react-dom/client';

import HomePage from "./pages/HomePage.tsx";

import { extendTheme } from '@chakra-ui/react'
const colors = {
    brand: {
        900: '#1a365d',
        800: '#153e75',
        700: '#2a69ac',
    },
}

const theme = extendTheme({ colors })

const rootElement = document.getElementById('root');
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <ChakraProvider theme={theme}>
                <HomePage />
            </ChakraProvider>
        </React.StrictMode>,
    );
} else {
    console.error("Root element not found!");
}
