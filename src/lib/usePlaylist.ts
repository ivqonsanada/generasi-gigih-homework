import { useEffect, useState } from 'react';
import { createNewPlaylist as createNewPlaylistAPI, storeTracksToNewPlaylist } from 'api/spotify';

const usePlaylist = () => {
  const [selectedTracks, setSelectedTracks] = useState<Track[]>([]);

  useEffect(() => {
    localStorage.setItem('selectedTracks', JSON.stringify(selectedTracks));
  }, [selectedTracks]);

  const addTrack = (track: Track) => {
    setSelectedTracks([...selectedTracks, track]);
  };

  const removeTrack = (track: Track) => {
    let tempTracks = [...selectedTracks];
    tempTracks = tempTracks.filter((e: Track) => e.uri !== track.uri);
    setSelectedTracks(tempTracks);
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
        // eslint-disable-next-line camelcase
        const playlistId = data.id;
        const selectedTracksUris = selectedTracks.map((e: Track) => e.uri);
        return storeTracksToNewPlaylist(
          { id: playlistId },
          {
            uris: selectedTracksUris,
          }
        );
      })
      .then(() => {
        setSelectedTracks([]);
        // eslint-disable-next-line no-alert
        alert('success');
      });

  return {
    selectedTracks,
    isTrackSelected,
    handleTrackSelect,
    createPlaylist,
  };
};

export { usePlaylist };
export default usePlaylist;
