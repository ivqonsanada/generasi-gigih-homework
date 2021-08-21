import { Button, FormControl, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react';
import SelectedTrackList from 'components/selected-track-list';
import usePlaylist from 'lib/usePlaylist';
import React, { useState } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import styles from './CreatePlaylistForm.module.css';

const CreatePlaylistForm = () => {
  const { data: user } = useSelector((state: RootStateOrAny) => state.user);
  const { selectedTracks } = useSelector((state: RootStateOrAny) => state.track);
  const { createPlaylist } = usePlaylist();
  const [form, setForm] = useState({
    name: '',
    description: '',
    public: false,
    collaborative: false
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createPlaylist({ id: user.id }, form);
  };
  return (
    <VStack alignItems="start" spacing="7" position="sticky" top="6">
      <form id="createPlaylist" onSubmit={handleSubmit} className={styles.form}>
        <VStack spacing="5">
          <Heading as="h3" size="sm">
            Create your playlist
          </Heading>
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              minLength={10}
              onChange={handleChange}
              borderWidth="1px"
              borderColor="gray.700"
              placeholder="the playlist name"
              isRequired
            />
          </FormControl>
          <FormControl id="description">
            <FormLabel>Description</FormLabel>
            <Textarea
              name="description"
              placeholder="the playlist description"
              minLength={20}
              onChange={handleChange}
              borderWidth="1px"
              borderColor="gray.700"
              isRequired
            />
          </FormControl>
          <Button colorScheme="green" type="submit" form="createPlaylist" w="full" isDisabled={selectedTracks.length === 0}>
            Create
          </Button>
        </VStack>
      </form>
      <SelectedTrackList data={selectedTracks} />
    </VStack>
  );
};

export default CreatePlaylistForm;
