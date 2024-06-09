import React from 'react'
import { ProjectCard } from './ProjectCard'
import { ScrollArea } from '@/components/ui/scroll-area'


export default function ProjectList() {
  return (
   

<ScrollArea>
       <p className='text-xs text-muted-foreground   bg-secondary px-16 py-2'>This is a list of all the project you currently display on your website. click on any of the project to make updates or delete it permanently</p>
       <div className='flex flex-wrap gap-2 p-4 bg-card'>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
       </div>
</ScrollArea>
  
        





    
  )
}
