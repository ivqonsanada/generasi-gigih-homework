import { Flex, HStack, Image, Text, Tooltip } from '@chakra-ui/react';

interface SelectedTrackCardProps {
  track: Track;
}

interface Artist {
  name: string;
}

const SelectedTrackCard = ({ track }: SelectedTrackCardProps) => {
  const { album, name } = track;
  const albumPhoto = album.images.find((image) => image.height === 64);
  const artists = track.artists.map((artist: Artist) => artist.name).join(', ');
  return (
    <HStack w="full" border="#2D3748 1px solid" borderRadius="sm" p="1" _hover={{ bg: '#2D3748' }}>
      <Image
        boxSize="48px"
        borderRadius="sm"
        objectFit="cover"
        src={albumPhoto?.url}
        alt={name}
      />
      <Flex direction="column">
        <Tooltip hasArrow placement="top" label={name} bg="gray.200" color="gray.600">
          <Text noOfLines={1} color="gray.400">{name}</Text>
        </Tooltip>
        <Text noOfLines={1} color="gray.500">{artists}</Text>
      </Flex>
    </HStack>
  );
};

export default SelectedTrackCard;
