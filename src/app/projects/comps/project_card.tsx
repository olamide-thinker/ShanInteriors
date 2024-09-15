
import Image from 'next/image'
import React from 'react'
import { Project } from '@/api/types';
import { useRouter, useParams } from 'next/navigation';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useDeleteProjectMutation } from '@/api/projectApi';


interface ProjectCardProps {
    project: Project;
  }

export const Project_card = ({project}:ProjectCardProps) => {

    const router = useRouter();
    const params = useParams();
    const [isActive, setIsActive] = React.useState<boolean>()
const [ DeleteProject ] = useDeleteProjectMutation()

    React.useEffect(()=>{
          setIsActive(params.projectID === project?.id)
    },[isActive, params.projectID, project?.id])

   const  handleDeleteProject=()=>{
    DeleteProject(project?.id as string)
    }

  return (
    <div 
    onClick={() => router.push(`/projects/${project.id}`)}
    className="relative cursor-pointer group rounded-2xl overflow-hidden hover:border-2 border-white">
     
    <div className="absolute items-end flex  text-card top-0 bottom-0 bg-gradient-to-t from-black/50 bg-blend-multiply  to-transparent h-full w-full p-2 ">
      <div className="p-2 ">
        <h3 className="font-bold text-xl -mb-1"><Icon icon="lets-icons:folder-alt-duotone" width="1.2em" height="1.2em"   />{ project.project_name || "" }</h3>
        <p className='text-xs'>{ project.project_location || "" }</p>
      </div>
    </div>
    <Image
      src={ project.project_cover_image as string|| "" }
      alt={""}
      width={500}
      height={500}
      className={`h-[100px] ${isActive && "h-[200px]"} object-cover  transition-all duration-1000 ease-in-out`}
    />
  </div>
  )
}
