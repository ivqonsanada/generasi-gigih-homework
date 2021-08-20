import { Box, Button, Heading, Input, Text, VStack } from '@chakra-ui/react';
import usePlaylist from 'lib/usePlaylist';
import { useState } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';

const CreatePlaylistForm = () => {
  const user = useSelector((state: RootStateOrAny) => state.user);
  const { selectedTracks } = useSelector((state: RootStateOrAny) => state.track);
  const { createPlaylist } = usePlaylist();
  const [form, setForm] = useState({
    name: '',
    description: '',
    public: false,
    collaborative: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createPlaylist({ id: user.data.id }, form);
  };
  return (
    <VStack m="4" alignItems="start" spacing="5">
      <form id="createPlaylist" onSubmit={handleSubmit}>
        <Heading as="h3" size="sm">
          Create a Playlist
        </Heading>
        <VStack spacing="3">
          <div>
            <label htmlFor="name">Name:</label>
            <Input
              type="text"
              id="name"
              name="name"
              minLength={10}
              onChange={handleChange}
              borderWidth="2px"
              borderColor="gray.700"
            />
          </div>
          <div>
            <label htmlFor="description">Description: </label>
            <Input
              type="text"
              id="description"
              name="description"
              minLength={20}
              onChange={handleChange}
              borderWidth="2px"
              borderColor="gray.700"
            />
          </div>
          <Button colorScheme="green" type="submit" form="createPlaylist">
            Create
          </Button>
        </VStack>
      </form>
      <Box>
        <Heading as="h3" size="sm">
          Selected Tracks:
        </Heading>
        <Box>
          {selectedTracks.map((track: Track) => (
            <Box width="240px">
              <Text isTruncated>{track.name}</Text>
            </Box>
          ))}
        </Box>
      </Box>
    </VStack>
  );
};

export default CreatePlaylistForm;
