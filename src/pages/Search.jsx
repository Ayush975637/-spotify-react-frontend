import React, { useEffect, useState } from 'react';

const DeezerMusic = () => {
  const [query, setQuery] = useState('');
  
  const [tracks, setTracks] = useState([]);
 const getTracks=async()=>{
let data=await fetch(
`https://v1.nocodeapi.com/ayush9756/spotify/UMMPcPLmhZwJGxdd/search?q=${query===""?"trending":query}&type=track`

);
let convertData=await data.json();
console.log(convertData.tracks.items);
setTracks(convertData.tracks.items);

 }
 useEffect(()=>{
  getTracks();
 },[]); 

 

  return (
    <div style={{ padding: '20px' }}>
      <h2>🎵 Search Songs on Deezer</h2>
      <input
        type="search"
        placeholder="Search for songs or artist"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: '10px', marginRight: '10px', width: '300px' }}
      />
      <button onClick={getTracks} style={{ padding: '10px' }}>Search</button>

      <div style={{ marginTop: '30px' }}>
        {tracks.map((song) => (
          <div
            key={song.id}
            style={{
              background: '#222',
              color: 'white',
              padding: '10px',
              marginBottom: '15px',
              borderRadius: '10px'
            }}
          >
            <img src={song.album.images[0].url} alt={song.name} width={100} />
            <h4>{song.name}</h4>
            <p>Artist: {song.album.artists[0].name}</p>
            <audio controls src={song.preview_url} ></audio>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeezerMusic;
