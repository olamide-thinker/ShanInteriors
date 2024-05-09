"use client"
import Image from 'next/image'
import React from 'react'
import { ProjectInfo } from './projectInfo'
import { motion } from "framer-motion"



export const ProjectCard = ({content, orientation}:{orientation:number, content:{ title: string, location: string,
  description: string, imagesPath: string, imagesID: number[],}}) => {
  
  const [hovering, setHovering] = React.useState(false)
  const [orient, setOrient] = React.useState(true)
  const [imagePath, setImagePath] = React.useState('project1')


React.useEffect(()=>{
  if (orientation % 2 === 1){
    setOrient(false)
  }
},[orientation])
// console.log('ort',orient)


  return (
    <div className=" w-[450px] relative  group"
    onMouseOut={()=> setHovering(false)}
    onTouchStart={()=> setHovering(!hovering)}
    onMouseOver={()=> setHovering(true)}
    onMouseLeave={()=> setHovering(false)}
    >

        {/* Background image */}
        <div className='relative  h-[full]'>
        { orient ? <svg viewBox="0 0 475 554" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path fill-rule="evenodd" clip-rule="evenodd" d="M475.855 0H0V555.337H475.855V0ZM19.46 481.493C17.6738 514.255 43.8149 541.772 76.6255 541.667L399.595 540.632C432.248 540.528 458.155 513.098 456.397 480.493L434.137 67.6638C432.504 37.3843 407.476 13.6692 377.153 13.6692H99.0083C68.6982 13.6692 43.6763 37.3642 42.0259 67.6294L19.46 481.493Z" className='fill-background h-full '/> </svg>  
         : 
         <svg viewBox="0 0 475 554" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path fill-rule="evenodd" clip-rule="evenodd" d="M475.855 555.337H0V0H475.855V555.337ZM19.46 73.8434C17.6738 41.0816 43.8149 13.5644 76.6255 13.6696L399.595 14.7043C432.248 14.809 458.155 42.2388 456.397 74.8438L434.137 487.673C432.504 517.952 407.476 541.667 377.153 541.667H99.0083C68.6982 541.667 43.6763 517.972 42.0259 487.707L19.46 73.8434Z"  className='fill-background h-full '/> </svg>  }

        <div className=' bg-black h-full w-full top-0 absolute -z-20'>

        <Image
        src={`/projectImage/${content.imagesPath}/2.jpeg`}
        alt="HeroImage"
        width={1000}
        height={1000}
        className={`w-full object-cover  top-0 h-full   
        ${hovering && 'opacity-55'}`}
        />
        </div>

        </div>
    
        {/* Foreground text */}
        { hovering && <motion.div 
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
 
        className='flex flex-col justify-center items-center absolute bottom-0 mb-16 w-full '>
          <ProjectInfo content={content}/>
        </motion.div>
        }
   

    <p className='block w-full text-md text-center'>
    Four seasons hotel Sharm El Sheikh
    </p>
    </div>

  
  )
}
