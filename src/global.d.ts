interface Track {
  album: {
    artists: {
      name: string;
    }[];
    images: {
      height: number;
      url: string;
      width: number;
    }[];
    name: string;
  };
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