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
    <div className=' w-full flex flex-col items-center justify-between'>
       
       {/* <div className='w-full flex flex-col items-center bg-foreground text-background p-2'>
        <p className=' text-sm leading-loose tracking-wider'>
        Transforming spaces since 2017
        </p>
       </div> */}
       <div className='flex px-4 p-2 h-24 pt-4 sm:justify-center md:justify-between sm:px-16 items-center w-full '>
        <div>
        <Image className='w-32 sm:w-24' src={"/Shan interiors Logo.svg"} alt={'Shan Interiors Logo'} width={100} height={100}/>
        <p className=' text-xs leading-loose tracking-wider'>
          Transforming spaces since 2017...
        </p>
        </div>
    
          <ul className='  gap-4 font-bold h-4 items-center text-[20px] hidden md:flex'>
            {menuItem.map((item, i)=>(
            <li key={i} className=' border-accent hover:border-b-4 focus:border-b-accent'> {item.label} </li>
            ))}
          </ul>
        
       </div>
    </div>
  )
}
