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
        <Flex bgColor='lime.50' data-test-id='header'>
            <Image src={LogoDesktop} />
            <Breadcrumb spacing='8px' separator={<ChevronRightIcon />}>
                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Главная</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Веганская кухня</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>Самое сочное</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <Stack gap='4'>
                <HStack>
                    <Avatar src='../../src/assets/images/ekaterina_photo.png' />
                    <Stack gap='0'>
                        <Text fontWeight='medium'>Екатерина Константинопольская</Text>
                        <Text color='fg.muted' textStyle='sm'>
                            @bake_and_pie
                        </Text>
                    </Stack>
                </HStack>
            </Stack>
        </Flex>
    );
}

export default Header;
