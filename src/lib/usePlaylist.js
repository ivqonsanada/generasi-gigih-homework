import { useEffect, useState } from "react";

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

  return {
    selectedTracks,
    isTrackSelected,
    handleTrackSelect,
  };
};

export { usePlaylist };
export default usePlaylist;