import './App.css';

import { ChakraProvider, Flex } from '@chakra-ui/react';

import Footer from '~/components/Footer/Footer.tsx';
import Header from '~/components/Header.tsx/Header';
import Navigation from '~/components/Navigation/Navigation.tsx';
import { useGetPostsQuery } from '~/query/services/posts.ts';

import theme from '../../chakra.config.ts';

function App() {
    const { data: _data, isLoading: _isLoading } = useGetPostsQuery();

    return (
        <>
            <ChakraProvider theme={theme}>
                <Header />
                <Flex direction='column'>
                    <Navigation />
                    <Footer />
                </Flex>
            </ChakraProvider>
        </>
    );
}

export default App;
