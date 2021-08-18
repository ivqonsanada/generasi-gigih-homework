import PropTypes from 'prop-types';
import styles from './Card.module.css';

const Card = ({ data, handleSelect, isSelected }) => {
  const { album } = data;
  return (
    <div className={styles.container}>
      <img src={album.images[0].url} alt={`${album.name}`} width="100%" />
      <div className={styles.infosContainer}>
        <p className={styles.albumName}>{album.name}</p>
        <p className={styles.albumArtistName}>{album.artists[0].name}</p>
        <button className={styles.button} type="button" onClick={() => handleSelect(data)}>
          {isSelected ? 'Deselect' : 'Select'}
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.object.isRequired,
  handleSelect: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export default Card;
