import axios from "axios";

export const getSpotifyAccessToken = async () => {
  const clientId = "dda33526d43d44efacca23ba0891d437";    // Replace
  const clientSecret = "e886f90d55f64f6da807b5a15e21262f";  // Replace

  const tokenUrl = "https://accounts.spotify.com/api/token";

  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
  };

  const data = new URLSearchParams();
  data.append("grant_type", "client_credentials");

  const response = await axios.post(tokenUrl, data, { headers });
  return response.data.access_token;   // 🔥 Your Access Token
};
