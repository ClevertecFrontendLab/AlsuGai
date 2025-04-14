import { Text, TextProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

export interface TitleProps extends TextProps {
    children?: ReactNode;
}

function TitleH3({ children }: TextProps) {
    return (
        <Text as='h3' fontSize='xl' fontWeight='medium' isTruncated>
            {children}
        </Text>
    );
}

export default TitleH3;
