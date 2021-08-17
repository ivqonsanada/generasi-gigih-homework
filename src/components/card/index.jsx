
const Card = ({ data, handleSelect, isSelected}) => {
  const { album } = data;
  return (
    <div style={{ margin: "1em" }}>
      <img src={album.images[0].url} alt={album.name + ""} />
      <h1>{album.name}</h1>
      <h2>{album.artists[0].name}</h2>
      <button onClick={() => handleSelect(data)}>{ isSelected ? 'Deselect' : 'Select' }</button>
    </div>
  );
};

export default Card;