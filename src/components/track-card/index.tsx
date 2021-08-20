import { Box, Button, Image, Text, VStack } from '@chakra-ui/react';

interface TrackCardProps {
  data: Track;
  handleSelect: (track: Track) => void;
  isSelected: boolean;
}

interface Artist {
  name: string;
}

const TrackCard = ({ data, handleSelect, isSelected }: TrackCardProps) => {
  const { album, name } = data;
  const artists = data.artists.map((artist: Artist) => artist.name).join(', ');
  return (
    <Box border="gray 1px solid" borderRadius="md" p="4">
      <VStack>
        <Image src={album.images[0].url} alt={album.name} width={album.images[0].width} borderRadius="md" />
        <VStack>
          <Text fontSize="md" fontWeight="bold" data-testid="track-name">
            {name}
          </Text>
          <Text fontSize="sm">
            {artists}
          </Text>
          <Button colorScheme={isSelected ? 'red' : 'green'} type="button" onClick={() => handleSelect(data)}>
            {isSelected ? 'Deselect' : 'Select'}
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
};

export default TrackCard;
