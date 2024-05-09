'use client'
import React from "react";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
import { Button } from "../ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

// const Projectcontent = [
//     { title: 'Four seasons hotel', 
//     location: "Sharm El Sheikh", 
//     description: "Loremss ipsum dolor sit amet consectetur. Nascetur condimentum enim ac sociis tellus pulvinar mi id. Orci curabitur dolor a posuere. Vulputate in feugiat libero dui eu vel aliquet suscipit. ", 
//     imagesPath:'project1', 
//     imagesID:[ 1,2,3,4,5,6] },
//   ];


export const MainSlider = ({content}:{content:{ title: string, location: string,
    description: string, imagesPath: string, imagesID: number[],}}) => {
// const [imagePath, setImagePath] = React.useState('project1')
const [imageId, setImageId] = React.useState(1)
  
console.log('>>>',content)

const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })

      )


  return (

        <div className="flex w-[100%]  justify-between ">
  <div className=" relative  h-full flex ">
  
      <Image 
      src={`/projectImage/${content.imagesPath}/${imageId}.jpeg`} 
      alt={""}
      width={1000}
      height={1000}
      className="object-cover "
      />
   

  
      <div className="flex absolute top-[50%] justify-between w-[100%] items-center p-4">
      <Button className="w-[42px] h-[42px]" variant={'outline'}   size={'icon'}
      disabled={ imageId <= 1 }
      onClick={()=>{setImageId(imageId -1)}}><ChevronLeftIcon/></Button>

      <Button className="w-[42px] h-[42px]" variant={'outline'} size={'icon'}
        disabled={ imageId >= content.imagesID.length }
      onClick={()=>{ setImageId(imageId +1)}}><ChevronRightIcon/></Button>

      </div>
  
  </div>
  
  
  
  
  <div className="w-[450px] p-4 space-y-4">
      <div>
          <h2 className=" text-3xl border-b pb-2 my-4">{content.title}</h2>
          <p>{content.description}</p>
      </div>
      <div className=" flex flex-wrap  gap-4">
          {content.imagesID.map((image:any, i:any)=>(
              <div key={i} className={`h-[100px] w-[100px] overflow-hidden rounded-lg ${imageId === image && "ring-4 ring-accent border-white border-2 shadow-lg"}`}
              onClick={()=> setImageId(image)}
              >
                  <Image 
                  src={`/projectImage/${content.imagesPath}/${image}.jpeg`} 
                  alt={""}
                  width={200}
                  height={200}
                  className="h-full object-cover"
                  />
              </div>
          ))}
      </div>
  </div>
  
        </div>


  );
};