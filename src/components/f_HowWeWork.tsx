import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { ArrowBottomRightIcon } from "@radix-ui/react-icons";
import { SectionHeading } from "./Comps/sectionHeading";

export const HowWeWork = () => {
  return (
    <div className="  bg-white pb-8 w-fit">
         <SectionHeading headingText={'How we work'}/>
    <div className="h-fit w-fit flex gap-4 px-4 md:px-16 flex-col sm:flex-row ">
      {/* left side  */}
      <div className=" w-full sm:w-[600px] max-w-[600px] h-full">
        <div className="relative  w-full min-h-fit ">
            <div  className="relative z-[10]">

          <svg
            viewBox="0 0 740 880"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M744 0H0V882H744V0ZM75.4429 17.4409C40.5391 14.7522 10.7554 42.3928 10.835 77.3999L12.4849 804.95C12.564 839.829 42.2637 867.29 77.042 864.641L677.869 818.874C709.148 816.491 733.312 790.417 733.312 759.047V123.671C733.312 92.3213 709.177 66.2559 677.92 63.8484L75.4429 17.4409Z"
              className="fill-white w-full h-full z-[2]"
              />
          </svg>
              </div>
          <div className=" bg-black h-full w-full top-0 absolute ">
            <Image
              src="/SampleImage.png"
              alt="HeroImage"
              width={1000}
              height={1000}
              className={` object-cover  top-0 h-full  w-full `}
            />
          </div>
        </div>
      </div>
      {/* right side */}
      <div className=" w-full sm:w-[400px] p-8 pt-0  flex flex-col justify-center ">
        <h2 className=" font-[luzia] font-bold text-[62px] leading-none">How we work</h2>
        <p className="w-full">
          At Shan Interiors, we&apos;re passionate about creating spaces that
          inspire and delight. With our unique approach to design, unparalleled
          creativity, and unwavering commitment to excellence, we&apos;re here to
          help you bring your vision to life in stunning style.
        </p>
        <Button variant={"outline"} className=" w-fit mt-8">
          Learn more <ArrowBottomRightIcon />
        </Button>
      </div>
    </div>
    </div>
  );
};
