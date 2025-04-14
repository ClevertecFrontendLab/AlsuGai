import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

import TitleH3 from './TitleH3';

interface IContent {
    image: string;
    name: string;
    text: string;
    icon: ReactNode;
    category: string;
    iconSave?: ReactNode;
    save?: string;
    iconLikes?: ReactNode;
    likes?: string;
}

function CardNewRecipes({
    image,
    name,
    text,
    icon,
    category,
    save,
    likes,
    iconLikes,
    iconSave,
}: IContent) {
    return (
        <Box borderWidth='1px' borderRadius='lg' overflow='hidden' w='322px'>
            <Image w='80' h='230px' src={image} alt={name} />
            <Flex direction='column' px='6' pt='16px'>
                <TitleH3 as='h3'>{name}</TitleH3>
                <Text
                    fontSize='14'
                    lineHeight='20px'
                    mt='2'
                    mb='6'
                    h='64px'
                    textOverflow='ellipsis'
                    overflowY='hidden'
                    display='-webkit-box'
                    position='relative'
                >
                    {text}
                </Text>
                <Box>
                    {icon} {category}
                </Box>
                <Flex>
                    <Box>
                        {iconSave}
                        {save}
                    </Box>
                    <Box>
                        {iconLikes}
                        {likes}
                    </Box>
                </Flex>
            </Flex>
        </Box>
    );
}

export default CardNewRecipes;
