'use client'
import { Input } from '@/components/ui/input';
import React from 'react';
import { useForm } from 'react-hook-form';


import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
  


export function AddProjectForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);
  
  return (

    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4  justify-center p-4 w-[600px] border rounded-lg bg-card shadow-lg'>
      <div>
        <h2>Project Details</h2>
      </div>


      <Input type="text" id="title" placeholder="Project name" {...register("title", {required: true, maxLength: 80})} />
      

      <Input type="text" id='location' placeholder="Project location" {...register("location", {required: true, maxLength: 100})} />
      

      <Textarea id='description' placeholder="describe this project" {...register("description", {required: true, maxLength: 100})} />

<Button  type="submit"> Create project </Button>

    </form>
  );
}