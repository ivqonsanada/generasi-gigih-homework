import TrackCard from 'components/track-card';
import { usePlaylist } from 'lib/usePlaylist';
import styles from './TrackList.module.css';

interface TrackListProps {
  data: Track[];
}

const TrackList = ({ data }: TrackListProps) => {
  const { handleTrackSelect } = usePlaylist();

  return (
    <div className={styles.container}>
      {data.map((track: Track) => (
        <TrackCard
          data={track}
          key={track.uri}
          handleSelect={handleTrackSelect}
        />
      ))}
    </div>
  );
};

export default TrackList;
