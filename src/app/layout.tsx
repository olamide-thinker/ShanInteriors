"use client"

// import type { Metadata } from "next";
// import { Podkova } from "next/font/google";
import "./globals.css";
import React, { useEffect } from "react";
import { url } from "inspector";

// const podkova = Podkova({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Shan Interiors Ltd",
//   description: "Bespoke Luxury Interior Designer  ",
// };

export default function RootLayout({
  children,}: Readonly<{children: React.ReactNode;}>) {
// const [nRange, setNRange] = React.useState<any>({ text:{}, url:{}, position:{}})

// useEffect(()=>{

//   document.addEventListener('mouseup', () => {
//     const range = typeof window !== undefined && window.getSelection()?.toString().trim()
//    const position =  typeof window !== undefined && {top: window.scrollY, left: window.scrollX}
//     setNRange({text:range,
//       url:"",
//       position:position
//     })
//   })
// },[])


// console.log(nRange)


  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap" />
        <style>
          {`
            @font-face {
              font-family: 'LuziaBold';
              src: url('/fonts/luzia-bold.otf') format('opentype');
            }
            @font-face {
              font-family: 'Luzia';
              src: url('/fonts/luzia-Regular.otf') format('opentype');
            }
          `}
        </style>
      </head>
      <body className={`luzia LuziaBold`}>{children}</body>
    </html>
  );
}
