import axios from 'axios';
import { RootStateOrAny, useSelector } from 'react-redux';

interface SearchOption {
  q: string;
  type: string;
  limit: number;
}

interface Playlist {
  id: string;
}

interface PlaylistTrack {
  uris: string[];
}

const useSpotify = () => {
  const SPOTIFY_ENDPOINT = 'https://api.spotify.com/v1';

  const { next: nextUrl } = useSelector((state: RootStateOrAny) => state.track);
  const getProfile = async () => axios.get(`${SPOTIFY_ENDPOINT}/me`);

  const getSearchTracks = async ({ q, type, limit }: SearchOption) => {
    const params = new URLSearchParams({
      q,
      type,
      limit: limit.toString()
    }).toString();
    return axios.get(`${SPOTIFY_ENDPOINT}/search?${params}`);
  };

  const getNextSearchTracks = async () => axios.get(nextUrl);

  const createNewPlaylist = async ({ id }: User, formPayload: PlaylistOption) =>
    axios.post(`${SPOTIFY_ENDPOINT}/users/${id}/playlists`, formPayload);

  const storeTracksToNewPlaylist = async ({ id }: Playlist, payload: PlaylistTrack) =>
    axios.post(`${SPOTIFY_ENDPOINT}/playlists/${id}/tracks`, payload);

  return {
    getProfile,
    getSearchTracks,
    getNextSearchTracks,
    createNewPlaylist,
    storeTracksToNewPlaylist
  };
};

export { useSpotify };
export default useSpotify;
