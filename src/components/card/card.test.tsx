import { render, screen } from "@testing-library/react";
import Card from "components/card";

const track = {
  album: {
    artists: [
      {
        name: 'Tangan Manusiap',
      },
    ],
    images: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab67616d0000b2737daaf5e47f5e785e3eb95b23',
        width: 640,
      },
      {
        height: 300,
        url: 'https://i.scdn.co/image/ab67616d00001e027daaf5e47f5e785e3eb95b23',
        width: 300,
      },
      {
        height: 64,
        url: 'https://i.scdn.co/image/ab67616d000048517daaf5e47f5e785e3eb95b23',
        width: 64,
      },
    ],
    name: 'Bumi Hancur, Kau Juga',
  },
  uri: 'spotify:track:2s0t2naULr7BLrLGjoKu98',
};

test("card component rendered properly", async () => {
  render(
    <Card
      data={track}
      key={track.uri}
      handleSelect={(uri) => {
        console.log(uri);
      }}
      isSelected={true}
    />
  );

  const albumName = screen.getByTestId("album-name");
  const selectTrackButton = screen.getByText(/Select/i);
  expect(albumName).toBeVisible();
  expect(albumName).toHaveTextContent(track.album.name);
  expect(selectTrackButton).toBeVisible();
});
