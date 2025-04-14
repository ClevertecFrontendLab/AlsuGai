import { Center, Spacer } from '@chakra-ui/icons';
import { IconButton, Text, VStack } from '@chakra-ui/react';

import { IAvatar, IBookMark, ISmile, IWrite } from '~/assets/icons/icons';

import { IconWithCounter } from '../ui/IconsWithCount';

function RigthAside() {
    return (
        <VStack position='fixed' right={0} bottom={0} top={{ base: '64px', xl: '80px' }} w='208px'>
            <VStack spacing='6' pt='4'>
                <IconWithCounter
                    icon={<IBookMark />}
                    count={185}
                    spacing='8px'
                    padding='8px 16px'
                    fontSize='md'
                />
                <IconWithCounter
                    icon={<IAvatar />}
                    count={589}
                    spacing='8px'
                    padding='8px 16px'
                    fontSize='md'
                />
                <IconWithCounter
                    icon={<ISmile />}
                    count={587}
                    spacing='8px'
                    padding='8px 16px'
                    fontSize='md'
                />
            </VStack>
            <Spacer />
            <Center
                h='208px'
                w='208px'
                background='radial-gradient(50% 50% at 50% 50%, #c4ff61 0%, rgba(255, 255, 255, 0) 80%)'
            >
                <VStack gap='3'>
                    <IconButton
                        isRound={true}
                        variant='solid'
                        bg='black'
                        _hover={{ bg: 'blackAlpha.800' }}
                        aria-label='Добавить рецепт'
                        boxSize='48px'
                    >
                        <IWrite />
                    </IconButton>
                    <Text fontSize='xs' color='blackAlpha.700'>
                        Записать рецепт
                    </Text>
                </VStack>
            </Center>
        </VStack>
    );
}

export default RigthAside;
