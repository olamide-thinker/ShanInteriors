import Image from 'next/image'
import React from 'react'

export const ServiceCard = () => {
  return (
    <div className='w-[300px] h-[400px] border-accent rounded-[30px] space-y-2 p-8 pt-2 text-center flex flex-col border-2 place-items-center bg-white'>

<Image src={'/ServiceImage1.png'} alt={'Quick Consultation'} width={200} height={200}/>
<h3 className=' text-2xl font-[luzia]'>Quick Consultation</h3>
<p className=' text-sm'>Our team can provide swift guidance and personalized advice tailored
to your interior design needs. Click now to schedule your consultation and embark on your
journey to a beautifully curated space!</p>

</div>


  )
}
