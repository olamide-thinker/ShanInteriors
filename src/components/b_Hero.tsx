'use client'
import React from "react";
import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
import { MiniAbout } from "./c_MiniAbout";
import { motion } from "framer-motion";

export const Hero = () => {

  const MULTIDIRECTION_SLIDE_VARIANTS = {
    hidden: { opacity: 0, x: "-25vw" },
    visible: { opacity: 1, x: 0 },
    right: { opacity: 0, x: "25vw" },
  };



  return (
    <div className=" w-full relative  flex  items-center   mt-24">


        {/* Background image */}
      <Image
        src="/hero_background.jpg"
        alt="HeroImage"
        priority
        width={1000}
        height={1000}
        className="w-full rounded-md object-cover absolute top-0 h-full -z-20 "
      />


        {/* Foreground text */}
      <div className="  flex  flex-col font-[luzia] w-full h-[90vh] p-4 justify-center items-center bg-[#140900]/35 bg-blend-multiply text-background z-20 text-[90px] pt-50% pb-4">
        <div className="flex flex-col gap-8">
        <motion.h1
        initial="hidden"
        animate="visible"
        variants={MULTIDIRECTION_SLIDE_VARIANTS}
        transition={{ duration: 1 }}
        className="leading-tight font-[luzia] -mb-14"
      >
        Elevating Spaces,
      </motion.h1>



      <motion.h1
        initial="right"
        animate="visible"
        variants={MULTIDIRECTION_SLIDE_VARIANTS}
        transition={{ duration: 1 }}
        className="font-display "
        style={{ fontFamily: "luziaBold" }}
      >
         Realizing Visions
      </motion.h1>






        {/* <h1 className=" leading-tight font-[luzia]">
          Elevating Spaces, <br />
          <span style={{ fontFamily: "luziaBold" }} className="block">
            Realizing Visions
          </span>
        </h1> */}






{/* <MiniAbout/> */}
        </div>
      </div>


    </div>
  );
};
