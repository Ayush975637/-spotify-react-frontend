import React, { useState,useEffect  } from "react";
import ReactPlayer from "react-player";

import Footer from './Footer'; 
import { IoMdPlayCircle } from "react-icons/io";
import { FaRegPauseCircle } from "react-icons/fa";
import LoadingSpinner from "./LoadingSpinner";


import { MdPlaylistAddCircle } from "react-icons/md";
import { MdPlaylistRemove } from "react-icons/md";






// Main component
const Main = ({playlistSongs,setPlaylistSongs,qu} ) => {
  const [currentSong, setCurrentSong] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLooping, setIsLooping] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);
  const [query, setQuery] = useState('');
  const [tracks, setTracks] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
   
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);



    return () => clearTimeout(timer);
  }, []);
 
  

  




  const toggleLoop = () => {
    setIsLooping(!isLooping);
  };
 
  const playRandomSong = () => {
    if (tracks.length === 0) return; // prevent error if tracks is empty
    const randomIndex = Math.floor(Math.random() * tracks.length);
    setCurrentSong(tracks[randomIndex]);
  };
  
  
  const toggleShuffle = () => {
    setIsShuffling(!isShuffling);
  };


  

  const handlePlayClick = (song) => {
    const songUrl = song.audio || song.preview_url;
    
    if (currentSong && (currentSong.audio || currentSong.preview_url) === songUrl) {
      setCurrentSong(null);
      setIsPlaying(!isPlaying);
    } else {
      setCurrentSong(song);
      setIsPlaying(true)
    }
  };
  
  
  const handleAddRemoveSong = (son) => {
    const isAlreadyAdded = playlistSongs.find((s) => s.id === son.id);
  
    if (isAlreadyAdded) {
      setPlaylistSongs(playlistSongs.filter((s) => s.id !== son.id));  // remove
    } else {
      setPlaylistSongs([...playlistSongs, son]);  // add
    }

  };
   
   useEffect(() => {
    if (qu) {
      setQuery(qu);
    }
  }, [qu]);

   
  
  useEffect(() => {
    const getTracks = async () => {
      let data = await fetch(
        `https://v1.nocodeapi.com/ayush9756/spotify/UMMPcPLmhZwJGxdd/search?q=${query === "" ? "trending" : query}&type=track`
      );
      let convertData = await data.json();
      console.log(convertData.tracks.items);
      setTracks(convertData.tracks.items);
    };
  
    if (query !== null) getTracks();
  }, [query]);

   if (loading) {
    return <LoadingSpinner />;
  }
  

  return (
    <div className="main-content-container main-content">

{qu && <div className="grid-container">
  {tracks.map((son) => ( 
    <div className="card-item" key={son.id}>
      <div className="img-wrapper">
        <img src={son.album.images[0].url} alt={son.name} className="song-img" />

        {/* Play/Pause Button */}
        <div className="hover-icon play-pause-btn" onClick={() => handlePlayClick(son)}>
          {currentSong && (currentSong.audio || currentSong.preview_url) === (son.audio || son.preview_url) ? (
            <span><FaRegPauseCircle size={"40px"} /></span>
          ) : (
            <span><IoMdPlayCircle size={"40px"} /></span>
          )}
        </div>

        {/* Add/Remove Playlist Button */}
        <div className="hover-icon add-remove-btn" onClick={() => handleAddRemoveSong(son)}>
          {playlistSongs.find((s) => s.id === son.id) ? (
            <span><MdPlaylistRemove size={"40px"} /></span>
          ) : (
            <span><MdPlaylistAddCircle size={"40px"} /></span>
          )}
        </div>
      </div>

      <p className="song-title">{son.name}</p>
    </div>
  ))}
</div>


}


<div>
<h3>Trending Songs</h3>
<div className="grid-container">
  {tracks.map((son) => (
    <div className="card-item" key={son.id}>
      <div className="img-wrapper">
        <img src={son.album.images[0].url} alt={son.name} className="song-img" />

        {/* Play/Pause Button */}
        <div className="hover-icon play-pause-btn" onClick={() => handlePlayClick(son)}>
          {(currentSong && (currentSong.audio || currentSong.preview_url) === (son.audio || son.preview_url) && isPlaying) ? (
            <span><FaRegPauseCircle size={"40px"} /></span>
          ) : (
            <span><IoMdPlayCircle size={"40px"} /></span>
          )}
        </div>

        {/* Add/Remove Playlist Button */}
        <div className="hover-icon add-remove-btn" onClick={() => handleAddRemoveSong(son)}>
          {!tracks.find((s) => s.id === son.id) ? (
            <span><MdPlaylistRemove size={"40px"} /></span>
          ) : (
            <span><MdPlaylistAddCircle size={"40px"} /></span>
          )}
        </div>
      </div>

      <p className="song-title">{son.name}</p>
    </div>
  ))}
</div>
</div>












      Audio player
      <div className="fixed-bottom left-0 w-full z-50 bg-black text-white p-2 md:relative md:p-0 player-bar" >
      {currentSong && (
        <div className="audio-player fixed bottom-0 left-0 w-full bg-gray-900 z-50">


          <ReactPlayer
            url={currentSong.audio || currentSong.preview_url}
            playing={isPlaying}
            controls={true}
            width="100%"
            height="50px"
            loop={isLooping}
  onEnded={() => {

    setIsPlaying(false)
    if (isShuffling) {
      playRandomSong();
    } else {
      setCurrentSong(null);
    }
  }}
          />
          <div className="flex justify-center gap-4 text-white py-2">
  <button onClick={toggleLoop} className="loop">{isLooping ? '🔁 On' : '🔁 Off'}</button>
  <button onClick={toggleShuffle} className="shuffle">{isShuffling ? '🔀  On' : '🔀 Off'}</button>
</div>

        </div>
      )}  
</div>
      <Footer />
     
    </div>
  );
};

export default Main;
