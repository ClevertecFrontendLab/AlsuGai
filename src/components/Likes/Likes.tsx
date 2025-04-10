import { Flex, Text } from '@chakra-ui/react';

import { IAvatar, IBookMark, ISmile } from '~/assets/icons/icons';

import styles from './Likes.module.scss';

function Likes() {
    return (
        <aside className={styles.aside}>
            <Flex direction='column' gap='6'>
                <Flex justifyContent='center' alignItems='center' gap='2' className={styles.item}>
                    <IBookMark />{' '}
                    <Text fontSize='md' fontWeight='semibold' color='lime.600' lineHeight='6'>
                        185
                    </Text>
                </Flex>
                <Flex justifyContent='center' alignItems='center' gap='2' className={styles.item}>
                    <IAvatar />{' '}
                    <Text fontSize='md' fontWeight='semibold' color='lime.600' lineHeight='6'>
                        589
                    </Text>
                </Flex>
                <Flex justifyContent='center' alignItems='center' gap='2' className={styles.item}>
                    <ISmile />{' '}
                    <Text fontSize='md' fontWeight='semibold' color='lime.600' lineHeight='6'>
                        587
                    </Text>
                </Flex>
            </Flex>
        </aside>
    );
}

export default Likes;
