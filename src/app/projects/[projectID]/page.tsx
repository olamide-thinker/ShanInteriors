"use client";

import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useParams, useRouter } from "next/navigation";
import {
  useDeleteProjectMutation,
  useGetProjectByIdQuery,
  useUpdateProjectMutation,
} from "@/api/projectApi";
import { useCreateProjectImageMutation } from "@/api/projectImagesApi";
import { ProjectImage } from "./comps/projectImage";
import { TfiPlus } from "react-icons/tfi";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { Inputters } from "./comps/inputters";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import ClipLoader from "react-spinners/ClipLoader";


const ProjectDetails = () => {
  const params = useParams();

  const {
    data: project,
    error,
    isLoading,
    refetch,
  } = useGetProjectByIdQuery(params.projectID as string);
  const [uploadPicture, { isSuccess }] = useCreateProjectImageMutation();
  const [
    updateProject,
    { isLoading: updateLoading, isSuccess: updateSuccess },
  ] = useUpdateProjectMutation();

  const [deleteProject,{isLoading: deleting, isSuccess: deleted}] = useDeleteProjectMutation()
  const router = useRouter()

  React.useEffect(() => {
    if(deleted || error ){router.push("/projects") }
    updateSuccess || (isSuccess && refetch());
    console.log("refetched");
  }, [deleted, error, isSuccess, refetch, router, updateSuccess]);
  
  const handleProjectDeletion = ()=>{
    deleteProject(params.projectID as string)
    refetch()
  }

  const handleUpload = (files: FileList) => {
    Array.from(files).forEach((file) => {
      const formData = new FormData();
      formData.append("image", file);
      uploadPicture({
        projectId: params.projectID as string,
        newImage: formData,
      });
    });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      handleUpload(event.target.files);
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: </p>;

  return (
    <ScrollArea className="h-screen w-full gap-1">

      <div className="p-4">
<div>
<ClipLoader
        // color={color}
        loading={deleting}
        // cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
</div>

      <div className="flex  items-center w-fit p-4 gap-2 rounded-xl bg-muted border-card border-4  hover:shadow-xl">
      <div className="flex flex-col items-center gap-1 ">

        <Inputters
        icon={<Icon icon="lets-icons:folder-alt-duotone" width="1.2em" height="1.2em"   />}
        style = {""}
        // style = {"text-center text-6xl font-bold h-fit w-fit"}
          project={project?.project_name}
          isLoading={isLoading}
          onBlur={(e) => {
            const value = e.target.value;
            updateProject({
              id: params.projectID as string,
              updatedProject: { project_name: value },
            });
          }}
        />
        <Inputters
        icon={<Icon icon="fluent:location-ripple-16-regular" width="1.2em" height="1.2em"   />}
        style = {""}
        // style = {"text-center w-fit"}
          project={project?.project_location}
          isLoading={isLoading}
          onBlur={(e) => {
            const value = e.target.value;
            updateProject({
              id: params.projectID as string,
              updatedProject: { project_location: value },
            });
          }}
        />
        <Inputters
          icon={<Icon icon="fluent:text-description-16-regular" width="1.2em" height="1.2em"   />}
          style = {"h-full mr-0"}
          type="textArea"
          // style = {"text-center w-[50%] min-h-[80px]"}
          project={project?.project_description}
          isLoading={isLoading}
          onBlur={(e) => {
            const value = e.target.value;
            updateProject({
              id: params.projectID as string,
              updatedProject: { project_description: value },
            });
          }}
        />

<Inputters
  icon={<Icon icon="uim:image-v" width="1.2em" height="1.2em" />}
  style="h-full mr-0"
  type="file"
  project={project?.project_description}
  isLoading={isLoading}
  onBlur={(event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("File upload triggered...");

    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append("project_cover_image", file, file.name);

      console.log("FormData prepared for project_cover_image:", formData);

      updateProject({
        id: params.projectID as string,
        updatedProject: { project_cover_image: formData }, 
      }).unwrap();
    }
  }}
/>

        {/* <div className="flex cursor-pointer gap-2 bg-card w-full px-2 py-2 items-center"

        onClick={(files: FileList) => {
          Array.from(files).forEach((file) => {
            const formData = new FormData();
            formData.append("image", file);
            uploadPicture({
              projectId: params.projectID as string,
              newImage: formData,
            });
          });
        }}
        >
        <Icon icon="uim:image-v" width="1.2em" height="1.2em"   />
        <p className=" text-sm">Change cover image</p> 
        </div> */}
   
   <Separator className="m-2"/>
          <Button 
          onClick={handleProjectDeletion}
          className="flex cursor-pointer gap-2 bg-card w-full px-2 py-2 justify-start" 
          variant={"outline"}>
            <Icon icon="ph:trash-duotone" 
            width="1.2em" height="1.2em" />
            Delete project
            </Button>
        
      </div>
          <div className="relative">
          <Image 
          className="h-60 w-full  object-cover rounded-xl p-1"
            src={project?.project_cover_image as string||""} 
            alt={" Project Cover "} 
            height={500}
            width={500}
          />
          <Badge  className=" bg-card/75 z-10 absolute bottom-2 left-2 text-card-foreground ">Cover image</Badge>
          </div>
     
       
      </div>
      </div>

<Separator className="bg-accent/30"/>

      <div className="p-4">
            <div className="w-full flex gap-4 flex-wrap p-4 bg-muted rounded-xl">
              <label
                htmlFor="file-upload"
                className="flex justify-center flex-wrap-reverse items-center rounded-lg w-[310px] bg-card border-accent border-dotted border cursor-pointer hover:border-2" 
              >
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <TfiPlus size={34} className="text-accent" />
                </motion.div>
              </label>
              <input
                id="file-upload"
                type="file"
                multiple
                className="hidden"
                onChange={handleFileChange}
              />

              {project?.project_images !== undefined &&
                project?.project_images.map(
                  (
                    image: { caption: string; image: string | FormData; Image_id: string },
                    i: any
                  ) => (
                    <ProjectImage
                      projectId={params.projectID as string}
                      key={i}
                      {...image}
                    />
                  )
                )}
           
            </div>
      </div>
    </ScrollArea>
  );
};

export default ProjectDetails;
