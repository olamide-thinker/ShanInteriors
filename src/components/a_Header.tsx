import Image from 'next/image'
import React from 'react'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"



const menuItem = [
  {label:"Our Project", href:"/"},
  {label:"How we work ", href:"/"},
  {label:"Our services", href:"/"},
  {label:"Contact us", href:"/"},
]



export const Header = () => {
  return (
    <div className=' w-full border flex flex-col items-center justify-between'>
       
       <div className='w-full flex flex-col items-center bg-foreground text-background p-2'>
        <p className=' text-sm leading-loose tracking-wider'>
        Transforming spaces since 2017
        </p>
       </div>
       <div className='flex p-2 h-28 justify-center md:justify-between sm:px-16 items-center w-full'>
        <Image className='w-32 sm:w-24' src={"/Shan interiors Logo.svg"} alt={'Shan Interiors Logo'} width={100} height={100}/>
    
          <ul className='  gap-4 font-bold h-4 items-center text-[20px] hidden md:flex'>
            {menuItem.map((item, i)=>(
            <li key={i} className=' border-accent hover:border-b-4 focus:border-b-accent'> {item.label} </li>
            ))}
          </ul>
        
       </div>
    </div>
  )
}
