import TrackList from 'components/track-list';
import DefaultLayout from 'layout/Default';
import { useSelector } from 'react-redux';
import initialTracks from 'api/data';
import { Box, Flex, Heading, useMediaQuery } from '@chakra-ui/react';
import CreatePlaylistForm from 'components/create-playlist-form';

const CreatePlaylistPage = () => {
  const { tracks } = useSelector((state) => state.track);
  const trackList = (tracks.length > 0 && tracks) || initialTracks;
  const [isDesktop] = useMediaQuery('(min-width: 1280px)');

  return (
    <DefaultLayout>
      <Flex direction={isDesktop ? 'row' : 'column'}>
        <Box>
          <CreatePlaylistForm />
        </Box>
        <Box p="12" width="100%">
          <Heading textAlign="center" mb="7">Select tracks</Heading>
          <Box>
            <TrackList data={trackList} />
          </Box>
        </Box>
      </Flex>
    </DefaultLayout>
  );
};

export default CreatePlaylistPage;
