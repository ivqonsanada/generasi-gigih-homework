import TrackList from "components/tracklist";

const CreatePlaylistPage = ({ trackList, user }) => {
  return (
      <div>
        <h1>Select tracks</h1>
        <TrackList data={trackList} user={user} />
      </div>
  );
};

export default CreatePlaylistPage;
