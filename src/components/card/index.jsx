const Card = ({ data }) => {
  return (
    <>
      <img src={data.album.images[0].url} alt={data.album.name + ""} />
      <h1>{data.album.name}</h1>
      <h2>{data.album.artists[0].name}</h2>
      <button>Select</button>
    </>
  );
};

export default Card;