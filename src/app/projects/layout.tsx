"use client"

import React from "react";
import { SideBar } from "./comps/sideBar";
import { MainNav } from "./comps/mainNav";
import { useRouter } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {

  const router = useRouter();

  React.useEffect(()=>{
console.log("-------------------->>>",localStorage.getItem('authToken'))

    if (localStorage.getItem('authToken') === null){
      router.push('/auth/signin'); // Redirect to login page
    }
  },[router]);

  return (
    <div className="min-h-screen overflow-hidden" >
    
<MainNav/>

        <div className="flex  h-full w-full bg-card  px-4">
     <SideBar/>
      <div className="w-full bg-secondary rounded-3xl shadow-2xl  border-accent">{children}</div>
    </div>
    </div>
  );
};

export default Layout;
