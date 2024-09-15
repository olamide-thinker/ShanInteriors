"use client"

import React from 'react';
import { useGetProjectsQuery } from '../../../api/projectApi';
import { ProjectCard } from './ProjectCard';
import { ScrollArea } from '@/components/ui/scroll-area';
import Image from 'next/image';

const ProjectList: React.FC = () => {
  const { data: projects, error, isLoading } = useGetProjectsQuery();

  console.log("_______>",projects)

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: </p>;

  return (
<div className=' w-full h-full justify-center flex items-center'>
  <Image src={'/LandingPlaceHolder.svg'} alt={'folder'} height={300} width={300}/>
</div>
    // <ScrollArea>
    //   <p className='text-xs text-muted-foreground bg-secondary px-16 py-2'>
    //     This is a list of all the projects you currently display on your website. Click on any of the projects to make updates or delete it permanently.
    //   </p>
    //   <div className='flex flex-wrap gap-2 p-4 bg-card'>
    //     {projects && projects?.map((project:any) => (
    //       <ProjectCard key={project.id} project={project} />
    //     ))}
    //   </div>
    // </ScrollArea>
  );
};

export default ProjectList;
