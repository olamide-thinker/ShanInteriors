import React from 'react'
import { Separator } from '../ui/separator'

export const SectionHeading = ({headingText}:{headingText: string}) => {
  return (
    <div className='w-full my-8'>
        <h2 className='ml-16 sm:ml-40 text-[24px] mb-4'>{headingText}</h2>
        <Separator/>
    </div>
  )
}
