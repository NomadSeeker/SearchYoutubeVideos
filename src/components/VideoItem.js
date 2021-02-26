import './VideoItem.css';
import React from 'react';

const VideoItem = ({video, onVideoSelect}) => {
    //the onClick prop is using an arrow function in order to call back the function created in the App.js file
    //also so we can pass the video as a prop to the function, which App.js needs.
    return (
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <img 
                alt={video.snippet.title}  
                className="ui image" 
                src={video.snippet.thumbnails.medium.url}/>
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
            
            
        </div>
    );
};

export default VideoItem;