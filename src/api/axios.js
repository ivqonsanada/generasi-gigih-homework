import axios from "axios"
import { store } from "store"

axios.defaults.headers.common['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
  const token = store.getState().user.accessToken;
  if (token) {
    request.headers.common.Authorization = `Bearer ${token}`;
  }
  return request
});

axios.interceptors.response.use(response => {
  return response;
}, ({ response }) => {
  if (response.status === 401) {
    alert(response.data.error.message);
    window.location = process.env.REACT_APP_BASE_URL;
  }
  return response;
});