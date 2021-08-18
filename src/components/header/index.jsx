import { loginAuthSpotify } from 'api/auth';
import { useState } from 'react';
import { store } from 'store';
import PropTypes from 'prop-types';
import { Button, Center, Flex, Input } from '@chakra-ui/react';

const Header = ({ handleSearch }) => {
  const [query, setQuery] = useState('');
  const isAuthenticated = store.getState().user.accessToken;

  const onSubmit = (e) => {
    e.preventDefault();
    handleSearch(query);
  };
  return (
    <div>
      {isAuthenticated ? (
        <form onSubmit={onSubmit}>
          <Center bg="white" h="100px" color="white">
            <Flex>
              <Input
                variant="outline"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="find your true music"
                color="gray.700"
                type="text"
              />

              <Button type="submit" colorScheme="teal" size="md">
                Search
              </Button>
            </Flex>
          </Center>
        </form>
      ) : (
        /* <form onSubmit={onSubmit}>
          <input
            name="song"
            placeholder="Input song name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" aria-label="search song">
            Search
          </button>
        </form> */
        <button type="button" onClick={() => loginAuthSpotify()} style={{ marginLeft: 'auto' }}>
          Login with Spotify
        </button>
      )}
    </div>
  );
};

Header.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default Header;
