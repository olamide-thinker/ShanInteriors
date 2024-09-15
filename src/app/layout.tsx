"use client"

import "./globals.css";
import React from "react";
import { Provider } from 'react-redux';
import { store } from '../api/store';
import { Toaster } from "@/components/ui/toaster";


// const podkova = Podkova({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Shan Interiors Ltd",
//   description: "Bespoke Luxury Interior Designer  ",
// };



export default function RootLayout({
  children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap" />
        {/* <style>
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
        </style> */}
      </head>
      <body className={`luzia LuziaBold`}>
      <Provider store={store}>

        {children}
        <Toaster />
      </Provider>
        </body>
    </html>
  );
}
