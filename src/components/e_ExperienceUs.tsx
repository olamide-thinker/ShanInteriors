"use client"
import React, { useRef } from 'react'
import { motion, useMotionValue, useTransform } from "framer-motion"
import { PlayIcon } from '@radix-ui/react-icons'
import { VideoPlayer } from './Comps/videoPlayer';



export const ExperienceUs = () => {
const[playing, setPlaying] = React.useState(1)


  const experiences = [
    {item:1, name: "Hilton Hotel", videoId:'TlMUknHQYLU'},
    {item:2, name: "ABC Hotel", videoId:'Fm-w6xheCKI'},
    {item:3, name: "Radisson Hotel", videoId:'waaZqDBUfKs'},
    {item:4, name: "Dangote", videoId:'mcnTurv60kU'},
    {item:5, name: "Lilly Land Hotel", videoId:'9xkxT2hY634'},
  ]



  const currentPlaying = experiences.filter((list: any)=> list.item === playing)
console.log('playing ',currentPlaying.flat())




console.log(playing, experiences.length)
  

  return (
    <div id='project' className=' w-full p-2 md:p-16 items-center flex flex-col justify-center' > 
      {/* <div className='border w-[100%] h-[100%] rounded-[60px] bg-black flex items-end f '> */}
{currentPlaying &&
  <VideoPlayer 
  onEnd={()=>{setPlaying(playing <  experiences.length ? playing +1 : 1)}}
  videoList={experiences}
   currentVideo={currentPlaying[0]?.videoId}/>
}

      <div className=' flex flex-wrap md:flex-nowrap gap-2 w-full sm:pl-8'>
    
      <p className=' text-lg opacity-25 font-bold'>Experience us -</p>
      
      <div className=' flex gap-2 p-2 flex-wrap items-center justify-center '>
      {experiences.map((exp)=>(
        <motion.div
       className= {`px-2 flex items-center rounded-sm bg-accent/15 ${currentPlaying[0].videoId === exp.videoId && 'border-2'}`}
 onClick={()=>{
  setPlaying(exp.item)
 }}
        key={exp.item}>
          <motion.p   transition={{duration: 1.3}} animate={{scale:[2, 1],}} className=' font-[luzia] font-bold sm:text-2xl whitespace-nowrap  cursor-pointer tracking-wide' 
           
          >{exp.name}</motion.p>
          {/* {currentPlaying[0].videoId === exp.videoId && <div className='flex items-center'>
              <PlayIcon/>
              <p className=' italic'>Playing...</p>
          </div>  } */}
        
        </motion.div>
   ))}
    
   
      </div>
      </div>
       </div>
  )
}
