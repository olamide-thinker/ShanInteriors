import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ArrowBottomRightIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { TfiClose, TfiLinkedin } from "react-icons/tfi";
import { AiFillInstagram, AiOutlineClose } from "react-icons/ai";
import { DialogClose } from "../ui/dialog";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";


const howWeWork =[
    {title:'Initial Consultation',
    description: "We begin with a thorough consultation to understand your vision, requirements, and budget for the project. This discussion allows us to align our approach with your expectations and goals."
    },
    {title:'Design Concept Development',
    description: "At Shan Interiors, we're passionate about creating spaces that inspire and delight. With our unique approach to design, unparalleled creativity, and unwavering commitment to excellence, we're here to help you bring your vision to life in stunning style."
    },
    {title:'Collaborative Planning',
    description: "We collaborate closely with you throughout the planning phase, discussing layouts, materials, color schemes, and any specific features or functionalities you desire. Your input is integral to shaping the final design."
    },
    {title:'Detailed Design Execution',
    description: "Once the design direction is finalized, we proceed with detailed design execution. This involves creating comprehensive plans, selecting furnishings, sourcing materials, and coordinating with contractors and suppliers."
    },
    {title:'Transparent Communication',
    description: "Throughout the project, we maintain transparent communication, keeping you informed about progress, timelines, and any developments. We are readily available to address any questions or concerns you may have."
    },
    {title:'Quality Assurance',
    description: "At Shan Interiors, we prioritize quality craftsmanship and attention to detail. We meticulously oversee every aspect of the project to ensure that the finished result meets our exacting standards and exceeds your expectations."
    },
    {title:'Project Completion & Delivery',
    description: "At Shan Interiors, we prioritize quality craftsmanship and attention to detail. We meticulously oversee every aspect of the project to ensure that the finished result meets our exacting standards and exceeds your expectations."
    },
    {title:'Post-Project Support',
    description: "Our commitment to you extends beyond project completion. We provide ongoing support and assistance, ensuring that your space continues to delight and inspire long after the project concludes."
    },
]

const team =[]



export const HowWeWorkModal = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button variant={"outline"} className=" w-fit mt-8 text-foreground">
          Learn more <ArrowBottomRightIcon />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="min-w-[75vw] border-2 bg-white">
        <AlertDialogCancel className=" absolute right-4 top-4  border-none w-fit rounded-full"> 

<AiOutlineClose size={24} className=" text-black w-fit "/>
        </AlertDialogCancel>
        <Tabs defaultValue="Work" className="">
          <TabsList className="gap-4 border-b rounded-none py-8 w-full justify-start">
            <TabsTrigger
              className=" text-[52px] font-[luzia] bg-none border-none p-0"
              value="Work"
            >
              How we work
            </TabsTrigger>
            /
            <TabsTrigger
              className=" text-[52px] font-[luzia] bg-none border-none p-0"
              value="TheTeam"
            >
              Meeting the team
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Work">
            <div className="flex ">
              <div className="bg-[url('/floraPattern2.png')]  object-fill mix-blend-multiply w-3/6 flex items-center justify-center">
                <div className=" bg-white w-[300px] h-[300px] p-8 shadow-lg">At Shan Interiors, we believe in creating timeless, elegant interiors that reflect your style and enhance your lifestyle. Our collaborative approach, attention to detail, and commitment to excellence set us apart, making us your trusted partner in bringing your interior design dreams to life.</div>
              </div>

              <ScrollArea className="max-h-[65vh] w-4/6 ">
              <div className=" p-8">
                {howWeWork.map((info, index) => (
                  <div key={index} className="w-full p-4">
                    <p className="border p-4 rounded-full w-8 h-8 flex items-center justify-center">
                      {index + 1}
                    </p>
                    <h3 className=" text-[32px] font-[luzia] font-bold">
                      {info.title}
                    </h3>
                    <p>
                      {info.description}
                    </p>
                  </div>
                ))}
              </div>
                </ScrollArea>
            </div>
          </TabsContent>
          <TabsContent value="TheTeam">
          <div className="max-w-[1100px]">
            <div className=" p-4">

          <h3 className=" text-[32px] font-[luzia] font-bold">
            Meet our team
            </h3>
            <p>
                We begin with a thorough consultation to understand your vision, requirements, and budget for the project. This discussion allows us to align our approach with your expectations and goals.
</p>
            </div>

    <ScrollArea className=" w-full"> 
    <ScrollBar orientation="horizontal"/>
<div className="flex items-end">
{/* founder */}
<div className="text-center w-fit p-4 mt-4">
    <div className=" relative flex flex-col items-center group">

                <Image 
                className=" w-[200px] h-[200px] rounded-full object-cover"
                src={"/Michael_Shan.png"} 
                alt={""}
                height={300}
                width={300}
                />
                <div className="absolute w-[200px] h-[200px] bg-black/50 border rounded-full hidden group-hover:flex items-center justify-center text-white
                 ">
                    <Button variant={'ghost'} size={'icon'} >
                <TfiLinkedin  size={24}/>
                    </Button>
                    <Button variant={'ghost'} size={'icon'}>
                     <AiFillInstagram  size={24}/>
                    </Button>
                 </div>
    </div>
                <div>
                    <p>Director</p>
                    <p
                style={{ fontFamily: "Sacramento", fontSize: "38px" }}
                className=" whitespace-nowrap"
              >Michael Shanu </p>
                </div>
            </div>

{/* other team */}
        { Array.from({length:5}).map((_,index)=>(

        <div key={index} className="text-center w-fit p-4 mt-4 flex flex-col items-center">
                <Image 
                className=" w-[180px] h-[180px] rounded-full object-cover"
                src={"/Michael_Shan.png"} 
                alt={""}
                height={300}
                width={300}
                />
                <div>
                    <p>Others</p>
                    <p
                style={{ fontFamily: "Sacramento", fontSize: "38px" }}
                className=" whitespace-nowrap"
              >Michael Shanu </p>
                </div>
            </div>
        ))   
            }
</div>
</ScrollArea>

          </div>
            </TabsContent>
        </Tabs>
      </AlertDialogContent>
    </AlertDialog>
  );
};
