// import axios from "axios";

// const API = axios.create({
//   baseURL: "https://api.example.com", // replace with your real API
// });

// // You can also set Authorization token here if needed
// // API.defaults.headers.common['Authorization'] = 'Bearer your-token';

// export default API;
import axios from "axios";
import { getSpotifyAccessToken } from "../utils/spotifyAuth";

export const fetchSongs = async () => {
  const accessToken = await getSpotifyAccessToken();

  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  const response = await axios.get(
    "https://api.spotify.com/v1/playlists/37i9dQZF1DXcBWIGoYBM5M", // Example Playlist ID
    { headers }
  );

  const items = response.data.tracks.items;

  const songs = items.map((item) => ({
    img: item.track.album.images[0].url,
    title: item.track.name,
    audio: item.track.preview_url,   // 30 seconds preview audio
  }));

  console.log(songs);
  return songs;
};

