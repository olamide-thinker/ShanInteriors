"use client"

import React from 'react'
import { ProjectCard } from './Comps/projectCard'
import { SectionHeading } from './Comps/sectionHeading'
import { motion, useMotionValue, useTransform } from "framer-motion"
import { useGetProjectsQuery } from '@/api/projectApi'


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

  { title: 'Four seasons hotel', 
  location: "Sharm El Sheikh", 
  description: "Loremss ipsum dolor sit amet consectetur. Nascetur condimentum enim ac sociis tellus pulvinar mi id. Orci curabitur dolor a posuere. Vulputate in feugiat libero dui eu vel aliquet suscipit. ", 
  imagesPath:'project2', 
  imagesID:[ 1,2,3,4,5,6] },

  { title: 'Four seasons hotel', 
  location: "Sharm El Sheikh", 
  description: "Loremss ipsum dolor sit amet consectetur. Nascetur condimentum enim ac sociis tellus pulvinar mi id. Orci curabitur dolor a posuere. Vulputate in feugiat libero dui eu vel aliquet suscipit. ", 
  imagesPath:'project2', 
  imagesID:[ 1,2,3,4,5,6] },

  { title: 'Four seasons hotel', 
  location: "Sharm El Sheikh", 
  description: "Loremss ipsum dolor sit amet consectetur. Nascetur condimentum enim ac sociis tellus pulvinar mi id. Orci curabitur dolor a posuere. Vulputate in feugiat libero dui eu vel aliquet suscipit. ", 
  imagesPath:'project2', 
  imagesID:[ 1,2,3,4,5,6] },

  { title: 'Four seasons hotel', 
  location: "Sharm El Sheikh", 
  description: "Loremss ipsum dolor sit amet consectetur. Nascetur condimentum enim ac sociis tellus pulvinar mi id. Orci curabitur dolor a posuere. Vulputate in feugiat libero dui eu vel aliquet suscipit. ", 
  imagesPath:'project2', 
  imagesID:[ 1,2,3,4,5,6] },

  { title: 'Four seasons hotel', 
  location: "Sharm El Sheikh", 
  description: "Loremss ipsum dolor sit amet consectetur. Nascetur condimentum enim ac sociis tellus pulvinar mi id. Orci curabitur dolor a posuere. Vulputate in feugiat libero dui eu vel aliquet suscipit. ", 
  imagesPath:'project2', 
  imagesID:[ 1,2,3,4,5,6] },

  { title: 'Four seasons hotel', 
  location: "Sharm El Sheikh", 
  description: "Loremss ipsum dolor sit amet consectetur. Nascetur condimentum enim ac sociis tellus pulvinar mi id. Orci curabitur dolor a posuere. Vulputate in feugiat libero dui eu vel aliquet suscipit. ", 
  imagesPath:'project2', 
  imagesID:[ 1,2,3,4,5,6] },

  { title: 'Four seasons hotel', 
  location: "Sharm El Sheikh", 
  description: "Loremss ipsum dolor sit amet consectetur. Nascetur condimentum enim ac sociis tellus pulvinar mi id. Orci curabitur dolor a posuere. Vulputate in feugiat libero dui eu vel aliquet suscipit. ", 
  imagesPath:'project2', 
  imagesID:[ 1,2,3,4,5,6] },

];


export const Projects = () => {
 
const {data:ProjectDetails, isLoading} = useGetProjectsQuery()



  return (
  
    <div id='project' className='w-full'>
      <SectionHeading headingText={'Our Projects'}/>
      <div className='justify-center flex'>

      <div className=' mx-8 max-w-[600px] sm:max-w-[1330px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-16 '>
    {ProjectDetails?.map((details, i)=>{

const e = i % 2 === 1
console.log(i % 2 === 1)
      return( 
      // {Array.from({ length: 5 }).map((_, i) => {

     
      // return(
      <motion.div key={i} className='hover:z-30 h-fit'>
        <motion.div  
        transition={{ duration: 0.3 }} 
         initial={{opacity: 0}} whileInView={{opacity:1 }}
        >
        <ProjectCard details={details} orientation={ e  } />
        </motion.div>
      </motion.div>

      // )})}
    )})}
      </div>
    </div>
    </div>

  )
}
