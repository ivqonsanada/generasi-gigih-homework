import { Button, HStack, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import useSpotify from 'lib/useSpotify';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTracks } from 'store/track';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const { selectedTracks } = useSelector((state) => state.track);
  const dispatch = useDispatch();
  const { getSearchTracks } = useSpotify();

  const handleSearch = () => {
    const options = {
      q: query,
      type: 'track',
      limit: 20
    };
    getSearchTracks(options).then(async ({ data }) => {
      if (query !== '') {
        const tempTracks = [...selectedTracks, ...data.tracks.items];

        const result = [];
        const map = new Map();
        tempTracks.forEach((track) => {
          if (!map.has(track.uri)) {
            map.set(track.uri, true);
            result.push(track);
          }
        });

        dispatch(updateTracks({
          tracks: result,
          nextRoute: data.tracks.next
        }));
      }
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <form onSubmit={onSubmit}>
      <HStack>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Icon icon="bi:search" inline />
          </InputLeftElement>
          <Input
            variant="outline"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="find your true music"
            type="search"
            borderWidth="2px"
            borderColor="gray.700"
          />
        </InputGroup>
        <Button type="submit" colorScheme="green" size="md">
          Search
        </Button>
      </HStack>
    </form>
  );
};

export default SearchBar;
