"use client"

import React from 'react'
import { ProjectCard } from './Comps/projectCard'
import { SectionHeading } from './Comps/sectionHeading'
import { motion, useMotionValue, useTransform } from "framer-motion"


const ProjectDetails = [

  { title: 'Four seasons hotel', 
  location: "Sharm El Sheikh", 
  description: "Loremss ipsum dolor sit amet consectetur. Nascetur condimentum enim ac sociis tellus pulvinar mi id. Orci curabitur dolor a posuere. Vulputate in feugiat libero dui eu vel aliquet suscipit. ", 
  imagesPath:'project1', 
  imagesID:[ 1,2,3,4,5,6] },

  { title: 'Four seasons hotel', 
  location: "Sharm El Sheikh", 
  description: "Loremss ipsum dolor sit amet consectetur. Nascetur condimentum enim ac sociis tellus pulvinar mi id. Orci curabitur dolor a posuere. Vulputate in feugiat libero dui eu vel aliquet suscipit. ", 
  imagesPath:'project2', 
  imagesID:[ 1,2,3,4,5,6] },

];


export const Projects = () => {
 
  return (
  
    <div className='w-full'>
      <SectionHeading headingText={'Our Projects'}/>
      <div className=' mx-8 flex flex-wrap justify-center items-center gap-4 gap-y-16 grid-cols-3 '>
 {ProjectDetails.map((details, i)=>( 
      // {Array.from({ length: 5 }).map((_, i) => {

     
      // return(
      <motion.div key={i} className='hover:z-50'>
        <motion.div  
        transition={{ duration: 0.3 }} 
         initial={{opacity: 0}} whileInView={{opacity:1 }}
        >
        <ProjectCard content={details} orientation={i} />
        </motion.div>
      </motion.div>

      // )})}
    ))}
      </div>
    </div>

  )
}
