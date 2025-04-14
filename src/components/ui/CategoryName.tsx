import { Icon } from '@chakra-ui/icons';
import { Flex, Text } from '@chakra-ui/react';
import { JSX } from 'react';

type Props = {
    icon: () => JSX.Element;
    category: string;
    bgColor: string;
    mobilePos?: 'absolute' | 'relative' | 'fixed' | 'sticky' | 'static';
};
export const CategoryName = ({ icon, category, bgColor, mobilePos = 'absolute' }: Props) => (
    <Flex
        alignItems='center'
        bg={bgColor}
        borderRadius='4px'
        p={{ base: '2px 4px', xl: '2px 8px' }}
        gap='8px'
        pos={{ base: mobilePos, xl: 'static' }}
        top='8px'
        left='8px'
    >
        <Icon as={icon} />
        <Text
            as='span'
            flex='1'
            fontSize={{ base: 'sm', xl: 'md' }}
            noOfLines={1}
            letterSpacing='0'
        >
            {category}
        </Text>
    </Flex>
);
