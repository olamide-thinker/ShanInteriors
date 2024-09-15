"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react";
import { AddProjectCard } from "./addProjectCard";
import { ProjectCard } from "./ProjectCard";
import { Project_card } from "./project_card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useGetProjectsQuery } from "@/api/projectApi";
import { useRouter } from "next/navigation";

export const SideBar = () => {

    const { data: projects, error, isLoading } = useGetProjectsQuery();

    console.log("_______>",projects)
  
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: </p>;
  

  return (
    <div className="px-4 py-6 w-[400px] relative space-y-4 ">

        {/* <h2 className=" text-xl font-bold mb-1">Projects</h2> */}
      <div className="flex justify-between w-full">
        <AddProjectCard />
        {/* <Separator className="h-1 bg-accent/50" /> */}
        {/* <Button variant={'outline'}> <Icon icon="carbon:add" width="1.2em" height="1.2em" /></Button> */}
      </div>
      <ScrollArea className=" h-[85vh] scroll-smooth rounded-2xl">
        <div className="space-y-2">
      {projects && projects?.map((project:any) =>(
        
        <Project_card key={project.id} project={project} />

    ))}
        </div>
      </ScrollArea>
      {/* <div className="w-fit gap-2 flex  items-center ">
        <div className="flex gap-2  items-center py-2 rounded-md bg-card px-8">
          <TfiSearch /> Search list
        </div>
      </div> */}
    </div>
  );
};
