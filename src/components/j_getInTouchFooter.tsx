import React from 'react'
import { Separator } from './ui/separator'
import { ArrowTopRightIcon } from '@radix-ui/react-icons'
import { Button } from './ui/button'

export const GetInTouchFooter = () => {
  return (
    <div className=' w-full md:p-16 items-center flex flex-col justify-center' > 
      <div className=' bg-[url("/SampleImage.png")] bg-cover items-end flex justify-center pb-8 border w-[90%] h-[400px] md:rounded-[60px] bg-black rounded-[30px]'>
       <Button variant={"outline"} size={'lg'} className=' font-bold sm:text-[32px] text-2xl sm:p-8 rounded-full'>Get in touch today ! <ArrowTopRightIcon/></Button>
      </div>
      <div className=' flex gap-2 w-full px-8 sm:pl-48 opacity-25 font-bold'>
      <p className=' text-lg'>We delight hearing from you </p>
      
      {/* <div className=' flex gap-4'>
        <p className=' font-[luzia] font-bold text-2xl '>Hilton Hotel</p>
        <p className=' font-[luzia] font-bold text-2xl '>ABC Company</p>
        <p className=' font-[luzia] font-bold text-6xl '>Radisson</p>
        <p className=' font-[luzia] font-bold text-2xl '>Dangote</p>
      </div> */}
      </div>
       </div>
  )
}
