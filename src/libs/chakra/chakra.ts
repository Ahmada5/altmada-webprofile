import { extendTheme } from '@chakra-ui/react';

// Define custom breakpoints for responsiveness
const breakpoints = {
    sm: '320px',  // Small devices (phones)
    md: '768px',  // Medium devices (tablets)
    lg: '1024px', // Large devices (desktops)
    xl: '1280px', // Extra-large devices (widescreens)
};

// Extend the theme with custom breakpoints and other settings
const theme = extendTheme({
    breakpoints,
    colors: {
        brand: {
            50: '#e5f4ff',
            100: '#b3daff',
            200: '#80bfff',
            300: '#4da6ff',
            400: '#1a8cff',
            500: '#006bff', // Primary brand color
            600: '#0055cc',
            700: '#004099',
            800: '#002b66',
            900: '#001533',
        },
    },
    fonts: {
        heading: "'Open Sans', sans-serif",
        body: "'Roboto', sans-serif",
    },
    styles: {
        global: {
            'html, body': {
                margin: 0,
                padding: 0,
                boxSizing: 'border-box',
                bg: 'gray.100',
                color: 'gray.900',
            },
        },
    },
});

export default theme;
