import { Flex, FormControl, FormLabel, IconButton, Show, Switch, Text } from '@chakra-ui/react';

import { Filter } from '~/assets/icons/Filter';

import Options from '../ui/Options';
import Search from '../ui/Search';
import Title from '../ui/Title';
import styles from './Intro.module.scss';

interface IIntro {
    titleText?: string;
    infoText?: string;
}

function Intro({ titleText, infoText }: IIntro) {
    return (
        <Flex
            direction='column'
            py='8'
            justifyContent='center'
            alignItems='center'
            align='center'
            pt={{ base: 4, xl: 8 }}
            mb={{ base: 8, xl: 14 }}
        >
            <Title>{titleText}</Title>
            <Text
                textAlign='center'
                color='blackAlpha.600'
                lineHeight={1.5}
                fontSize={{ base: 'sm', xl: 'md' }}
                mt={{ base: 4, xl: 3 }}
                maxW={{ base: '100%', xl: '696px' }}
            >
                {infoText}
            </Text>
            <Flex
                gap={3}
                width={{ base: '100%', md: 'auto' }}
                mt={{ base: 4, xl: 8 }}
                mb={{ base: 0, xl: 4 }}
                alignItems='center'
                justifyContent='center'
            >
                <IconButton
                    aria-label='Filter'
                    variant='outline'
                    icon={<Filter boxSize={{ base: '14px', xl: '24px' }} />}
                    boxSize={{ base: '32px', xl: '48px' }}
                    border='1px solid rgba(0, 0, 0, 0.48)'
                    width='32px'
                    minW={{ base: '32px', xl: '48px' }}
                />
                <Search />
            </Flex>
            <Show above='xl'>
                <Flex gap='4' w='518px'>
                    <FormControl display='flex' alignItems='center' pl='2'>
                        <FormLabel htmlFor='text' mb='0' className={styles.label}>
                            Исключить мои аллергены
                        </FormLabel>
                        <Switch id='text' />
                    </FormControl>
                    <Options />
                </Flex>
            </Show>
        </Flex>
    );
}

export default Intro;
