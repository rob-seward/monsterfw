import React from "react"

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  
  <div className="video">
    <iframe
      
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="1"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      height="180"
      width="275"
      

    />
  </div>
)
export default Video