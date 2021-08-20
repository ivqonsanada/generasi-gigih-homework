import { loginAuthSpotify } from 'api/auth';
import {
  Button,
  Center,
  Heading,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  useMediaQuery
} from '@chakra-ui/react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import SearchBar from 'components/search-bar';
import UserProfile from 'components/user-profile';
import { Icon } from '@iconify/react';
import { logout } from 'store/user';

const Header = () => {
  const { isAuthenticated } = useSelector((state: RootStateOrAny) => state.user);
  const [isDesktop] = useMediaQuery('(min-width: 1280px)');
  const dispatch = useDispatch();

  return (
    <Center bg="blackAlpha.900" h="100px" color="gray.300" padding="20px">
      {isAuthenticated ? (
        <>
          <HStack spacing="24px">
            <Heading>musica</Heading>
            <SearchBar />
          </HStack>
          <Spacer />
          <Menu colorScheme="blackAlpha">
            <MenuButton
              as={isDesktop ? Button : IconButton}
              aria-label="Options"
              variant="ghost"
              _hover={{ bg: 'gray.600' }}
              _expanded={{ bg: 'gray.900' }}
              _focus={{ bg: 'gray.600' }}
            >
              <UserProfile />
            </MenuButton>
            <MenuList bg="gray.900" borderWidth="2px" borderColor="gray.700">
              <MenuItem _hover={{ bg: 'gray.700' }} _focus={{ bg: 'gray.700' }} onClick={() => dispatch(logout())}>
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </>
      ) : (
        <>
          <Heading>musica</Heading>
          <Spacer />
          <Button colorScheme="green" size="md" onClick={() => loginAuthSpotify()}>
            <HStack>
              <Icon icon="akar-icons:spotify-fill" inline />
              <Text>Login with Spotify</Text>
            </HStack>
          </Button>
        </>
      )}
    </Center>
  );
};

export default Header;
