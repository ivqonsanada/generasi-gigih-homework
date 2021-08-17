import Card from "components/card";
import usePlaylist from "lib/usePlaylist";

const Playlist = ({ data }) => {
  const { handleTrackSelect, isTrackSelected } = usePlaylist();

  return (
    <div>
      {data.map((track) => (
        <Card data={track} key={track.uri} handleSelect={handleTrackSelect} isSelected={isTrackSelected(track)} />
      ))}
    </div>
  );
};

export default Playlist;