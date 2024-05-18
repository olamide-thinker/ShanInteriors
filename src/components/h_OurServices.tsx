"use client"
import React,{ useRef }  from "react";
import { SectionHeading } from "./Comps/sectionHeading";
import Image from "next/image";
import { ServiceCard } from "./Comps/serviceCard";
import { motion,  useInView  } from "framer-motion";



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

       
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });



  return (
    <div className="w-full flex flex-col items-center">
      <SectionHeading headingText={"Our Services"} />
      <div className=" max-w-[800px] sm:max-w-[1330px]">
      <p className=" px-16 mb-4">
        Our passion for creating beautiful and functional spaces that reflect
        the uniqueness of our clients sets us apart. Here&apos;s a glimpse of
        what we can do for you;
      </p>
      <div className=" flex flex-wrap gap-2 justify-center overflow-hidden"
      ref={ref}
      >
        {/* {Array.from({ length: 5 }).map((_, i) => ( */}
        {services.map((service, i)=> {


        return (
          <motion.div key={i}
          transition={{ duration: 2 }} 
          style={{
            transform: isInView ? "none" : `translateY(${1200*i}px )`,
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
          >
            <motion.div className="w-[300px] hover:shadow-2xl shadow-accent sm:w-[250px] h-[500px] rounded-[30px] space-y-2 p-8 pt-4 text-center group flex flex-col border place-items-center border-accent bg-white hover:bg-accent/35 hover:border-black hover:border-2">
              <Image
                src={service.image}
                alt={service.title}
                width={500}
                height={500}
                className="h-[200px] w-[200px] group-hover:w-[150px] group-hover:h-[150px] mix-blend-multiply"
              />
              <h3 className=" text-3xl font-[luzia]">{service.title}</h3>
              <p className=" text-sm "> { service.brief} </p>
            </motion.div>
          </motion.div>
        )}
        )}
      </div>
      </div>
    </div>
  );
};
