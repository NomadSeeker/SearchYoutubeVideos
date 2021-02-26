import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';


const App = ()=>{
    

    const[selectedVideo, setSelectedVideo] = useState(null);

    //The UseVideos hook is used as an useEffect  
    const[videos, search] = useVideos('buildings');

    //Every time a new list of videos is searched 
    //The setselectedvideo function will run and pick the first video of the list
    useEffect(()=>{
        setSelectedVideo(videos[0]);  
    }, [videos]);
    

    
    //SetSelectedVideo is the same as putting an arrow function that only passes 1 argument
    //So it is the same as this (video)=>{setSelectedVideo(video)}
    return (
            
        <div className="ui container">
            <SearchBar onFormSubmit={search}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo}/>
                    </div>
                    <div className="five wide column">
                        <VideoList 
                            
                            onVideoSelect={setSelectedVideo} 
                            videos={videos}
                        />
                    </div>
                </div>
            </div>
            
            
        </div>
        
    );
};

export default App;