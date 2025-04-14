import { Flex, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

type Props = {
    icon: ReactNode;
    count: string;
};
export const BoxWithIcons = ({ icon, count }: Props) => (
    <Flex gap='3' justify='center' alignItems='center' mx='1'>
        {icon}
        <Text color='lime.600' fontWeight='600'>
            {count}
        </Text>
    </Flex>
);
