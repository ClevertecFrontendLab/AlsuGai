import { HStack, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

export type IconCounterProps = {
    count: number;
    icon: ReactNode;
    spacing: string;
    padding: string;
    fontSize?: string;
};
export const IconWithCounter = ({
    count,
    icon,
    spacing,
    padding,
    fontSize = 'xs',
}: IconCounterProps) => (
    <HStack spacing={spacing} p={padding}>
        {icon}
        <Text as='span' color='lime.600' fontWeight='medium' fontSize={fontSize}>
            {count}
        </Text>
    </HStack>
);
