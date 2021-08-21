import '@testing-library/jest-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const params = new URLSearchParams({
  q: 'tangan manusiap',
  type: 'track',
  limit: '1'
}).toString();

const server = setupServer(
  rest.post(`https://api.spotify.com/v1/search?${params}`, (req, res, ctx) =>
    // Respond with a mocked user token that gets persisted
    // in the `sessionStorage` by the `Login` component.
    res(ctx.json({ token: 'mocked_user_token' })))
);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());
