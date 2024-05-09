// "use client"
import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { TfiLinkedin } from "react-icons/tfi";
import { AiFillInstagram } from "react-icons/ai";

export const MiniAbout = () => {
  return (
    <div className=" max-w-[100%] bg-black/70 text-background p-0 border-none rounded-[10px] hidden sm:block">
      <div className=" flex flex-wrap md:flex-nowrap  gap-2 text-[20px] leading-tight py-0 w-full justify-center items-center">
        <div className=" min-w-[430px] px-2 h-fit justify-center flex border-black/30 border-r-2 ">
          <div className=" md:flex gap-4  py-0 bg-white/20 items-center pr-4 overflow-hidden rounded-md hidden ">
            <Image
              src={"/Michael_Shan.png"}
              alt={""}
              height={200}
              width={200}
              className="w-[130px] h-[130px] object-cover"
            />
            <div className="space-y-2">
              <p>Our Director</p>
              <h3
                style={{ fontFamily: "Sacramento", fontSize: "38px" }}
                className=" whitespace-nowrap"
              >
                Micheal Shanu
              </h3>
              <div className=" flex gap-4">
                <TfiLinkedin size={28} />
                <AiFillInstagram size={32} />
              </div>
            </div>
          </div>
        </div>

        <div className=" flex  w-full m-4 ">
          <div className=" w-[250px] border-black/30 border-r-2  p-2 text-[16px]">
            <h2 className=" opacity-60 font-bold">Our vision</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nascetur condimentum enim
              ac sociis tellus pulvinar mi id.
            </p>
          </div>

          <div className=" w-[250px] border-black/30 border-r-2  p-2 text-[16px]">
            <h2 className=" opacity-60 font-bold">Our Mission</h2>
            <p>
              “ To transform spaces into personalized sanctuaries that reflect
              the unique style and vision of each client, through innovative
              design solutions and impeccable craftsmanship”
            </p>
          </div>
          <div className=" md:w-[250px] p-2 text-[16px]">
            <h2 className=" opacity-60 font-bold">Core Values</h2>
            <ul>
              <li>C - Commitment</li>
              <li>R - Reliability</li>
              <li>I - Innovation</li>
              <li>S - Serenity</li>
              <li>P - Professionalism</li>
              <li>E - Excellence</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
