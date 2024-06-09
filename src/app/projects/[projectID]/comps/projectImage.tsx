"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { TfiClose } from "react-icons/tfi";

export const ProjectImage = () => {
  const [hovering, setHovering] = React.useState(false);

  return (
    <div
    onMouseOver={()=>{
        setHovering(true)
    }}
    onMouseLeave={()=>{
        setHovering(false)
    }}
    className="relative">

      {hovering && <Button
          size={"icon"}
          variant={"destructive"}
          className="rounded-full absolute top-2 right-4"
        >
          {" "}
          <TfiClose />{" "}
        </Button>
      }

      <Image
        src={"/projectImage/project2/3.jpeg"}
        className="w-[260px] object-cover rounded-lg"
        alt={"image-2"}
        height={500}
        width={500}
      />
    </div>
  );
};
