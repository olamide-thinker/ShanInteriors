import React from "react";
import { SectionHeading } from "./Comps/sectionHeading";
import Image from "next/image";
import { ServiceCard } from "./Comps/serviceCard";

const services = [
    {
        image: "/ServiceImage1.png",
        title: "Quick Consultation",
        brief: "  Our team can provide swift guidance and personalized advice tailored to your interior design needs. Click now to schedule your consultation and embark on your journey to a beautifully curated space",
    },
    {
        image: "/ServiceImage2.png",
        title: "Expert Professional Design",
        brief: " Our design team is readily available to offer 3D renditions tailored to the unique ideas of our client.",
    },
    {
        image: "/ServiceImage2.png",
        title: "Space Optimization",
        brief: "Our space planning and optimization techniques transforms even the most challenging layouts into beautiful spaces.",
    },
    {
        image: "/ServiceImage3.png",
        title: "Design Management",
        brief: "Our unique management of our client’s project from inception to final delivery ensures that our client’s vision is translated into reality within a set timeframe and budget.",
    },
    {
        image: "/ServiceImage4.png",
        title: "Procurement",
        brief: "Our procurement service is your gateway to accessing the finest furniture and decor elements, meticulously curated to elevate your space to new heights of elegance and functionality.",
    },
]

export const OurServices = () => {
  return (
    <div>
      <SectionHeading headingText={"Our Services"} />
      <p className=" px-16 mb-4">
        Our passion for creating beautiful and functional spaces that reflect
        the uniqueness of our clients sets us apart. Here&apos;s a glimpse of
        what we can do for you;
      </p>
      <div className=" flex flex-wrap gap-8 justify-center">
        {/* {Array.from({ length: 5 }).map((_, i) => ( */}
        {services.map((service, i) => (
          <div key={i}>
            <div className="w-[350px] h-[400px] rounded-[30px] space-y-2 p-8 pt-4 text-center flex flex-col border place-items-center border-accent bg-white">
              <Image
                src={service.image}
                alt={service.title}
                width={500}
                height={500}
                className="h-[200px] w-[200px]"
              />
              <h3 className=" text-2xl font-[luzia]">{service.title}</h3>
              <p className=" text-sm"> { service.brief} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
