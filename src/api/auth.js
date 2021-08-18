const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const REDIRECT_URL_AFTER_LOGIN = process.env.REACT_APP_BASE_URL;

const loginAuthSpotify = () => {
  const spotifyAuthUrl = 'https://accounts.spotify.com/authorize';
  const scope = ['playlist-modify-private', 'user-read-email'];
  window.location = `${spotifyAuthUrl}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${scope}&response_type=token&show_dialog=true`;
};

const getAccessTokenFromURL = () => {
  const urlSearchParams = new URLSearchParams(window.location.hash);
  const accessToken = urlSearchParams.get('#access_token');
  return { accessToken };
};

export { loginAuthSpotify, getAccessTokenFromURL };
