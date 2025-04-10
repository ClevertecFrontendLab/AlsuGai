import { Text, TextProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

export interface TitleProps extends TextProps {
    children?: ReactNode;
}

function TitleH2({ children }: TextProps) {
    return (
        <Text as='h2' fontSize='5xl' fontWeight='medium'>
            {children}
        </Text>
    );
}

export default TitleH2;
