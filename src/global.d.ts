interface Track {
  album: {
    images: {
      height: number;
      url: string;
      width: number;
    }[];
    name: string;
  };
  artists: {
    name: string;
  }[];
  name: string;
  uri: string;
}

interface User {
  id: string;
}

interface PlaylistOption {
  name: string;
  description: string;
  public: boolean;
  collaborative: boolean;
}
