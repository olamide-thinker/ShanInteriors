"use client"
import Image from 'next/image'
import React from 'react'
import { ProjectInfo } from './projectInfo'
import { motion } from "framer-motion"
import { Project } from '@/api/types'
import Project_imgShape from './project_imgShape'



export const ProjectCard = ({details, orientation}:{orientation: boolean, 
  details:Project}) => {
  // details:{ project_name: string, project_location: string,
  //   Project_description: string, id: string, project_cover_image: string,}}) => {

  // details:{ title: string, location: string,
  // description: string, imagesPath: string, imagesID: number[],}}) => {
  
  const [hovering, setHovering] = React.useState(false)
  const [imagePath, setImagePath] = React.useState('project1')


  const content ={
// imagesId:id,
coverImage:details?.project_cover_image as string,
description: details?.project_description as string,
images: details?.project_images as [], 
location: details?.project_location as string,
title: details?.project_name as string,
  }




  return (
    <div className=" w-[350px] sm:w-[400px] max-h-fit  relative  group"
    onMouseOut={()=> setHovering(false)}
    // onTouchStart={()=> setHovering(!hovering)}
    onTouchStartCapture={()=> setHovering(hovering)}
    onMouseOver={()=> setHovering(true)}
    onMouseLeave={()=> setHovering(false)}
    >

        {/* Background image */}
        
             <Project_imgShape img_path={content.coverImage as string} orient={orientation}/>
    
        {/* Foreground text */}
        { hovering && <motion.div 
          // whileHover={{ scale: 1.1 }}
          // whileTap={{ scale: 1.1 }}
 
        className='flex flex-col justify-center items-center absolute bottom-10  w-full '>
         {content && <ProjectInfo content={content}/>}
        </motion.div>
        }
   

    <p className='block w-full text-lg text-center font-bold'>
    {content.title}
    </p>
    </div>

  
  )
}
