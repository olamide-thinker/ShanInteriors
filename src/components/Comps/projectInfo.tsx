import React from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { Separator } from '../ui/separator'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"


export const ProjectInfo = () => {
  return (
    <div className='flex flex-col gap-4 items-center z-50'>
        <div className=' text-background w-[250px] bg-black/20 p-4 rounded-lg'>

        <h3> BRIEF</h3>
     <Separator/>
        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur. Nascetur condimentum enim ac sociis tellus pulvinar mi id. Orci curabitur dolor a posuere. Vulputate in feugiat libero dui eu vel aliquet suscipit.   </p>
        </div>

       
        <div className=' flex gap-4 shadow-2xl'>
<div className='h-[130px] w-[130px] group flex items-center justify-center'>
<Image  src="/SampleImage.png"
        alt="HeroImage"
        width={1000}
        height={1000}
        className="h-full w-full object-cover border-2 rounded-lg border-background aspect-square hover:h-[140px] hover:w-[140px]"
        />
</div>
     
<div className='h-[130px] w-[130px] group flex items-center justify-center'>
        <Image  src="/SampleImage.png"
        alt="HeroImage"
        width={1000}
        height={1000}
        className="h-full w-full  object-cover border-2 rounded-lg border-background aspect-square hover:h-[140px] hover:w-[140px]"
        />
</div>

<div className='h-[130px] w-[130px] group flex items-center justify-center'>
        <Image  src="/SampleImage.png"
        alt="HeroImage"
        width={1000}
        height={1000}
        className="h-full w-full object-cover border-2 rounded-lg border-background aspect-square hover:h-[140px] hover:w-[140px]"
        />
        </div>

        </div>
      
      
        <Button variant="secondary" size="sm" className='rounded-full size-sm'>View full gallery</Button>

    </div>
  )
}
