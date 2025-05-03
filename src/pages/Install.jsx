
import React from "react";
// Custom styles for this component
import { FaSpotify } from "react-icons/fa";

const InstallApp = () => {
  return (
    <div className="install-app d-flex align-items-center justify-content-center min-vh-100 text-white install">
      <div className="card p-5 shadow-lg install-card text-center">
        <FaSpotify size={60} className="mb-4 text-success glowing-icon" />
        <h2 className="fw-bold mb-3">Get the Full Experience</h2>
        <p className="text-dark mb-4">
          Install the app and take your music anywhere. Seamless playback, premium playlists, and total control — all in one place.
        </p>
        <button className="btn btn-success rounded-pill fw-semibold px-4 py-2 install-btn">
          Install Spotify Clone
        </button>
        <p className="mt-4 text-muted small">Available on Desktop & Mobile</p>
      </div>
    </div>
  );
};

export default InstallApp;
