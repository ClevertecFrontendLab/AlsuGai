import { Box, Card, CardBody, Flex, Image, Stack } from '@chakra-ui/react';
import { JSX } from 'react';

import { CategoryName } from './CategoryName';
import { IconWithCounter } from './IconsWithCount';
import { IconCounterProps } from './IconsWithCount';
import { TitleCards } from './TitleCards';

interface IContent {
    image: string;
    name: string;
    text: string;
    icon: () => JSX.Element;
    iconCounters: IconCounterProps[];
    category: string;
    bgColorTag: string;
}

function CardNewRecipes({ image, name, text, icon, category, bgColorTag, iconCounters }: IContent) {
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
                            {!!iconCounters.length &&
                                iconCounters.map((i, index) => (
                                    <IconWithCounter key={index} {...i} />
                                ))}
                        </Flex>
                    </Flex>
                </Stack>
            </CardBody>
        </Card>
    );
}

export default CardNewRecipes;
