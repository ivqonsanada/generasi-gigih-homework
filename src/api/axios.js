import axios from "axios"

axios.interceptors.response.use(response => {
  return response;
}, ({ response }) => {
  if (response.status === 401) {
    alert(response.data.error.message);
    window.location = process.env.REACT_APP_BASE_URL;
  }
  return response;
});