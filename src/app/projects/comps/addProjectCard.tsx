
import { useCreateProjectMutation } from '@/api/projectApi'
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useRouter } from 'next/navigation'
import React from 'react'

export const AddProjectCard = () => {

  const [createProject,{isLoading, isSuccess, isError,data}]=useCreateProjectMutation()
  const router = useRouter();


  const handleAddProject =()=>{
   const data = {
      project_name: "Project name",
      project_description: "Project description",
      project_location: "Project location",
      // cover_image: "https://res.cloudinary.com/dl1lxyrdu/image/upload/v1723415138/projects/cover_images/vmuoxjlzxqj4awfkhzi8.webp"
    }
    createProject(data)
  }

  isSuccess && console.log("____ :", data)
  isSuccess &&  router.push(`/projects/${data.id}`)

  return (
    <div className='text-xl w-full'>
      <Button 
      disabled={isLoading}
      onClick={handleAddProject}
      className='text-xl w-full flex justify-between rounded-full text-sm'> + {" "} New project <Icon icon="lets-icons:folder-alt-duotone" width="1.2em" height="1.2em"   />  </Button>
    </div>
  )
}
