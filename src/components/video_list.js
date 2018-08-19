import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  // iterate over all videos, and create an array of 
  // VideoListItem Components
  const videoItems = props.videos.map((video) =>  {
      // every component has a unique id (udid). So, 
      // one specific VideoListItem can be updated 
      // later if needed to. 
     return (
       // Taking prop coming from App, and passing
       // it to VideoListItem
      <VideoListItem 
        onVideoSelect={props.onVideoSelect}
        key={video.etag} 
        video={video}/>
     )
  })

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;