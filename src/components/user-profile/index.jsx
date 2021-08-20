import { HStack, Image, Text, useMediaQuery } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const { data: user } = useSelector((state) => state.user);
  const userAvatar = user && user.images && user.images[0].url;
  const [isDesktop] = useMediaQuery('(min-width: 1280px)');

  return (
    <HStack>
      <Image
        borderRadius="full"
        boxSize="40px"
        src={userAvatar}
        alt={`${user.display_name}'s avatar`}
      />
      {isDesktop ? <Text fontWeight="bold">{user.display_name}</Text> : ''}
    </HStack>
  );
};

export default UserProfile;
