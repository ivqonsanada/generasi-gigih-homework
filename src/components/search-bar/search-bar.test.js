import '@testing-library/jest-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const params = new URLSearchParams({
  q: 'tangan manusiap',
  type: 'track',
  limit: '1'
}).toString();

const response = {
  tracks: {
    href: 'https://api.spotify.com/v1/search?query=tulus&type=track&offset=1&limit=1',
    items: [{
      album: {
        album_type: 'single',
        artists: [{
          external_urls: {
            spotify: 'https://open.spotify.com/artist/2iDVt6mFbtbDEZG5ax0dTi'
          },
          href: 'https://api.spotify.com/v1/artists/2iDVt6mFbtbDEZG5ax0dTi',
          id: '2iDVt6mFbtbDEZG5ax0dTi',
          name: 'Tulus',
          type: 'artist',
          uri: 'spotify:artist:2iDVt6mFbtbDEZG5ax0dTi'
        }],
        available_markets: ['AD', 'AE', 'AG', 'AL', 'AM', 'AO', 'AR', 'AT', 'AU', 'AZ', 'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BN', 'BO', 'BR', 'BS', 'BT', 'BW', 'BY', 'BZ', 'CA', 'CH', 'CI', 'CL', 'CM', 'CO', 'CR', 'CV', 'CW', 'CY', 'CZ', 'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'ES', 'FI', 'FJ', 'FM', 'FR', 'GA', 'GB', 'GD', 'GE', 'GH', 'GM', 'GN', 'GQ', 'GR', 'GT', 'GW', 'GY', 'HK', 'HN', 'HR', 'HT', 'HU', 'ID', 'IE', 'IL', 'IN', 'IS', 'IT', 'JM', 'JO', 'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KR', 'KW', 'KZ', 'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV', 'MA', 'MC', 'MD', 'ME', 'MG', 'MH', 'MK', 'ML', 'MN', 'MO', 'MR', 'MT', 'MU', 'MV', 'MW', 'MX', 'MY', 'MZ', 'NA', 'NE', 'NG', 'NI', 'NL', 'NO', 'NP', 'NR', 'NZ', 'OM', 'PA', 'PE', 'PG', 'PH', 'PK', 'PL', 'PS', 'PT', 'PW', 'PY', 'QA', 'RO', 'RS', 'RU', 'RW', 'SA', 'SB', 'SC', 'SE', 'SG', 'SI', 'SK', 'SL', 'SM', 'SN', 'SR', 'ST', 'SV', 'SZ', 'TD', 'TG', 'TH', 'TL', 'TN', 'TO', 'TR', 'TT', 'TV', 'TW', 'TZ', 'UA', 'UG', 'US', 'UY', 'UZ', 'VC', 'VN', 'VU', 'WS', 'XK', 'ZA', 'ZM', 'ZW'],
        external_urls: {
          spotify: 'https://open.spotify.com/album/5dVK7Kth7ZGAxyZmHs6Nq9'
        },
        href: 'https://api.spotify.com/v1/albums/5dVK7Kth7ZGAxyZmHs6Nq9',
        id: '5dVK7Kth7ZGAxyZmHs6Nq9',
        images: [{
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b273e5402f052062d93d0354424b',
          width: 640
        }, {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e02e5402f052062d93d0354424b',
          width: 300
        }, {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d00004851e5402f052062d93d0354424b',
          width: 64
        }],
        name: 'Ingkar',
        release_date: '2021-08-13',
        release_date_precision: 'day',
        total_tracks: 1,
        type: 'album',
        uri: 'spotify:album:5dVK7Kth7ZGAxyZmHs6Nq9'
      },
      artists: [{
        external_urls: {
          spotify: 'https://open.spotify.com/artist/2iDVt6mFbtbDEZG5ax0dTi'
        },
        href: 'https://api.spotify.com/v1/artists/2iDVt6mFbtbDEZG5ax0dTi',
        id: '2iDVt6mFbtbDEZG5ax0dTi',
        name: 'Tulus',
        type: 'artist',
        uri: 'spotify:artist:2iDVt6mFbtbDEZG5ax0dTi'
      }],
      available_markets: ['AD', 'AE', 'AG', 'AL', 'AM', 'AO', 'AR', 'AT', 'AU', 'AZ', 'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BN', 'BO', 'BR', 'BS', 'BT', 'BW', 'BY', 'BZ', 'CA', 'CH', 'CI', 'CL', 'CM', 'CO', 'CR', 'CV', 'CW', 'CY', 'CZ', 'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'ES', 'FI', 'FJ', 'FM', 'FR', 'GA', 'GB', 'GD', 'GE', 'GH', 'GM', 'GN', 'GQ', 'GR', 'GT', 'GW', 'GY', 'HK', 'HN', 'HR', 'HT', 'HU', 'ID', 'IE', 'IL', 'IN', 'IS', 'IT', 'JM', 'JO', 'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KR', 'KW', 'KZ', 'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV', 'MA', 'MC', 'MD', 'ME', 'MG', 'MH', 'MK', 'ML', 'MN', 'MO', 'MR', 'MT', 'MU', 'MV', 'MW', 'MX', 'MY', 'MZ', 'NA', 'NE', 'NG', 'NI', 'NL', 'NO', 'NP', 'NR', 'NZ', 'OM', 'PA', 'PE', 'PG', 'PH', 'PK', 'PL', 'PS', 'PT', 'PW', 'PY', 'QA', 'RO', 'RS', 'RU', 'RW', 'SA', 'SB', 'SC', 'SE', 'SG', 'SI', 'SK', 'SL', 'SM', 'SN', 'SR', 'ST', 'SV', 'SZ', 'TD', 'TG', 'TH', 'TL', 'TN', 'TO', 'TR', 'TT', 'TV', 'TW', 'TZ', 'UA', 'UG', 'US', 'UY', 'UZ', 'VC', 'VN', 'VU', 'WS', 'XK', 'ZA', 'ZM', 'ZW'],
      disc_number: 1,
      duration_ms: 254482,
      explicit: false,
      external_ids: {
        isrc: 'FRX282190147'
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/15h7bmfCBeJtfuaqAi14dU'
      },
      href: 'https://api.spotify.com/v1/tracks/15h7bmfCBeJtfuaqAi14dU',
      id: '15h7bmfCBeJtfuaqAi14dU',
      is_local: false,
      name: 'Ingkar',
      popularity: 58,
      preview_url: 'https://p.scdn.co/mp3-preview/752090bb36e679a68e4a443ac969ff2dc95b9c14?cid=518e0b4729894a748a1585f98bb9865b',
      track_number: 1,
      type: 'track',
      uri: 'spotify:track:15h7bmfCBeJtfuaqAi14dU'
    }],
    limit: 1,
    next: 'https://api.spotify.com/v1/search?query=tulus&type=track&offset=2&limit=1',
    offset: 1,
    previous: 'https://api.spotify.com/v1/search?query=tulus&type=track&offset=0&limit=1',
    total: 512
  }
};

const server = setupServer(
  rest.post(`https://api.spotify.com/v1/search?${params}`, (req, res, ctx) =>
    // Respond with a mocked user token that gets persisted
    // in the `sessionStorage` by the `Login` component.
    res(ctx.json(response)))
);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());
