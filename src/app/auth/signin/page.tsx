"use client"

import React, { useState } from 'react';
import 'firebase/auth';
import { auth } from "../../../firebaseConfig";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
   const router = useRouter()

    const handleSignIn = async () => {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const idToken = await userCredential.user.getIdToken();
        localStorage.setItem('authToken', idToken)
        if(idToken){
          router.push("/projects")
        }
      } catch (error) {
        console.error('Sign-in error', error);
      }
    };
  
    return (
      <div className='w-screen h-screen border flex items-center justify-center'>
        <Card className='w-60  bg-card z-20'>
          <CardHeader className='flex items-center justify-center p-0 m-0'>

          <Image
        className=" cursor-pointer h-24"
          src={"/Shan interiors Logo.svg"}
      alt={""}
      width={80}
      height={40}
      />

          </CardHeader>
          <CardContent >

        <Label htmlFor='email'> Email</Label>
        <Input
        id='email'
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

         <Label htmlFor='email'> Password</Label>
        <Input
        id='email'
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className='pt-2'>

        <Button className='w-full' onClick={handleSignIn}>Sign In</Button>
        </div>
          </CardContent>
        </Card>

        <Image
        className=" cursor-pointer h-full w-full absolute"
          src={"/login_place_holder_Images.jpg"}
      alt={""}
      width={800}
      height={800}
      />


      </div>
    );
  };
  
  export default SignIn;