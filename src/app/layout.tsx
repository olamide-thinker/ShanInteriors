import type { Metadata } from "next";
import { Podkova } from "next/font/google";
import "./globals.css";

const podkova = Podkova({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shan Interiors Ltd",
  description: "Bespoke Luxury Interior Designer  ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
      <body className={`${podkova.className} luzia LuziaBold`}>{children}</body>
    </html>
  );
}
