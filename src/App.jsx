
import Header from './Components/Header';
import './App.css';
import Sidebar from './Components/Sidebar';
import Main from './Components/Main';
import BottomPlayer from './Components/BottomPlayer';
import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const location = useLocation();
  const hideLayoutRoutes = ['/login', '/signup','/install','/premium','/support','/about','/search']; // routes where sidebar/header should be hidden
  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  const [currentSong, setCurrentSong] = useState(null);
  const [playlists, setPlaylists] = useState([{ name: "Liked Songs", songs: [] }]);
  const [playlistSongs, setPlaylistSongs] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState("Liked Songs");
  const [query, setQuery] = useState("");

  return (
    <>
      {!shouldHideLayout && <Header  query={query} setQuery={setQuery} />}
      
      <div className="app-layout d-flex flex-row " style={{ height: "100vh" }}>
        <div   className=" text-white d-none d-md-block m-1"
    style={{ width: "240px", minWidth: "240px" }} >
        {!shouldHideLayout && (
          <Sidebar
            playlists={playlists}
            selectedPlaylist={selectedPlaylist}
            setSelectedPlaylist={setSelectedPlaylist}
            setPlaylists={setPlaylists}
            playlistSongs={playlistSongs}
          />
        )}
        </div>
<div className=" flex-grow-1 m-5 d-flex justify-content-end" >
        {!shouldHideLayout && (
          <Main
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
            playlists={playlists}
            setPlaylists={setPlaylists}
            selectedPlaylist={selectedPlaylist}
            playlistSongs={playlistSongs}
            setPlaylistSongs={setPlaylistSongs}
            qu={query}
          />
        )}
        </div>
         {shouldHideLayout && (
          <div className="outlet-area">
          <Outlet />
        </div>
        )}

 
        
      </div>

      {currentSong && !shouldHideLayout && <BottomPlayer currentSong={currentSong} />}
    </>
  );
}

export default App;

