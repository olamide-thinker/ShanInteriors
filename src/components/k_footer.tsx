import Image from 'next/image'
import React from 'react'
import { Separator } from './ui/separator'
import { AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { TfiPinterest } from 'react-icons/tfi'
import { Button } from './ui/button'

export const Footer = () => {
  return (
    <div className=' w-full flex items-center justify-center mb-4'>
    <div className='  w-[98%] rounded-[60px] bg-white p-8 m-4  '>
        <div className=' flex w-full justify-between items-center p-8 border-b-2  border-black mb-1'>
<Image src={'/Shan interiors Logo.svg'} alt={'shan Interiors logo'} width={100} height={100}/>
<ul className=' flex gap-4'>
    <li>Menu item</li>
    <li>Menu item</li>
    <li>Menu item</li>
    <li>Menu item</li>
    <li>Menu item</li>
    </ul>
        </div>
        <div className=' border-t-2 border-dotted border-black'>

<div className=' flex w-full justify-between p-8'>
<div >
    <p>Phone: +234 XXX XXX XXXX   +234 XXX XXX XXXX</p>
    <p>Email: info@Shaninteriordesign.com</p>

</div>
<div className=' flex gap-4'>
    <Button variant={'link'} size={'icon'} className='rounded-full'>
    <AiFillInstagram size={32}/>
    </Button>
    <Button variant={'link'} size={'icon'} className='rounded-full'>
    <TfiPinterest size={32}/>
    </Button>
    <Button variant={'link'} size={'icon'} className='rounded-full'>
    <AiFillYoutube size={32}/>
    </Button>
    <Button variant={'link'} size={'icon'} className='rounded-full'>
    <AiFillLinkedin size={32}/>
    </Button>
</div>
</div>
<div className=' flex justify-between w-full px-8'>
    <p>Elevating Spaces, Realizing Visions</p>
    <p>©Shaninteriors Design - 2024</p>
</div>

        </div>
    </div>
    </div>
  )
}
