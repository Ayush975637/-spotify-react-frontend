

// import React, { useState, useEffect } from "react";
// import ReactPlayer from "react-player";
// import { IoMdPlayCircle } from "react-icons/io";
// import { FaRegPauseCircle } from "react-icons/fa";

// const SkeletonCard = () => (
//   <div className="card-item">
//     <div className="img-wrapper skeleton-box" style={{
//       width: '100%', aspectRatio: '1', borderRadius: '10px',
//       background: 'linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%)',
//       backgroundSize: '200% 100%',
//       animation: 'shimmer 1.4s infinite'
//     }} />
//     <div style={{
//       height: '14px', borderRadius: '6px', marginTop: '10px',
//       background: 'linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%)',
//       backgroundSize: '200% 100%',
//       animation: 'shimmer 1.4s infinite',
//       width: '70%'
//     }} />
//   </div>
// );

// const Main = ({  qu }) => {
//   const [currentSong, setCurrentSong] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [isLooping, setIsLooping] = useState(false);
//   const [isShuffling, setIsShuffling] = useState(false);
//   const [query, setQuery] = useState('');
//   const [tracks, setTracks] = useState([]);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [playerVisible, setPlayerVisible] = useState(false);

//   useEffect(() => {
//     if (qu) setQuery(qu);
//   }, [qu]);

//   useEffect(() => {
//     const getTracks = async () => {
//       setLoading(true);
//       let data = await fetch(
//         `https://v1.nocodeapi.com/ayush975637/spotify/jzyYOKkexPVoiemb/search?q=${query === "" ? "trending" : query}&type=track`
//       );
//       let convertData = await data.json();
//   console.log(convertData);
//  const items = convertData?.tracks?.items ?? [];

//       const filtered = items.filter(
//         (track) => track?.preview_url || track?.audio
//       );

//       setTracks(filtered);
//       setLoading(false);
//     };
//     if (query !== null) getTracks();
//   }, [query]);

//   // Smooth player appear/disappear
//   useEffect(() => {
//     if (currentSong) {
//       setTimeout(() => setPlayerVisible(true), 10);
//     } else {
//       setPlayerVisible(false);
//     }
//   }, [currentSong]);

//   const toggleLoop = () => setIsLooping(l => !l);
//   const toggleShuffle = () => setIsShuffling(s => !s);

//   const playRandomSong = () => {
//     if (tracks.length === 0) return;
//     const randomIndex = Math.floor(Math.random() * tracks.length);
//     setCurrentSong(tracks[randomIndex]);
//     setIsPlaying(true);
//   };

  

//   const handlePlayClick = (song) => {
//     const songUrl = song.id;
//     if (currentSong && (currentSong.id) === songUrl) {
//       setIsPlaying(p => !p);
//     } else {
//       setCurrentSong(song);
//       setIsPlaying(true);
//     }
//   };

//   const SongGrid = ({ title }) => (
//     <div>
//       {title && <h3>{title}</h3>}
//       <div className="grid-container">
//         {loading
//           ? Array(32).fill(0).map((_, i) => <SkeletonCard key={i} />)
//           : tracks.map((son) => (
//             <div className="card-item" key={son.id}>
//               <div className="img-wrapper">
//                 <img src={son.album.images[0].url} alt={son.name} className="song-img" />
//                 <div className="hover-icon play-pause-btn" onClick={() => handlePlayClick(son)}>
                  
// {currentSong &&
//                     (currentSong.id) === (son.id) &&
//                     isPlaying
//                     ? <FaRegPauseCircle size="40px" />
//                     : <IoMdPlayCircle size="40px" />
//                   }


//                 </div>
//               </div>
//               <p className="song-title">{son.name}</p>
//             </div>
//           ))
//         }
//       </div>
//     </div>
//   );

//   return (
//     <>
//       {/* Shimmer keyframe */}
//       <style>{`
//         @keyframes shimmer {
//           0%   { background-position: 200% 0; }
//           100% { background-position: -200% 0; }
//         }

//         .player-slide {
//           position: fixed;
//           bottom: 0; left: 0;
//           width: 100%;
//           background: #111827;
//           z-index: 50;
//           transform: translateY(100%);
//           opacity: 0;
//           transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
//                       opacity 0.4s ease;
//           box-shadow: 0 -4px 24px rgba(0,0,0,0.5);
//           border-top: 1px solid #374151;
//         }

//         .player-slide.visible {
//           transform: translateY(0);
//           opacity: 1;
//         }

//         .player-controls {
//           display: flex;
//           justify-content: center;
//           gap: 16px;
//           padding: 6px 12px 8px;
//         }

