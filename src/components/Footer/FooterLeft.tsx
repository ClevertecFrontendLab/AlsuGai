import { Box, Flex, Text } from '@chakra-ui/react';

import { LogOut } from '~/assets/icons/icons';

import styles from './FooterLeft.module.scss';

function FooterLeft() {
    return (
        <Box as='footer' className={styles.footer}>
            <Flex gap={4} direction='column'>
                <Text fontSize='xs' color='blackAlpha.400'>
                    Версия программы 03.25
                </Text>
                <Text fontSize='xs' color='blackAlpha.700' lineHeight='4'>
                    Все права защищены, <br /> ученический файл, <br /> ©Клевер Технолоджи, 2025
                </Text>
                <button className={styles.button}>
                    <Flex justify='left' alignItems='center' gap='1.5'>
                        <LogOut /> Выйти
                    </Flex>
                </button>
            </Flex>
        </Box>
    );
}

export default FooterLeft;
