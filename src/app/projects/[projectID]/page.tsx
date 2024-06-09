import React from 'react'
import { ProjectForm } from './comps/projectInfoForm'
import Image from 'next/image'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'
import { AiFillCloseCircle, AiOutlineX } from 'react-icons/ai'
import { TfiBackLeft, TfiClose, TfiPlus } from 'react-icons/tfi'
import { ProjectImage } from './comps/projectImage'
import { ArrowLeftIcon, FilePlusIcon } from '@radix-ui/react-icons'
import { BackButton } from './comps/backButton'



const ProjectDetails = () => {


  return (
    <div className='w-full h-full bg-card flex group '>
<ProjectForm/>

<ScrollArea className='h-[73vh] w-full'>
<div className='w-full border-black bg-secondary flex gap-4 flex-wrap p-4'>  
  <div className=' flex justify-center items-center rounded-lg w-[260px] bg-card border-accent border-dotted border cursor-pointer hover:border-2'>
    <TfiPlus size={34} className='text-accent'/>
  </div>
  { Array.from({length:10}).map((T,i)=>
<ProjectImage key={i}/>
  )}
</div>
</ScrollArea>
    </div>
  )
}

export default ProjectDetails