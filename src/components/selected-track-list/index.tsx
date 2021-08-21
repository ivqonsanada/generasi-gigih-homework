import { Heading, VStack } from '@chakra-ui/react';
import SelectedTrackCard from 'components/selected-track-card';

interface SelectedTrackListProps {
  data: Track[];
}

const SelectedTrackList = ({ data: selectedTracks }: SelectedTrackListProps) => (
  <VStack w="full">
    {selectedTracks.length > 0 ? (
      <Heading as="h3" size="sm">
        Your hand-picked tracks
      </Heading>
    ) : (
      ''
    )}
    <VStack w="full">
      {selectedTracks.map((track: Track) => (
        <SelectedTrackCard track={track} key={`selected-${track.uri}`} />
      ))}
    </VStack>
  </VStack>
);

export default SelectedTrackList;
