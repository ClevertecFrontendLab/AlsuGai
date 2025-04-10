import { Flex, Text } from '@chakra-ui/react';

import { IWrite } from '~/assets/icons/icons';

import styles from './WriteButton.module.scss';

function WriteButton() {
    return (
        <Flex
            justifyContent='center'
            alignItems='center'
            flexDirection='column'
            gap='3'
            className={styles.writeButton}
        >
            <button className={styles.button}>
                <IWrite />
            </button>
            <Text fontSize='xs'>Записать рецепт</Text>
        </Flex>
    );
}

export default WriteButton;
