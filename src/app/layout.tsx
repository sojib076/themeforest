import type { Metadata } from "next";
import { Geist, Geist_Mono ,Pinyon_Script ,Plus_Jakarta_Sans , Poppins  } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/Hook/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Artora fonts 
const pinyonScript =  Pinyon_Script({
  weight: "400", 
  variable : "--font-pinyon-script",
  subsets : ["latin"]
});

const plusJakartaSans =  Plus_Jakarta_Sans({

  variable : "--font-plus-jakarta-sans",
  subsets : ["latin"]
});


const poppins = Poppins({
  weight: "400",
  variable: "--font-poppins",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Unlimited Landing Page",
  description: "Sojib Das  ",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}
        ${pinyonScript.variable} ${plusJakartaSans.variable}

        ${poppins.variable}
        
        antialiased`}
      >
        <SmoothScroll>{children}</SmoothScroll>

      </body>
    </html>
  );
}
