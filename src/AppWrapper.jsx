import { ChakraProvider } from '@chakra-ui/react';
import App from 'App';
import { Provider } from 'react-redux';
import { store } from 'store';

const AppWrapper = () => (
  <ChakraProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ChakraProvider>
);

export default AppWrapper;
