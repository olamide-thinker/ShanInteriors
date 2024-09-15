import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Separator } from "../ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MainSlider } from "./mainSlider";
import { AlertDialog } from "@radix-ui/react-alert-dialog";
import { AlertDialogCancel, AlertDialogContent, AlertDialogTrigger } from "../ui/alert-dialog";
import { AiOutlineClose } from "react-icons/ai";

export const ProjectInfo = ({ content }:{content:{ 
  title: string, 
  location: string,
  description: string,  
  images: {
    Image_id: string;
    image: string 
    caption: string;
}[],}}) => {
console.log("123",content)

  return (
    <div className="flex flex-col gap-4 items-center z-50 bg-black/65 p-4 rounded-2xl">
      <div className=" text-background w-[250px] bg-black/20 p-4 rounded-lg">
        <h3> BRIEF</h3>
        <Separator />
        <p className="text-sm line-clamp-2">{content.description}</p>
      </div>

      <div className=" flex gap-4 shadow-2xl">
        {content?.images?.slice(0, 2).map((imageDetails, i) => (
          <div
            key={i}
            className="h-fit w-[130px] group flex items-center justify-center"
          >
          <AlertDialog>
             <AlertDialogTrigger>
              {imageDetails &&
              <div className="relative hover:scale-105 duration-700">
                {i == 1 && <p className="absolute z-40  h-full w-full bg-black/50 text-white items-center justify-center flex text-xl">+{(content.images.length+1)-2}</p>}
                <Image
                  src={imageDetails?.image}
                  alt="HeroImage"
                  width={1000}
                  height={1000}
                  className="h-full w-full object-cover border-2 rounded-lg border-background aspect-square "
                />
                  </div>

                }             
                </AlertDialogTrigger> 
              <AlertDialogContent className="sm:max-w-[85vw] max-w-[98vw] max-h-[99vh] sm:max-h-full  overflow-hidden p-0 border-2 bg-white">

              {/* <AlertDialogContent className="h-[85%] p-0 w-full"> */}
              <AlertDialogCancel className=" absolute sm:right-4 sm:top-4 right-1 top-1 z-40 border-none w-fit rounded-full"> 
                    <AiOutlineClose size={24} className=" text-black w-fit "/>
                </AlertDialogCancel>
               <MainSlider content={content}/>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        ))}
      </div>

     
    </div>
  );
};
