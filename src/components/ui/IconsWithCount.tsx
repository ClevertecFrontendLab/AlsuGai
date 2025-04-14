import { HStack, Icon, Text } from '@chakra-ui/react';
import { JSX } from 'react';

export type IconCounterProps = {
    count: number;
    icon: () => JSX.Element;
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
        <Icon as={icon} />
        <Text as='span' color='lime.600' fontWeight='medium' fontSize={fontSize}>
            {count}
        </Text>
    </HStack>
);