//         .ctrl-btn {
//           background: none;
//           border: none;
//           cursor: pointer;
//           font-size: 13px;
//           padding: 4px 12px;
//           border-radius: 20px;
//           color: #9ca3af;
//           transition: all 0.2s;
//         }

//         .ctrl-btn.active {
//           background: rgba(127,119,221,0.2);
//           color: #a78bfa;
//         }

//         .ctrl-btn:hover {
//           background: rgba(255,255,255,0.08);
//           color: #fff;
//         }
//       `}</style>

//       <div className="main-content-container main-content">
//         {qu && <SongGrid />}
//         <SongGrid title="Trending Songs" />

//         {/* Extra bottom padding so player doesn't cover last card */}
//         <div style={{ height: '80px' }} />
//       </div>

//       {/* Smooth slide-up player */}
//       <div className={`player-slide ${playerVisible ? 'visible' : ''}       `}>
//         {currentSong &&  (
//           <>
//             <ReactPlayer
//               url={currentSong.audio || currentSong.preview_url}
//               playing={isPlaying}
//               controls={true}
//               width="100%"
//               height="50px"
//               loop={isLooping}
//               onEnded={() => {
//                 setIsPlaying(false);
//                 if (isShuffling) playRandomSong();
//                 else setCurrentSong(null);
//               }}
//             />
//             <div className="player-controls text-lg">
//               <button
//                 className={`ctrl-btn ${isLooping ? 'active' : ''}`}
//                 onClick={toggleLoop}
//               >
//                 🔁 {isLooping ? 'Loop On' : 'Loop Off'}
//               </button>
//               <button
//                 className={`ctrl-btn ${isShuffling ? 'active' : ''}`}
//                 onClick={toggleShuffle}
//               >
//                 🔀 {isShuffling ? 'Shuffle On' : 'Shuffle Off'}
//               </button>
//             </div>
//           </>
//         )}










//       </div>
//     </>
//   );
// };

// export default Main;



import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { IoMdPlayCircle } from "react-icons/io";
import { FaRegPauseCircle } from "react-icons/fa";

const SkeletonCard = () => (
  <div className="card-item">
    <div className="img-wrapper skeleton-box" style={{
      width: '100%', aspectRatio: '1', borderRadius: '10px',
      background: 'linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%)',
      backgroundSize: '200% 100%',
      animation: 'shimmer 1.4s infinite'
    }} />
    <div style={{
      height: '14px', borderRadius: '6px', marginTop: '10px',
      background: 'linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%)',
      backgroundSize: '200% 100%',
      animation: 'shimmer 1.4s infinite',
      width: '70%'
    }} />
  </div>
);

