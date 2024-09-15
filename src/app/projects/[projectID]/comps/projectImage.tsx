"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { TfiClose } from "react-icons/tfi";
import { Badge } from "@/components/ui/badge";
import { projectImagesApi, useDeleteProjectImageMutation } from '@/api/projectImagesApi'; // Make sure this is correctly imported
import { useDispatch } from "react-redux";

export const ProjectImage = ({ Image_id, caption, image, projectId }: { Image_id: string; caption: string; image: string|FormData, projectId:string }) => {
  const [hovering, setHovering] = React.useState(false);
  const dispatch = useDispatch()

  // Get the delete mutation
  const [deleteImage,{isSuccess}] = useDeleteProjectImageMutation();

  const handleDelete =async() => {
 deleteImage({ projectId: projectId, imageId: Image_id });
 
      console.log(`Image with ID ${Image_id} deleted`);
      isSuccess && dispatch(projectImagesApi.util.invalidateTags(["ProjectImage"]))
  
  };

  return (
    <div
      onMouseOver={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="relative border-card hover:shadow-lg rounded-xl overflow-hidden border-4"
    >
      {hovering && (
        <Button
          size={"icon"}
          variant={"destructive"}
          className="rounded-full absolute top-2 right-4"
          onClick={handleDelete}
        >
          <TfiClose />
        </Button>
      )}
      <Badge variant={'secondary'} className="absolute bottom-3 whitespace-nowrap truncate line-clamp-1 overflow-scroll w-[200px] left-3">
        {caption}
      </Badge>
      <Image
        src={image as string}
        className="w-[310px] h-[260px] object-cover rounded-lg"
        alt={caption}
        height={500}
        width={500}
      />
    </div>
  );
};
