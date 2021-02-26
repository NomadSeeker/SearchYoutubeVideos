import React from 'react';
import VideoItem from './VideoItem';

//{videos} is {props.videos} destructured
const VideoList = ({videos, onVideoSelect}) => {
    //this map goes through the array of videos and creates a separate tag per video.
    const renderedList = videos.map(video => { return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>; });

    return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;