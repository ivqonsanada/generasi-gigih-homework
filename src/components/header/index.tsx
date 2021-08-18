import { loginAuthSpotify } from 'api/auth';
import React, { useState } from 'react';
import { store } from 'store';
import { Button, Center, Flex, Input } from '@chakra-ui/react';

interface HeaderProps {
  handleSearch: (query: string) => void;
}

const Header = ({ handleSearch }: HeaderProps) => {
  const [query, setQuery] = useState('');
  const isAuthenticated = store.getState().user.accessToken;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
        <button type="button" onClick={() => loginAuthSpotify()} style={{ marginLeft: 'auto' }}>
          Login with Spotify
        </button>
      )}
    </div>
  );
};

export default Header;
