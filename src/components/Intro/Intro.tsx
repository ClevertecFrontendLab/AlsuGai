import { Button, Flex, FormControl, FormLabel, Switch, Text } from '@chakra-ui/react';

import { IIntroBurger } from '~/assets/icons/icons';

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
        <Flex direction='column' pt='8' justifyContent='center' alignItems='center' maxW='696px'>
            <Title>{titleText}</Title>
            <Text>{infoText}</Text>
            <Flex gap='3' pt='8' pb='4'>
                <Button colorScheme='blackAlpha' variant='outline' alignItems='center' size='12'>
                    <div className={styles.burger}>
                        <IIntroBurger />
                    </div>
                </Button>
                <Search />
            </Flex>
            <Flex gap='4' w='518px'>
                <FormControl display='flex' alignItems='center' pl='2'>
                    <FormLabel htmlFor='text' mb='0' className={styles.label}>
                        Исключить мои аллергены
                    </FormLabel>
                    <Switch id='text' />
                </FormControl>
                <Options />
            </Flex>
        </Flex>
    );
}

export default Intro;
