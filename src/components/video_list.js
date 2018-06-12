import React from 'react';
import VideoListItem from './video_list_item';


const VideoList = (props) => {

    //Iterate through videos and generate JSX for each element it. 
    const videoItems = props.videos.map(video => {
        return ( <VideoListItem 
                        key={video.etag} 
                        video={video} 
                        onVideoSelect = {props.onVideoSelect}
                        />
        );
    }); 
    //Notice giving React array in JSX, it is smart to list out                
    return (
        <ul className = "col-md-4 list-group" > 
            {videoItems}
        </ul>
    );
};

export default VideoList;