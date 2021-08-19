import styles from './Card.module.css';

interface CardProps {
  data: Track;
  handleSelect: (track: Track) => void;
  isSelected: boolean;
}

const Card = ({ data, handleSelect, isSelected }: CardProps) => {
  const { album } = data;
  return (
    <div className={styles.container}>
      <img src={album.images[0].url} alt={album.name} width="100%" />
      <div className={styles.infosContainer}>
        <p className={styles.albumName} data-testid="album-name">
          {album.name}
        </p>
        <p className={styles.albumArtistName} data-testid="album-artist-name">
          {album.artists[0].name}
        </p>
        <button className={styles.button} type="button" onClick={() => handleSelect(data)}>
          {isSelected ? 'Deselect' : 'Select'}
        </button>
      </div>
    </div>
  );
};

export default Card;
