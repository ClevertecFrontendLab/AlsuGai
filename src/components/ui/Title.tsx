import { Text, TextProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

export interface TitleProps extends TextProps {
    children?: ReactNode;
}

function Title({ children }: TextProps) {
    return (
        <Text as='h1' fontSize='5xl' fontWeight='bold'>
            {children}
        </Text>
    );
}

export default Title;
