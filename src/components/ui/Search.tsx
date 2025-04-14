import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';

function Search() {
    return (
        <InputGroup flex='1' w={{ md: '404px', xl: '458px' }} alignItems='center'>
            <Input
                placeholder='Название или ингредиент...'
                _placeholder={{ color: 'lime.800' }}
                width='100%'
                size={{ base: 'sm', xl: 'lg' }}
                border='1px solid rgba(0, 0, 0, 0.48)'
                _hover={{ borderColor: 'lime.300' }}
            />
            <InputRightElement w={{ base: '32px', xl: '48px' }} h={{ base: '32px', xl: '48px' }}>
                <SearchIcon boxSize={{ base: '14px', xl: '18px' }} />
            </InputRightElement>
        </InputGroup>
    );
}

export default Search;
