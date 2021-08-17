import { useEffect, useState } from "react";
import { createNewPlaylist as createNewPlaylistAPI, storeTracksToNewPlaylist } from "api/spotify";

const usePlaylist = () => {
  const [selectedTracks, setSelectedTracks] = useState([]);

  useEffect(() => {
    localStorage.setItem('selectedTracks', JSON.stringify(selectedTracks));
  }, [selectedTracks]);

  const addTrack = (track) => {
    setSelectedTracks([...selectedTracks, track]);
  };

  const removeTrack = (track) => {
    let tempTracks = [...selectedTracks];
    tempTracks = tempTracks.filter((e) => e.uri !== track.uri);
    setSelectedTracks(tempTracks);
  };

  const isTrackSelected = (track) => {
    return selectedTracks.filter((e) => e.uri === track.uri).length > 0;
  };

  const handleTrackSelect = (track) => {
    if (isTrackSelected(track)) {
      removeTrack(track);
    } else {
      addTrack(track);
    }
  };

  const createPlaylist = async ({ userId, formPayload }) => {
    return createNewPlaylistAPI(userId, formPayload)
      .then(({ data }) => {
        const { id: playlist_id } = data;
        const selectedTracksUris = selectedTracks.map(e => e.uri);
        return storeTracksToNewPlaylist(playlist_id, { uris: selectedTracksUris });
      }).then(() => {
        setSelectedTracks([]);
      });
  };

  return {
    selectedTracks,
    isTrackSelected,
    handleTrackSelect,
    createPlaylist
  };
};

export { usePlaylist };
export default usePlaylist;