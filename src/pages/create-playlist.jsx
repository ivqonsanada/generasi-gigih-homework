import TrackList from 'components/tracklist';
import PropTypes from 'prop-types';

const CreatePlaylistPage = ({ trackList, user }) => (
  <div>
    <h1>Select tracks</h1>
    <TrackList data={trackList} user={user} />
  </div>
);

CreatePlaylistPage.propTypes = {
  trackList: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
};

export default CreatePlaylistPage;
