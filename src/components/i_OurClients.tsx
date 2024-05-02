'use client'
import React from "react";
import { SectionHeading } from "./Comps/sectionHeading";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const companies = [
  { logo: "/companyLogo.png", name: "Company" },
  { logo: "/companyLogo.png", name: "Company 2" },
  { logo: "/companyLogo.png", name: "Company 3" },
  { logo: "/companyLogo.png", name: "Company 4" },
  { logo: "/companyLogo.png", name: "Company 5" },
];

export const OurClients = () => {

    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
      )


  return (
    <div>
      <SectionHeading headingText={"Our Clients"} />

      <div className=" flex gap-4 w-full justify-center">


      <Carousel
       plugins={[plugin.current]}
      >
  <CarouselContent>
   
        {companies.map((comp, i) => (
          <CarouselItem   key={i} className="h-[200px] w-fit  flex flex-col items-center md:basis-1/2 lg:basis-1/4 mix-blend-multiply">
            <Image
              src={comp.logo}
              alt="HeroImage"
              width={1000}
              height={1000}
              className="h-full w-full object-contain  rounded-lg border-background mix-blend-multiply"
            />
            <p>{comp.name}</p>
          </CarouselItem>
        ))}
  </CarouselContent>
  {/* <CarouselPrevious />
  <CarouselNext /> */}
</Carousel>


      </div>
    </div>
  );
};
