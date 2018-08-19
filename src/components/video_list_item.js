import React from 'react';
import VideoList from './video_list';

// Adding the {} means that, 
// get the video from the constructor & 
// create a variable called video and store the props.video in it. 
// (equivalent to the commented line below )
const VideoListItem = ({video, onVideoSelect}) => {
  // const video = props.video;
  // const onVideoSelect = props.onVideoSelect;

  const imageUrl = video.snippet.thumbnails.default.url;

  // if someone clicks on any li element, then call this functions
  // which is coming from props and pass the video as a parameter inside the func 
  return <li  onClick={() => onVideoSelect(video)} className="list-group-item">
    <div className="video-list media">
      <div className="media-left">
        <img className="media-object" src={imageUrl}/>
      </div>
      <div className="media-body">
        <div className="media-heading">{video.snippet.title}</div>
      </div>
    </div>
  </li>
}

export default VideoListItem;