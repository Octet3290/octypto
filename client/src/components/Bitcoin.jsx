import React from "react";
import { Bitcoin } from ".";
import video from '../../Images/video.mp4';
const Main = () => {
    return (
      <div className='main'>
          <video src={video} autoPlay loop muted  />
          
          
      </div>
    )
  }
  
  export default Main