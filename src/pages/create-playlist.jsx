import TrackList from 'components/track-list';
import DefaultLayout from 'layout/default-layout';
import { useDispatch, useSelector } from 'react-redux';
import initialTracks from 'api/data';
import { Box, Heading, Stack } from '@chakra-ui/react';
import CreatePlaylistForm from 'components/create-playlist-form';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import { updateTracks } from 'store/track';
import { useSpotify } from 'lib/useSpotify';

const CreatePlaylistPage = () => {
  const { tracks, next, selectedTracks } = useSelector((state) => state.track);
  const dispatch = useDispatch();
  const { getNextSearchTracks } = useSpotify();
  const trackList = (tracks.length > 0 && tracks) || initialTracks;

  const fetchNewTracks = () => {
    if (next !== '') {
      getNextSearchTracks().then(async ({ data }) => {
        const tempTracks = [...selectedTracks, ...tracks, ...data.tracks.items];

        const result = [];
        const map = new Map();
        tempTracks.forEach((track) => {
          if (!map.has(track.uri)) {
            map.set(track.uri, true);
            result.push(track);
          }
        });

        dispatch(
          updateTracks({
            tracks: result,
            nextRoute: data.tracks.next
          })
        );
      });
    }
  };

  useBottomScrollListener(fetchNewTracks, {
    offset: 35,
    debounce: 1000,
    triggerOnNoScroll: true
  });

  return (
    <DefaultLayout>
      <Stack direction={{ base: 'column', lg: 'row' }} p="6" spacing="8">
        <Box w="300px" mx="auto">
          <CreatePlaylistForm />
        </Box>
        <Box width="100%">
          <Heading as="h2" fontSize="md" textAlign="center" mb="7">
            Select tracks for your new playlist
          </Heading>
          <TrackList data={trackList} />
        </Box>
      </Stack>
    </DefaultLayout>
  );
};

export default CreatePlaylistPage;
