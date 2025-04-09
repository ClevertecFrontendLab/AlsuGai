import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        lime: {
            500: '#ffffd3',
        },
    },
    breakpoints: {
        mobi: '360px',
        tablet: '768px',
        desktop: '1440px',
        wide: '1920px',
    },
});

export default theme;
