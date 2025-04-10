import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { IBookMark } from '~/assets/icons/icons';

interface IContent {
    image: string;
    name: string;
    text: string;
    icon: ReactNode;
    category: string;
    save?: string;
    likes?: string;
}

function CardNewRecipes({ image, name, text, icon, category, save, likes }: IContent) {
    return (
        <Box>
            <Image src={image} alt={name} />
            <Text>{name}</Text>
            <Text>{text}</Text>
            <Box>
                {icon} {category}
            </Box>
            <Flex>
                <Box>
                    <IBookMark />
                    {save}
                </Box>
                <Box>
                    <IBookMark />
                    {likes}
                </Box>
            </Flex>
        </Box>
    );
}

export default CardNewRecipes;
