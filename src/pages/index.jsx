import { Button, Center, Heading, Text, VStack } from '@chakra-ui/react';
import { loginAuthSpotify } from 'api/auth';
import DefaultLayout from 'layout/Default';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const IndexPage = () => {
  const history = useHistory();
  const { accessToken } = useSelector((state) => state.user);

  useEffect(() => {
    const isAuthenticated = !!accessToken;
    if (isAuthenticated) history.push('/create-playlist');
  }, [accessToken]);

  return (
    <DefaultLayout>
      <Center h="calc(100vh - 100px - 100px)" px="7">
        <VStack direction="column">
          <Heading>Lets music make your day</Heading>
          <Text size="sm">You can search any track you wanted to. Add it to your playlist. And enjoy it, of course.</Text>
          <Button colorScheme="green" onClick={() => loginAuthSpotify()}>Lets Go</Button>
        </VStack>
      </Center>
    </DefaultLayout>
  );
};

export default IndexPage;
