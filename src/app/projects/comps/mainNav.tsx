import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebaseConfig';

export const MainNav = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut(auth); // Sign out from Firebase
      localStorage.removeItem('authToken'); // Clear the auth token
      router.push('/auth/signin'); // Redirect to login page
      console.log("User signed out successfully");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <nav className="flex w-full justify-between bg-card shadow-xl h-16 items-center px-8">
      <div className='flex items-center gap-4'>
        <Image
          className="cursor-pointer h-24"
          onClick={() => router.push("/projects")}
          src={"/Shan interiors Logo.svg"}
          alt={""}
          width={80}
          height={40}
        />
        Projects
      </div>

      <Button onClick={handleSignOut} variant="outline">
        Sign Out
      </Button>
    </nav>
  );
};
