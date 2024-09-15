
'use client'

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { TfiLocationPin } from 'react-icons/tfi';
import { Project } from '@/api/types';



interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/projects/${project.id}`)}
      className="p-2 overflow-hidden border-secondary drop-shadow-sm flex flex-col gap-1 hover:shadow-lg hover:border-black/20 border rounded-xl w-[280px] cursor-pointer bg-secondary"
    >
      <Image
        className="rounded-lg w-full"
        src={"/projectImage/project1/3.jpeg"}
        alt={ project?.project_name || "" }
        height={300}
        width={300}
      />
      <p className="text-sm font-sans font-semibold truncate">{project.project_name}</p>
      <p className="text-xs font-sans text-muted-foreground">
        <TfiLocationPin /> {project.project_location}
      </p>
    </div>
  );
};
