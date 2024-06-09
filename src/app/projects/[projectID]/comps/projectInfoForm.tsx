'use client'
import { Input } from '@/components/ui/input';
import React from 'react';
import { useForm } from 'react-hook-form';


import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { InputSwitcher } from './inputSwitcher';
import { ScrollArea } from '@/components/ui/scroll-area';
import { TfiLocationPin } from 'react-icons/tfi';
import { Separator } from '@/components/ui/separator';
import { BackButton } from './backButton';
  


export function ProjectForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);
  
  return (
<div className='flex flex-col items-center'>
<BackButton/>
<ScrollArea className='h-[73vh] border-black  w-[450px] py-8 p-4 '>

    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-8 h-full p-4'>


<div>

<p className='text-sm text-muted-foreground mx-1'>Project</p>
<Separator className='bg-accent/50  mb-2'/>
<div className=''>
<InputSwitcher name={'title'} placeHolder={' Project Handsome'} multiLine className={'text-4xl font-bold'}/>
<div className='flex gap-1 bg-secondary p-1 w-fit rounded-lg pr-4'>

<TfiLocationPin/><InputSwitcher name={'location'} placeHolder={'Project location'} className={'text-sm'}/>
</div>
</div>
</div>

<div>

<p className='text-sm text-muted-foreground mx-1'>Project description</p>
<Separator className='bg-accent/50 mb-2'/>
<InputSwitcher name={'description'} multiLine placeHolder={'Project description'} className={' text-md font-medium'}/>
</div>

{/* 
      <Input type="text" id="title" placeholder="Project name" {...register("title", {required: true, maxLength: 80})} />
      

      <Input type="text" id='location' placeholder="Project location" {...register("location", {required: true, maxLength: 100})} /> */}
      

      

{/* <Button  type="submit"> Save details </Button> */}
    </form>
</ScrollArea>
</div>
  );
}