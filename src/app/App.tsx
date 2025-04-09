import './App.css';

import { ChakraProvider } from '@chakra-ui/react';

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
                <div>
                    <Navigation />
                </div>
            </ChakraProvider>
        </>
    );
}

export default App;
