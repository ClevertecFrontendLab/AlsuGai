import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Flex, HStack, Spacer } from '@chakra-ui/react';

import TitleH2 from '../ui/TitleH2';

type Props = {
    onClick: () => void;
};

function TheJuiciestSection({ onClick }: Props) {
    return (
        <HStack
            align='center'
            mb={{ base: '0.75rem', lg: '1.5rem' }}
            mt={{ base: '2rem', lg: '2.5rem' }}
        >
            <TitleH2>Самое сочное</TitleH2>
            <Spacer />
            <Button
                size={{ base: 'md', '2xl': 'lg' }}
                bg='lime.300'
                _hover={{ bg: 'lime.50' }}
                data-test-id='juiciest-link'
                display={{ base: 'none', xl: 'block' }}
                onClick={onClick}
            >
                <Flex justifyContent='center' alignItems='center' gap='2'>
                    Вся подборка
                    <ArrowForwardIcon />
                </Flex>
            </Button>
        </HStack>
    );
}

export default TheJuiciestSection;
