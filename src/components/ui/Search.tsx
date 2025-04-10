import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';

function Search() {
    return (
        <InputGroup borderColor='blackAlpha.600' w='458px'>
            <Input type='text' placeholder='Название или ингредиент...' size='lg' />
            <InputRightElement w='12' h='12'>
                <SearchIcon w='18px' h='18px' flex='1' flexGrow='1' />
            </InputRightElement>
        </InputGroup>
    );
}

export default Search;
