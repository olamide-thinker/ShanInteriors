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

export const ProjectInfo = ({ content }:{content:{ title: string, location: string,
  description: string, imagesPath: string, imagesID: number[],}}) => {
console.log("123",content)

  return (
    <div className="flex flex-col gap-4 items-center z-50">
      <div className=" text-background w-[250px] bg-black/20 p-4 rounded-lg">
        <h3> BRIEF</h3>
        <Separator />
        <p className="text-sm">{content.description}</p>
      </div>

      <div className=" flex gap-4 shadow-2xl">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="h-[130px] w-[130px] group flex items-center justify-center"
          >
            <Dialog >
              <DialogTrigger>
                <Image
                  src={`/projectImage/${content.imagesPath}/${i + 1}.jpeg`}
                  alt="HeroImage"
                  width={1000}
                  height={1000}
                  className="h-full w-full object-cover border-2 rounded-lg border-background aspect-square hover:h-[140px] hover:w-[140px]"
                />
              </DialogTrigger>
              <DialogContent className="h-[85%] p-0 w-full">
               <MainSlider content={content}/>
              </DialogContent>
            </Dialog>
          </div>
        ))}
      </div>

      <Button variant="secondary" size="sm" className="rounded-full size-sm">
        View full gallery
      </Button>
    </div>
  );
};
