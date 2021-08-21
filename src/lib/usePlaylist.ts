import { useToast } from '@chakra-ui/react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { clearSelectedTracks, updateSelectedTracks } from 'store/track';
import useSpotify from './useSpotify';

const usePlaylist = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const { createNewPlaylist: createNewPlaylistAPI, storeTracksToNewPlaylist } = useSpotify();
  const { selectedTracks } = useSelector((state: RootStateOrAny) => state.track);

  const addTrack = (track: Track) => {
    dispatch(updateSelectedTracks([...selectedTracks, track]));
  };

  const removeTrack = (track: Track) => {
    let tempTracks = [...selectedTracks];
    tempTracks = tempTracks.filter((e: Track) => e.uri !== track.uri);
    dispatch(updateSelectedTracks(tempTracks));
  };

  const isTrackSelected = (track: Track) =>
    selectedTracks.filter((e: Track) => e.uri === track.uri).length > 0;

  const handleTrackSelect = (track: Track) => {
    if (isTrackSelected(track)) {
      removeTrack(track);
    } else {
      addTrack(track);
    }
  };

  const createPlaylist = async ({ id }: User, formPayload: PlaylistOption) =>
    createNewPlaylistAPI({ id }, formPayload)
      .then(({ data }) => {
        const playlistId = data.id;
        const selectedTracksUris = selectedTracks.map((e: Track) => e.uri);
        return storeTracksToNewPlaylist({ id: playlistId }, { uris: selectedTracksUris });
      })
      .then(() => {
        dispatch(clearSelectedTracks());
        toast({
          title: 'Playlist created.',
          description: 'All selected tracks included.',
          status: 'success',
          duration: 9000,
          isClosable: true
        });
      });

  return {
    isTrackSelected,
    handleTrackSelect,
    createPlaylist
  };
};

export { usePlaylist };
export default usePlaylist;
