import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme(
    //{ ...typography, ...foundations, styles, components },
    {
        fonts: {
            heading: `'Inter', sans-serif`,
            body: `'Inter', sans-serif`,
        },
        colors: {
            lime: {
                100: '#EAFFC7',
                500: '#ffffd3',
                600: '#2DB100',
            },
        },
        breakpoints: {
            mobi: '360px',
            tablet: '768px',
            desktop: '1440px',
            wide: '1920px',
        },
        weigth: {
            500: '500',
        },
    },
);

export default theme;
