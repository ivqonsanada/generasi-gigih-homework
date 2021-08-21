import { Button, Image, Spacer, Text, VStack } from '@chakra-ui/react';
import usePlaylist from 'lib/usePlaylist';

interface TrackCardProps {
  data: Track;
  handleSelect: (track: Track) => void;
}

interface Artist {
  name: string;
}

const TrackCard = ({ data, handleSelect }: TrackCardProps) => {
  const { album, name } = data;
  const artists = data.artists.map((artist: Artist) => artist.name).join(', ');
  const albumPhoto = album.images.find((image) => image.height === 300);
  const { isTrackSelected } = usePlaylist();
  const isSelected = isTrackSelected(data);
  return (
    <VStack border="#2D3748 1px solid" borderRadius="md" p="4" _hover={{ bg: '#2D3748' }}>
      <VStack>
        <Image src={albumPhoto?.url} alt={album.name} width={albumPhoto?.width} borderRadius="md" />
        <Text fontSize="md" fontWeight="bold" color="gray.300" data-testid="track-name" noOfLines={2}>
          {name}
        </Text>
      </VStack>
      <Spacer />
      <Text fontSize="sm" color="gray.400">
        {artists}
      </Text>
      <Button colorScheme={isSelected ? 'red' : 'green'} type="button" w="full" onClick={() => handleSelect(data)}>
        {isSelected ? 'Deselect' : 'Select'}
      </Button>
    </VStack>
  );
};

export default TrackCard;
