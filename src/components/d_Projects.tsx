"use client"

import React from 'react'
import { ProjectCard } from './Comps/projectCard'
import { SectionHeading } from './Comps/sectionHeading'
import { motion, useMotionValue, useTransform } from "framer-motion"


export const Projects = () => {
  
  return (
    <div>
      <SectionHeading headingText={'Our Projects'}/>
      <div className=' mx-8 flex flex-wrap justify-center items-center gap-4 gap-y-16 grid-cols-3 '>
      {Array.from({ length: 5 }).map((_, i) => {

     
      return(
      <motion.div key={i} className='hover:z-50'>
        <motion.div  
        transition={{ duration: 0.3 }} 
         initial={{opacity: 0}} whileInView={{opacity:1 }}
      
        >
        <ProjectCard orientation={i} />
        </motion.div>
      </motion.div>

      )})}
      </div>
    </div>
  )
}
