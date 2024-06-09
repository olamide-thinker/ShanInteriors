
"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { TfiLocationPin } from "react-icons/tfi";


export const ProjectCard = () => {

  const router = useRouter()

  return (
    <div 
    onClick={()=>
      router.push('projects/1')
    }
    className="p-2 border-secondary drop-shadow-sm flex flex-col gap-1  hover:shadow-lg hover:border-black/20 border  rounded-xl w-[280px] cursor-pointer bg-secondary">
      <Image
      className="rounded-lg w-full"
        src={"/projectImage/project1/3.jpeg"}
        alt={""}
        height={300}
        width={300}
      />
      <p className="text-sm font-sans font-semibold truncate">Four seasons hotel Sharm El Sheikh</p>
      <p className="text-xs font-sans text-muted-foreground"><TfiLocationPin/>Abuja</p>
    </div>
  );
};
