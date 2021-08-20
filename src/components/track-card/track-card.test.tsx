import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TrackCard from 'components/track-card';

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };

const track = {
  album: {
    images: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab67616d0000b2737daaf5e47f5e785e3eb95b23',
        width: 640
      },
      {
        height: 300,
        url: 'https://i.scdn.co/image/ab67616d00001e027daaf5e47f5e785e3eb95b23',
        width: 300
      },
      {
        height: 64,
        url: 'https://i.scdn.co/image/ab67616d000048517daaf5e47f5e785e3eb95b23',
        width: 64
      }
    ],
    name: 'Bumi Hancur, Kau Juga'
  },
  artists: [
    {
      name: 'Tangan Manusiap'
    }
  ],
  name: 'Bumi Hancur, Kau Juga',
  uri: 'spotify:track:2s0t2naULr7BLrLGjoKu98'
};

test('card component rendered properly', async () => {
  render(
    <TrackCard
      data={track}
      key={track.uri}
      handleSelect={(track) => {
        console.log(track.uri);
      }}
      isSelected
    />
  );

  const trackName = screen.getByTestId('track-name');
  const selectTrackButton = screen.getByText(/Select/i);
  expect(trackName).toBeVisible();
  expect(trackName).toHaveTextContent(track.album.name);
  expect(selectTrackButton).toBeVisible();

  const consoleSpy = jest.spyOn(console, "log");
  userEvent.click(selectTrackButton);
  expect(consoleSpy).toHaveBeenCalledWith(track.uri);
});