const Main = ({ qu }) => {
  const [currentSong, setCurrentSong]   = useState(null);
  const [loading, setLoading]           = useState(true);
  const [error, setError]               = useState(null);
  const [isLooping, setIsLooping]       = useState(false);
  const [isShuffling, setIsShuffling]   = useState(false);
  const [query, setQuery]               = useState('');
  const [tracks, setTracks]             = useState([]);
  const [isPlaying, setIsPlaying]       = useState(false);
  const [playerVisible, setPlayerVisible] = useState(false);
  const [retryCount, setRetryCount]     = useState(0);

  // Sync external search query
  useEffect(() => {
    if (qu) setQuery(qu);
  }, [qu]);

  // Fetch tracks
  useEffect(() => {
    const getTracks = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `https://v1.nocodeapi.com/ayush975637/spotify/jzyYOKkexPVoiemb/search?q=${
            query === "" ? "trending" : query
          }&type=track`
        );
        const convertData = await res.json();

        // API rate limit / auth error — no tracks key returned
        if (!convertData?.tracks?.items) {
          setError(convertData?.message || "Failed to load songs. Please try again.");
          setTracks([]);
          return;
        }

        // Filter out tracks with no playable audio
        const filtered = convertData.tracks.items.filter(
          (track) => track?.preview_url || track?.audio
        );

        if (filtered.length === 0) {
          setError("No playable songs found for this search.");
        }

        setTracks(filtered);
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Something went wrong. Check your connection.");
        setTracks([]);
      } finally {
        setLoading(false);
      }
    };

    if (query !== null) getTracks();
  }, [query, retryCount]);

  // Smooth player slide-up / slide-down
  useEffect(() => {
    if (currentSong) {
      setTimeout(() => setPlayerVisible(true), 10);
    } else {
      setPlayerVisible(false);
    }
  }, [currentSong]);

  const toggleLoop    = () => setIsLooping(l => !l);
  const toggleShuffle = () => setIsShuffling(s => !s);

  const playRandomSong = () => {
    if (tracks.length === 0) return;
    const randomIndex = Math.floor(Math.random() * tracks.length);
    setCurrentSong(tracks[randomIndex]);
    setIsPlaying(true);
  };

  const handlePlayClick = (song) => {
    if (currentSong && currentSong.id === song.id) {
      setIsPlaying(p => !p);
    } else {
      setCurrentSong(song);
      setIsPlaying(true);
    }
  };

  const SongGrid = ({ title }) => (
    <div>
      {title && <h3>{title}</h3>}

      {/* Error state */}
      {!loading && error && (
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', padding: '48px 24px', gap: '12px',
          textAlign: 'center'
        }}>
          <span style={{ fontSize: '48px' }}>🎵</span>
          <p style={{ fontSize: '16px', fontWeight: 500, color: '#e5e7eb', margin: 0 }}>
            Oops, couldn't load songs
          </p>
          <p style={{ fontSize: '13px', margin: 0, color: '#6b7280' }}>
            {error}
          </p>
          <button
            onClick={() => { setError(null); setRetryCount(c => c + 1); }}
            style={{
              marginTop: '8px', padding: '8px 20px', borderRadius: '20px',
              background: 'rgba(127,119,221,0.2)', color: '#a78bfa',
              border: '1px solid rgba(127,119,221,0.3)', cursor: 'pointer',
              fontSize: '13px'
            }}
          >
            Try Again
          </button>
        </div>
      )}

      {/* Song grid — skeleton while loading, cards when ready */}
      {!error && (
        <div className="grid-container">
          {loading
            ? Array(32).fill(0).map((_, i) => <SkeletonCard key={i} />)
            : tracks.map((son) => (
              <div className="card-item" key={son.id}>
                <div className="img-wrapper">
                  <img
                    src={son.album.images[0].url}
                    alt={son.name}
                    className="song-img"
                  />
                  <div
                    className="hover-icon play-pause-btn"
                    onClick={() => handlePlayClick(son)}
                  >
                    {currentSong && currentSong.id === son.id && isPlaying
                      ? <FaRegPauseCircle size="40px" />
                      : <IoMdPlayCircle size="40px" />
                    }
                  </div>
                </div>
                <p className="song-title">{son.name}</p>
              </div>
            ))
          }
        </div>
      )}
    </div>
  );

  return (
    <>
      <style>{`
        @keyframes shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        .player-slide {
          position: fixed;
          bottom: 0; left: 0;
          width: 100%;
          background: #111827;
          z-index: 50;
          transform: translateY(100%);
          opacity: 0;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                      opacity 0.4s ease;
          box-shadow: 0 -4px 24px rgba(0,0,0,0.5);
          border-top: 1px solid #374151;
        }

        .player-slide.visible {
          transform: translateY(0);
          opacity: 1;
        }

        .player-controls {
          display: flex;
          justify-content: center;
          gap: 16px;
          padding: 6px 12px 8px;
        }

        .ctrl-btn {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 13px;
          padding: 4px 12px;
          border-radius: 20px;
          color: #9ca3af;
          transition: all 0.2s;
        }

        .ctrl-btn.active {
          background: rgba(127,119,221,0.2);
          color: #a78bfa;
        }

        .ctrl-btn:hover {
          background: rgba(255,255,255,0.08);
          color: #fff;
        }
      `}</style>

      <div className="main-content-container main-content">
        {qu && <SongGrid />}
        <SongGrid title="Trending Songs" />
        <div style={{ height: '80px' }} />
      </div>

      {/* Slide-up audio player */}
      <div className={`player-slide ${playerVisible ? 'visible' : ''}`}>
        {currentSong && (
          <>
            <ReactPlayer
              url={currentSong.audio || currentSong.preview_url}
              playing={isPlaying}
              controls={true}
              width="100%"
              height="50px"
              loop={isLooping}
              onEnded={() => {
                setIsPlaying(false);
                if (isShuffling) playRandomSong();
                else setCurrentSong(null);
              }}
            />
            <div className="player-controls">
              <button
                className={`ctrl-btn ${isLooping ? 'active' : ''}`}
                onClick={toggleLoop}
              >
                🔁 {isLooping ? 'Loop On' : 'Loop Off'}
              </button>
              <button
                className={`ctrl-btn ${isShuffling ? 'active' : ''}`}
                onClick={toggleShuffle}
              >
                🔀 {isShuffling ? 'Shuffle On' : 'Shuffle Off'}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Main;