import PropTypes from 'prop-types';

const Card = ({ data, handleSelect, isSelected }) => {
  const { album } = data;
  return (
    <div>
      <img src={album.images[0].url} alt={`${album.name}`} width="100%" />
      <h1>{album.name}</h1>
      <h2>{album.artists[0].name}</h2>
      <button type="button" onClick={() => handleSelect(data)}>
        {isSelected ? 'Deselect' : 'Select'}
      </button>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.object.isRequired,
  handleSelect: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export default Card;
