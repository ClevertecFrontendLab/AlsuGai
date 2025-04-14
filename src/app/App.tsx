import './App.css';

import { Show } from '@chakra-ui/icons';
import { ChakraProvider } from '@chakra-ui/react';

import Header from '~/components/Header.tsx/Header';
import Navigation from '~/components/Navigation/Navigation.tsx';
import RigthAside from '~/components/RigthAside/RigthAside';
import { Main } from '~/layout/pages/Main';
import { useGetPostsQuery } from '~/query/services/posts.ts';

import theme from '../../chakra.config';

function App() {
    const { data: _data, isLoading: _isLoading } = useGetPostsQuery();

    return (
        <>
            <ChakraProvider theme={theme}>
                <Header />
                <Main />
                <Show above='xl'>
                    <Navigation />
                    <RigthAside />
                </Show>
                <Show below='xl'></Show>
            </ChakraProvider>
        </>
    );
}

export default App;
