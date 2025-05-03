import React from 'react'
import ReactPlayer from 'react-player';

const BottomPlayer = ({currentSong}) => {

  

    const BottomPlayer = ({ currentSong }) => {
      if (!currentSong) return null;
    }


  return (
    <div>
      <div className="audio-player fixed bottom-0 left-0 w-full bg-gray-900 z-50">
      
      
                <ReactPlayer
                  url={currentSong.audio}
                  playing={true}
                  controls={true}
                  width="100%"
                  height="50px"
                />
              </div>
    </div>
  )
};

export default BottomPlayer;
