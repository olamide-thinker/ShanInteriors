import React from 'react'
import { AiFillPhone, AiOutlineWhatsApp } from 'react-icons/ai'
import { Button } from './ui/button'
import { ArrowBottomRightIcon, ArrowRightIcon } from '@radix-ui/react-icons'


export const GetInTouch = () => {
  return (
    <div className='w-full h-[500px] flex items-center justify-center'> 

<div className=' bg-card p-16  rounded-3xl max-w-[1400px] hover:shadow-2xl shadow-md hover:-mt-2'>
  <h2 className='font-[luzia] text-6xl font-bold'>Get in touch</h2>
  <form action="">
<div className='flex gap-4'>
<div className=' flex flex-col gap-2'>
<label htmlFor='name'>Name </label>
<input type='text' id='name'  className='border bg-muted rounded-md p-2'/>
</div>
<div className=' flex flex-col gap-2'>
<label htmlFor='name'>Email </label>
<input type='text' id='name'  className='border bg-muted rounded-md p-2'/>
</div>
<div className=' flex flex-col gap-2'>
<label htmlFor='name'>Phone </label>
<input type='text' id='name'  className='border bg-muted rounded-md p-2'/>
</div>
</div>

<div className=' flex flex-col gap-2'>
<label htmlFor='name'>Please brifly describe your project </label>
<input type='text' id='name'  className='border bg-muted rounded-md p-2'/>
</div>

<div className='flex w-full justify-between py-4'>
<Button className='gap-4'> Send <ArrowRightIcon/></Button>
<div className='flex gap-8'>
  <span className='flex items-center gap-0.5'><AiOutlineWhatsApp/> WhatsApp</span>
  <span className='flex items-center gap-0.5'><AiFillPhone/> +234 905 675 3221</span>
</div>
</div>


  </form>
</div>




    </div>
  )
}
