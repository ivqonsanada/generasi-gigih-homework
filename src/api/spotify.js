import axios from "axios";
import "./axios";

const SPOTIFY_ENDPOINT = "https://api.spotify.com/v1";

const getProfile = async (accessToken) => {
  return axios.get(`${SPOTIFY_ENDPOINT}/me`, {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  });
};

const getSearchTracks = async (accessToken, options) => {
  const params = new URLSearchParams(options).toString();
  return axios.get(`${SPOTIFY_ENDPOINT}/search?${params}`, {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  });
};

export {
  getProfile,
  getSearchTracks,
};