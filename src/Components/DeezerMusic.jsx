// import React, { useEffect, useState } from 'react';

// const DeezerMusic = () => {
//   const [songs, setSongs] = useState([]);

//   useEffect(() => {
//     // Using CORS proxy to avoid CORS error
//     fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=relaxing')
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.data) {
//           setSongs(data.data); // set songs array
//         }
//       })
//       .catch((err) => console.error("Error fetching songs:", err));
//   }, []);

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>🎵 Relaxing Songs</h2>
//       {songs.map((song) => (
//         <div key={song.id} style={{ marginBottom: '20px', background: '#222', color: 'white', padding: '10px', borderRadius: '10px' }}>
//           <img src={song.album.cover_medium} alt={song.title} width={100} />
//           <h4>{song.title}</h4>
//           <p>Artist: {song.artist.name}</p>
//           <audio controls src={song.preview}></audio>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DeezerMusic;
