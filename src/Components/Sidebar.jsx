
import React, { useState } from 'react';
import { IoMdAdd } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { mockPlaylists } from "../data/mockdata";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { MdCancel } from "react-icons/md"; // Assuming you have mock data
import { Card, Button, Form, FloatingLabel } from 'react-bootstrap';

const Sidebar = ({ playlists, setPlaylists, selectedPlaylist, setSelectedPlaylist, playlistSongs }) => {

  const [playlistCounter, setPlaylistCounter] = useState(3);
  const [isCreating, setIsCreating] = useState(false);
  const [newPlaylistName, setNewPlaylistName] = useState("");

  const [dropdown, setDropdown] = useState(false);


  const handleCreatePlaylist = () => {
    setIsCreating(true);  // Show the input field to create a new playlist
  };

  const handleNameChange = (e) => {
    setNewPlaylistName(e.target.value);
  };

  const handleSavePlaylist = () => {
    if (newPlaylistName) {
      const newPlaylist = {
        id: playlistCounter,
        name: newPlaylistName,
        songs: [...playlistSongs],
      };
      setPlaylists((prevPlaylists) => [...prevPlaylists, newPlaylist]);
      setPlaylistCounter(playlistCounter + 1);
      setIsCreating(false);  // Hide input after saving
      setNewPlaylistName("");  // Clear the input field
    } else {
      alert("Please enter a valid playlist name.");
    }
  };

  const handleCancelCreation = () => {
    setIsCreating(false);
    setNewPlaylistName("");
  };
  const handleSelectedPlaylist = (playlistName) => {
    setSelectedPlaylist(playlistName)
  };
  const [openDropdown, setOpenDropdown] = useState(""); // Stores the open playlist name

  const toggleDropdown = (playlistName) => {
    if (openDropdown === playlistName) {
      setOpenDropdown(""); // collapse
    } else {
      setOpenDropdown(playlistName); // expand
      setSelectedPlaylist(playlistName); // also set selected
    }
  };
  const handledropdown = (playlistName) => {
    if (openDropdown === playlistName) {
      setOpenDropdown(null); // close it
    } else {
      setOpenDropdown(playlistName); // open this one
    }
  };


  return (
    <div className="d-flex sidebar">
      <div
        className="d-flex flex-column p-3 text-white"
        style={{
          width: '280px',
          height: '100vh',
          backgroundColor: '#000',
        }}
      >
        <a href="/" className="d-flex align-items-center justify-content-between mb-4 text-white text-decoration-none">
          <span className="fs-5 fw-bold">Your Library</span>
          <IoMdAdd size={22} />
        </a>

        <hr className="border-secondary" />

        {/* Always show the 'Create Playlist' button */}
        <div
          className="card mb-3"
          style={{
            backgroundColor: '#121212',
            color: 'white',
            border: 'none',
          }}
        >
          {!isCreating ? (
            <div>
              <div className="card-body">
                <h6 className="card-title fw-bold">Create playlist</h6>
                <p className="card-subtitle mb-3 text-white-50">It's easy, we'll help you</p>
                <button type="button" className="btn btn-light btn-sm" onClick={handleCreatePlaylist}>Create playlist</button>

              </div>
             
            </div>
          ) : (
           



            <div className="position-relative" style={{ width: "250px" }}>
            {/* Aura Infinity Effect */}
            <div className="aura-infinity-container">
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i}
                  className="aura-circle"
                  style={{
                    width: `${20 + i * 15}px`,
                    height: `${20 + i * 15}px`,
                    border: `1px solid rgba(29, 185, 84, ${0.2 + i * 0.1})`,
                    animation: `pulse ${3 + i * 0.5}s infinite ${i * 0.2}s`,
                    opacity: 0
                  }}
                />
              ))}
            </div>
          
            {/* Playlist Card */}
            <div className="playlist-card-glass">
              <div className="text-center mb-3">
                <h3 className="text-white fs-5 mb-0">New Playlist</h3>
                <div className="text-success" style={{ fontSize: "10px", letterSpacing: "2px" }}>
                  SPOTIFY CLONE
                </div>
              </div>
          
              <input
                type="text"
                value={newPlaylistName}
                onChange={handleNameChange}
                placeholder="Name your masterpiece"
                className="playlist-input"
              />
          
              <div className="d-flex justify-content-center gap-2 mt-3">
                <button
                  onClick={handleSavePlaylist}
                  className="aura-button save-btn"
                >
                  <span>CREATE</span>
                </button>
                <button
                  onClick={handleCancelCreation}
                  className="aura-button cancel-btn"
                >
                  <span>CANCEL</span>
                </button>
              </div>
            </div>
          </div>



          )}
        </div>

        {/* Display the saved playlists below the create playlist option */}

        <div className="mt-4">
          <h6 className="text-white">Your Playlists</h6>
          <ul className="list-unstyled">
            {playlists.map((playlist) => (
              <li
                key={playlist.name}
                className={`relative cursor-pointer px-3 py-2 rounded-md transition-colors duration-200 font-medium ${selectedPlaylist === playlist.name
                    ? "text-green-400 bg-[#111111] active"
                    : "text-white hover:text-green-400 hover:bg-[#1a1a1a]"
                  }`}
              >
                <div
                  className="flex items-center justify-between"
                  onClick={() => handleSelectedPlaylist(playlist.name)}
                >
                  <span>{playlist.name}</span>

                  {openDropdown === playlist.name ? (
                    <MdCancel
                      size={30}
                      onClick={(e) => {
                        e.stopPropagation();
                        handledropdown(null); // Close dropdown
                      }}
                      className="hover:text-red-500"
                    />
                  ) : (
                    <MdOutlineArrowDropDownCircle
                      size={30}
                      onClick={(e) => {
                        e.stopPropagation();
                        handledropdown(playlist.name); // Open dropdown
                      }}
                      className="hover:text-green-400"
                    />
                  )}
                </div>

                {/* Dropdown songs */}
                {openDropdown === playlist.name && playlist.songs.length > 0 && (
  playlist.songs.map((song) => (
    <li key={song.id} className="hover:text-white truncate">{song.title}</li>
  ))
)}

              </li>
             ))}
              </ul>
        </div>

<br />
        <div className="mt-4" style={{ fontSize: '11px', color: '#b3b3b3', lineHeight: '1.6' }}>
          <div className="d-flex flex-wrap gap-2">
            <a href="#" className="text-decoration-none text-white-50">Legal</a>
            <a href="#" className="text-decoration-none text-white-50">Privacy Center</a>
            <a href="#" className="text-decoration-none text-white-50">Privacy Policy</a>
            <a href="#" className="text-decoration-none text-white-50">Cookies</a>
            <a href="#" className="text-decoration-none text-white-50">About Ads</a>
            <a href="#" className="text-decoration-none text-white-50">Accessibility</a>
          </div>
        </div>
<br />
<br />
        <a href="#">
          <button
            type="button"
            className="btn btn-dark"
            style={{
              borderRadius: '999px',
              padding: '8px 20px',
              fontWeight: '500',
              fontSize: '14px',
            }}
          >
            <TbWorld />
            English
          </button>
        </a>

        <hr className="border-secondary mt-auto" />

        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Account
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li><a className="dropdown-item" href="#">New project...</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
