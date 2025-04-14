import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Flex } from '@chakra-ui/react';

import CardNewRecipes from '../ui/CardNewRecipes';
import TitleH2 from '../ui/TitleH2';
import { content } from './data/content';

function NewRecipes() {
    return (
        <Flex pt='6' pl='6' pr='73px' direction='column' position='relative'>
            <Button
                colorScheme='blackAlpha'
                bg='blackAlpha.900'
                variant='solid'
                w='12'
                h='12'
                position='absolute'
            >
                <ArrowBackIcon w='1.5em' h='1.5em' />
            </Button>

            <TitleH2>Новые рецепты</TitleH2>
            <Flex gap='6' overflowX='hidden'>
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
                    />
                ))}
            </Flex>
            <Button
                colorScheme='blackAlpha'
                bg='blackAlpha.900'
                variant='solid'
                w='12'
                h='12'
                position='absolute'
            >
                <ArrowForwardIcon w='1.5em' h='1.5em' />
            </Button>
        </Flex>
    );
}

export default NewRecipes;
