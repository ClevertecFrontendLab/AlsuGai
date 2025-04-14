import { Box } from '@chakra-ui/icons';
import { Container } from '@chakra-ui/react';
import { Route, Routes } from 'react-router';

import { HomePage } from './HomePages.tsx';

export const Main = () => (
    <Box as='main'>
        <Container
            maxW='100%'
            px={{ base: '16px', md: '20px', xl: '280px' }}
            mt={{ base: '64px', xl: '80px' }}
            pb={{ base: '68px', xl: 0 }}
        >
            <Routes>
                <Route path='/' element={<HomePage />} />
            </Routes>
        </Container>
    </Box>
);
