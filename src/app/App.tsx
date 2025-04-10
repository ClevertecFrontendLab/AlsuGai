import './App.css';

import { ChakraProvider, Flex } from '@chakra-ui/react';

import Footer from '~/components/Footer/Footer.tsx';
import Header from '~/components/Header.tsx/Header';
import Intro from '~/components/Intro/Intro.tsx';
import Likes from '~/components/Likes/Likes.tsx';
import Navigation from '~/components/Navigation/Navigation.tsx';
import NewRecipes from '~/components/NewRecipes/NewRecipes.tsx';
import WriteButton from '~/components/WriteButton.tsx/WriteButton.tsx';
import { useGetPostsQuery } from '~/query/services/posts.ts';

import theme from '../../chakra.config.ts';

function App() {
    const { data: _data, isLoading: _isLoading } = useGetPostsQuery();

    return (
        <>
            <ChakraProvider theme={theme}>
                <Header />
                <Flex justifyContent='space-between' className='container'>
                    <Flex direction='column'>
                        <Navigation />
                        <Footer />
                    </Flex>
                    <main>
                        <Flex direction='column'>
                            <Intro titleText='Приятного аппетита!' />
                            <NewRecipes />
                        </Flex>
                    </main>
                    <Flex
                        width='208px'
                        direction='column'
                        alignItems='end'
                        justifyContent='space-between'
                    >
                        <Likes />
                        <WriteButton />
                    </Flex>
                </Flex>
            </ChakraProvider>
        </>
    );
}

export default App;
