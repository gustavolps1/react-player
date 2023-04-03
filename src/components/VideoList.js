import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './VideoList.css';

function VideoList(props) {
  const { onNamesChange, onVideoSelect, selectedIndex } = props;
  const [videoList, setVideoList] = useState([]);


  useEffect(() => {
    axios.get('http://192.168.1.26:8080/list')
      .then(response => {
        const videoListFromApi = response.data.map(item => item.name);
        setVideoList(videoListFromApi);
        onNamesChange(videoListFromApi);
      })
      .catch(error => console.error(error));
  }, [onNamesChange]);

  const handleItemClick = (index) => {
    onVideoSelect(index);
  };

  

  return (
    <ul style={{ overflowY: 'scroll', height: '280px', width: '450px', margin:"8px" }}>
      {videoList.map((video, index) => (
        <li 
        key={index}
        onClick={() => handleItemClick(index)}
        className={`video-list-item ${selectedIndex === index ? 'selected' : ''}`}
          style={{
            listStyle: 'none'
          }}
        >
          {video}
        </li>
      ))}
    </ul>
  );
}

export default VideoList;



