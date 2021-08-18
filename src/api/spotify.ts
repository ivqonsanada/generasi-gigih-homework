import axios from 'axios';
import 'api/axios';

const SPOTIFY_ENDPOINT = 'https://api.spotify.com/v1';

interface User {
  id: string;
}

interface SearchOption {
  q: string;
  type: string;
  limit: number;
}

interface Playlist {
  id: string;
}

interface PlaylistOption {
  name: string;
  description: string;
  public: boolean;
  collaborative: boolean;
}

interface PlaylistTrack {
  uris: string[];
}

const getProfile = async () => axios.get(`${SPOTIFY_ENDPOINT}/me`);

const getSearchTracks = async ({ q, type, limit }: SearchOption) => {
  const params = new URLSearchParams({ q, type, limit: limit.toString() }).toString();
  return axios.get(`${SPOTIFY_ENDPOINT}/search?${params}`);
};

const createNewPlaylist = async ({ id }: User, formPayload: PlaylistOption) =>
  axios.post(`${SPOTIFY_ENDPOINT}/users/${id}/playlists`, formPayload);

const storeTracksToNewPlaylist = async ({ id }: Playlist, payload: PlaylistTrack) =>
  axios.post(`${SPOTIFY_ENDPOINT}/playlists/${id}/tracks`, payload);

export { getProfile, getSearchTracks, createNewPlaylist, storeTracksToNewPlaylist };
