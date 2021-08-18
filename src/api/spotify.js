import axios from 'axios';
import 'api/axios';

const SPOTIFY_ENDPOINT = 'https://api.spotify.com/v1';

const getProfile = async () => axios.get(`${SPOTIFY_ENDPOINT}/me`);

const getSearchTracks = async (options) => {
  const params = new URLSearchParams(options).toString();
  return axios.get(`${SPOTIFY_ENDPOINT}/search?${params}`);
};

const createNewPlaylist = async (userId, formPayload) =>
  axios.post(`${SPOTIFY_ENDPOINT}/users/${userId}/playlists`, formPayload);

const storeTracksToNewPlaylist = async (newPlaylistId, payload) =>
  axios.post(`${SPOTIFY_ENDPOINT}/playlists/${newPlaylistId}/tracks`, payload);

export { getProfile, getSearchTracks, createNewPlaylist, storeTracksToNewPlaylist };
