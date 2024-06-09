import { Separator } from "@/components/ui/separator";
import React from "react";
import { TfiSearch } from "react-icons/tfi";
import { AddProjectCard } from "./comps/addProjectCard";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-card">
      <div className="sm:max-w-[85vw] max-w-[98vw] max-h-[99vh] sm:max-h-full w-full h-[85vh]  overflow-hidden p-0  rounded-[40px] bg-background flex flex-col items-center shadow-2xl">
        <div className="px-16 py-6 flex justify-between items-center w-full">
          <div>
            <h2 className="font-[luzia] text-5xl font-bold mb-1">Projects</h2>
          </div>
          <div className="w-fit gap-2 flex  items-center ">
            <div className="flex gap-2  items-center py-2 rounded-md bg-card px-8">
              <TfiSearch /> Search list
            </div>
            <AddProjectCard />
          </div>
        </div>
        <Separator className="h-2 bg-accent/50" />
        {children}
      </div>
    </div>
  );
};

export default layout;
