import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { store } from 'store';
import { logout } from 'store/user';

const useAxios = () => {
  const toast = useToast();
  const dispatch = useDispatch();

  const axiosRequest = () => {
    axios.defaults.headers.common['Content-Type'] = 'application/json';

    axios.interceptors.request.use((request) => {
      const token = store.getState().user.accessToken;
      if (token) {
        request.headers.common.Authorization = `Bearer ${token}`;
      }
      return request;
    });
  };

  const axiosResponse = () => {
    axios.interceptors.response.use(
      (response) => response,
      ({ response }) => {
        if (response?.status === 401) {
          dispatch(logout());
          toast(
            {
              title: response.data.error.message,
              description: 'Please login again.',
              status: 'error',
              duration: 9000,
              isClosable: true
            },
            500
          );
        }
        return response;
      }
    );
  };

  useEffect(() => {
    axiosRequest();
    axiosResponse();
  }, []);
};

export { useAxios };
export default useAxios;
