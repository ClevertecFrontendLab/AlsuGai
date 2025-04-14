import { Box, Card, CardBody, Flex, Image, Stack, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { CategoryName } from './CategoryName';
import { TitleCards } from './TitleCards';

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
    bgColorTag: string;
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
    bgColorTag,
}: IContent) {
    return (
        <Card
            borderRadius='8px'
            overflow='hidden'
            w={{ base: '158px', xl: '277px', '2xl': '322px' }}
            flexShrink={0}
            _hover={{
                boxShadow:
                    '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
            }}
        >
            <Box position='relative' h={{ base: '128px', xl: '230px' }} overflow='hidden'>
                <Image
                    src={image}
                    alt={name}
                    p={0}
                    w='100%'
                    h='100%'
                    objectFit='cover'
                    maxH='230px'
                />
            </Box>
            <CardBody p={{ base: '8px 8px 4px 8px', xl: '12px', '2xl': '16px 24px 20px 24px' }}>
                <Stack spacing={{ base: 2, xl: 6 }}>
                    <TitleCards title={name} text={text} />
                    <Flex justifyContent='space-between'>
                        <CategoryName icon={icon} category={category} bgColor={bgColorTag} />
                        <Flex gap='6px'>
                            <Flex gap='3' justify='center' alignItems='center' mx='1'>
                                {iconSave}
                                <Text color='lime.600' fontWeight='600'>
                                    {save}
                                </Text>
                            </Flex>
                            <Flex gap='3' justify='center' alignItems='center' mx='1'>
                                {iconLikes}
                                <Text color='lime.600' fontWeight='600'>
                                    {likes}
                                </Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </Stack>
            </CardBody>
        </Card>
    );
}

export default CardNewRecipes;
