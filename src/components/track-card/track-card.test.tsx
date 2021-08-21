import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TrackCard from 'components/track-card';
import { Provider } from 'react-redux';
import { store } from 'store';

global.matchMedia = global.matchMedia
  || function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn()
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

test('track card component rendered properly', async () => {
  const handleSelect = jest.fn();
  render(
    <Provider store={store}>
      <TrackCard
        data={track}
        key={track.uri}
        handleSelect={handleSelect}
      />
    </Provider>
  );

  const trackName = screen.getByTestId('track-name');
  const selectTrackButton = screen.getByText(/Select/i);
  expect(trackName).toBeVisible();
  expect(trackName).toHaveTextContent(track.name);
  expect(selectTrackButton).toBeVisible();

  userEvent.click(selectTrackButton);
  expect(handleSelect).toHaveBeenCalledWith(track);
});
