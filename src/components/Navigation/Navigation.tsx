import { Accordion, Box, Flex } from '@chakra-ui/react';

import FooterLeft from '../Footer/FooterLeft';
import { content } from './content';
import { NavigationItem } from './NavigationItem';

function Navigation() {
    return (
        <Flex
            direction='column'
            pos='fixed'
            left={0}
            bottom={0}
            top={{ base: '64px', xl: '80px' }}
            w='256px'
        >
            <Accordion
                allowToggle
                sx={{
                    '&::-webkit-scrollbar': {
                        backgroundColor: '#0000000A',
                        width: '8px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: '#00000028',
                        borderRadius: '8px',
                    },
                    '&::-webkit-scrollbar-button': {
                        display: 'none',
                    },
                }}
                m='34px 16px 10px 10px'
                flexGrow={1}
                overflowY='auto'
            >
                {content.map((item) =>
                    item.id === 7 ? (
                        <Box data-test-id='vegan-cuisine' key={item.id}>
                            <NavigationItem {...item} />
                        </Box>
                    ) : (
                        <NavigationItem {...item} key={item.id} />
                    ),
                )}
            </Accordion>
            <FooterLeft />
        </Flex>
    );
}

export default Navigation;
