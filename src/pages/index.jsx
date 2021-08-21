import { Button, Center, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { loginAuthSpotify } from 'api/auth';
import DefaultLayout from 'layout/default-layout';
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
        <VStack direction="column" spacing="6" alignItems={{ base: 'flex-start' }}>
          <Heading fontSize={{ base: '3xl', lg: '5xl' }}>Let the music go brr</Heading>
          <Stack direction={{ base: 'column' }} alignItems={{ base: 'flex-start' }} spacing="6">
            <VStack alignItems="flex-start">
              <Text fontSize="md">You can search any track you want.</Text>
              <Text fontSize="md">Add it to your playlist. </Text>
              <Text fontSize="md">And, of course, enjoy the ride.</Text>
            </VStack>
            <Button colorScheme="green" size="lg" onClick={() => loginAuthSpotify()}>
              <HStack>
                <Text>Lets Go</Text>
                <Icon icon="akar-icons:arrow-right" inline />
              </HStack>
            </Button>
          </Stack>
        </VStack>
      </Center>
    </DefaultLayout>
  );
};

export default IndexPage;
