import React from 'react'
import YouTube from 'react-youtube';

export const VideoPlayer = ({currentVideo, onEnd}:any) => {

const opts = {

        playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls:0,
      
    },
  };


  return (
    <YouTube 
  className='w-full'
  iframeClassName=' rounded-lg sm:rounded-3xl h-[320px] md:h-[85vh] w-full border border-none'
  videoId={currentVideo}
  opts={opts}
  onError={()=>(
    <p>Error...</p>
  )}
   onEnd={onEnd} />
  )
}
