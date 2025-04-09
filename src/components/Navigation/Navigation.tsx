import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Flex,
    Text,
} from '@chakra-ui/react';

import { content } from './content';
import styles from './Navigation.module.scss';

function Navigation() {
    return (
        <nav className={styles.nav}>
            <Accordion allowToggle>
                {content.map((item) => (
                    <AccordionItem key={item.id} className={styles.category}>
                        <h2>
                            <AccordionButton
                                _expanded={{ bg: 'lime.100' }}
                                py='12px'
                                px='8px'
                                _hover={{
                                    background: 'lime.500',
                                }}
                            >
                                <Box as='div' flex='1' textAlign='left' className={styles.box}>
                                    <Flex gap='3'>
                                        {item.icon}
                                        <Text fontSize='md' fontWeight='medium'>
                                            {item.body}
                                        </Text>
                                    </Flex>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        {item.description.map((descItem, index) => (
                            <AccordionPanel
                                key={index}
                                pl='10'
                                py='1.5'
                                pr='2'
                                _hover={{
                                    background: 'lime.500',
                                }}
                            >
                                <Flex gap='11px'>
                                    <div className={styles.line}></div>
                                    <Text className={styles.sectionText}>{descItem.section}</Text>
                                </Flex>
                            </AccordionPanel>
                        ))}
                    </AccordionItem>
                ))}
            </Accordion>
        </nav>
    );
}

export default Navigation;
