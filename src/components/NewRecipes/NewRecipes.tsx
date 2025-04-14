import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton, Show } from '@chakra-ui/react';

import CardNewRecipes from '../ui/CardNewRecipes';
import TitleH2 from '../ui/TitleH2';
import { content } from './data/content';

function NewRecipes() {
    return (
        <Flex direction='column' position='relative'>
            <TitleH2>Новые рецепты</TitleH2>
            <Box pos='relative' mt={{ base: '0.75rem', lg: '1.5rem' }}>
                <Flex gap={{ base: '12px', '2xl': '24px' }} overflow='hidden'>
                    {content.map((item) => (
                        <CardNewRecipes
                            key={item.id}
                            image={item.image}
                            name={item.name}
                            text={item.text}
                            icon={item.icon}
                            category={item.category}
                            save={item.save}
                            likes={item.likes}
                            iconLikes={item.iconLikes}
                            iconSave={item.iconSave}
                            bgColorTag={item.bgColorTag}
                        />
                    ))}
                </Flex>
                <Show above='xl'>
                    <IconButton
                        bg='black'
                        aria-label='Arrow Left'
                        w={{ base: '40px', '2xl': '48px' }}
                        h={{ base: '40px', '2xl': '48px' }}
                        _hover={{ bg: 'black' }}
                        pos='absolute'
                        left='-8px'
                        top='148px'
                    >
                        <ArrowBackIcon w='24px' h='24px' color='white' />
                    </IconButton>
                    <IconButton
                        bg='black'
                        aria-label='Arrow Right'
                        w={{ base: '40px', '2xl': '48px' }}
                        h={{ base: '40px', '2xl': '48px' }}
                        _hover={{ bg: 'black' }}
                        pos='absolute'
                        right='-8px'
                        top='148px'
                    >
                        <ArrowForwardIcon w='24px' h='24px' color='white' />
                    </IconButton>
                </Show>
            </Box>
        </Flex>
    );
}

export default NewRecipes;
