import { Box, Hide, Show, Spacer } from '@chakra-ui/icons';
import { Flex, HStack } from '@chakra-ui/react';
import { NavLink } from 'react-router';

import { IAvatar, IBookMark, ILogoMDesk, ILogoMobi, ISmile } from '~/assets/icons/icons';

import User from '../../assets/images/avatars/ekaterina_photo.png';
import { Breadcrumbs } from '../Breadcrumbs';
import { BurgerMenu } from '../BurgerMenu';
import { AvatarWithName } from '../ui/AvatarWithName';
import { IconWithCounter } from '../ui/IconsWithCount';

function Header() {
    return (
        <Flex
            pl='4'
            as='header'
            h={{ base: '64px', xl: '80px' }}
            bg='lime.50'
            align='center'
            pos='fixed'
            top='0'
            right='0'
            left='0'
            data-test-id='header'
            zIndex={10}
        >
            <NavLink to='/'>
                <Show above='md'>
                    <ILogoMDesk />
                </Show>
                <Hide above='md'>
                    <ILogoMobi />
                </Hide>
            </NavLink>
            <Show above='xl'>
                <Box>
                    <Breadcrumbs />
                </Box>
                <Spacer />
                <Box mr='20'>
                    <AvatarWithName
                        name='Екатерина Константинопольская'
                        login='@bake_and_pie'
                        src={User}
                    />
                </Box>
            </Show>
            <Hide above='xl'>
                <Spacer />
                <HStack px={{ base: '8px', sm: '12px' }} spacing={0}>
                    <IconWithCounter
                        icon={<IBookMark />}
                        count={185}
                        spacing='6px'
                        padding='4px 8px'
                    />
                    <IconWithCounter
                        icon={<IAvatar />}
                        count={589}
                        spacing='6px'
                        padding='4px 8px'
                    />
                    <IconWithCounter
                        icon={<ISmile />}
                        count={587}
                        spacing='6px'
                        padding='4px 8px'
                    />
                </HStack>
                <BurgerMenu />
            </Hide>
        </Flex>
    );
}

export default Header;
