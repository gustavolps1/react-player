import React, { useState } from "react";
import ReactPlayer from 'react-player';
import VideoList from "./components/VideoList";
import './App.css';

function App() {

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [videos, setVideos] = useState([]);

  const handleVideoEnd = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    } else {
      setCurrentVideoIndex(0);
    }
  };

  const handleVideoSelection = (index) => {
    setCurrentVideoIndex(index);
  };

  return (
    <div className="App">
      <center>
        <div>
          <ReactPlayer
          style={{marginTop:"1%"}}
            height={400}
            width={800}
            url={'videos/' + videos[currentVideoIndex]}
            controls={true}
            onEnded={handleVideoEnd}
            playing={true}
          />
        </div>
        <div>
          <h2 className="video-title">{videos[currentVideoIndex]}</h2>
          <VideoList
            onNamesChange={videoList => {
              setVideos(videoList);
            }}
            onVideoSelect={handleVideoSelection}
            selectedIndex={currentVideoIndex}
          />
        </div>
      </center>
    </div>
  );
}

export default App;