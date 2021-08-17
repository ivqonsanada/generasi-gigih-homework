import { loginAuthSpotify } from "api/auth"
import { useState } from "react";

const Header = ({ auth, handleSearch }) => {
  const [query, setQuery] = useState("")
  const isAuthenticated = auth?.accessToken;

  const onSubmit = (e) => {
    e.preventDefault();
    handleSearch(query)
  }
  return (
    <div>
      {isAuthenticated ? (
        <form onSubmit={onSubmit}>
          <input
            name="song"
            placeholder="Input song name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="submit"
            aria-label="search song"
          >
            Search
          </button>
        </form>
      ) : (
        <button
          onClick={() => loginAuthSpotify()}
          style={{ marginLeft: "auto" }}
        >
          Login with Spotify
        </button>
      )}
    </div>
  );
};

export default Header;