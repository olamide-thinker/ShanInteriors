"use client"
import { Button } from '@/components/ui/button'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { useRouter } from 'next/navigation'
import React from 'react'

export const BackButton = () => {
    const router = useRouter()
  return (
    <Button 
onClick={()=>{
router.back()
}}
size={'sm'} variant={'outline'}
className='w-[90%] mt-2'>
<ArrowLeftIcon className=' text-3xl mr-1'/> back
</Button>
  )
}
