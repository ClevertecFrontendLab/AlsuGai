import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
} from '@chakra-ui/react';

import { content } from './content';

function Navigation() {
    return (
        <nav>
            <Accordion allowToggle>
                {content.map((item) => (
                    <AccordionItem key={item.id}>
                        <h2>
                            <AccordionButton>
                                <Box as='span' flex='1' textAlign='left'>
                                    {item.icon} {item.body}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        {item.description.map((descItem, index) => (
                            <AccordionPanel key={index} pb={4}>
                                {descItem.section}
                            </AccordionPanel>
                        ))}
                    </AccordionItem>
                ))}
            </Accordion>
        </nav>
    );
}

export default Navigation;
