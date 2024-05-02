import React from "react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { MiniAbout } from "./c_MiniAbout";

export const Hero = () => {
  return (
    <div className=" w-full relative  border">


        {/* Background image */}
      <Image
        src="/SampleImage.png"
        alt="HeroImage"
        width={1000}
        height={1000}
        className="w-full rounded-md object-cover absolute top-0 h-full -z-20 "
      />


        {/* Foreground text */}
      <div className="  flex  flex-col font-[luzia] w-full h-[100vh] p-4 justify-end items-center bg-black/50 text-background z-20 text-[70px] pt-32 pb-4">
        <div className="flex flex-col gap-8">
        <h1 className=" leading-tight font-[luzia]">
          Elevating Spaces, <br />
          <span style={{ fontFamily: "luziaBold" }} className="block">
            Realizing Visions
          </span>
        </h1>
<MiniAbout/>
        </div>
      </div>


    </div>
  );
};
