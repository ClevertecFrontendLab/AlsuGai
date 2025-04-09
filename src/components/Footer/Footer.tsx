import { Flex, Text } from '@chakra-ui/react';

import { IExit } from '~/assets/icons/icons';

import styles from './Footer.module.scss';

function Footer() {
    return (
        <footer className={styles.footer}>
            <Flex gap={4} direction='column'>
                <Text fontSize='xs' color='blackAlpha.400'>
                    Версия программы 03.25
                </Text>
                <Text fontSize='xs' color='blackAlpha.700' lineHeight='4'>
                    Все права защищены, <br /> ученический файл, <br /> ©Клевер Технолоджи, 2025
                </Text>
                <button className={styles.button}>
                    <Flex justify='left' alignItems='center' gap='1.5'>
                        <IExit /> Выйти
                    </Flex>
                </button>
            </Flex>
        </footer>
    );
}

export default Footer;
