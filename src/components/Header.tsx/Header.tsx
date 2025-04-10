import { ChevronRightIcon } from '@chakra-ui/icons';
import {
    Avatar,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Flex,
    HStack,
    Image,
    Stack,
    Text,
} from '@chakra-ui/react';

import LogoDesktop from '../../assets/images/logo-desktop.svg';

function Header() {
    return (
        <header className='header'>
            <Flex
                data-test-id='header'
                h={20}
                py={4}
                justifyContent='space-between'
                alignItems='center'
                pl={4}
                pr={14}
                className='container'
            >
                <Flex alignItems='center'>
                    <Image src={LogoDesktop} pr={32} />

                    <Breadcrumb spacing='8' separator={<ChevronRightIcon />}>
                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink fontSize='md' href='#'>
                                Главная
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Flex>
                <Stack gap='4'>
                    <HStack>
                        <Avatar src='../../src/assets/images/avatars/ekaterina_photo.png' />
                        <Stack gap='0'>
                            <Text as='b' fontWeight='medium' fontSize='lg'>
                                Екатерина Константинопольская
                            </Text>
                            <Text color='blackAlpha.700' fontSize='sm' fontWeight='normal'>
                                @bake_and_pie
                            </Text>
                        </Stack>
                    </HStack>
                </Stack>
            </Flex>
        </header>
    );
}

export default Header;
