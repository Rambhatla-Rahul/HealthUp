"use client";
import FeaturesSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";

import Image from "next/image";
import { useState } from "react";
import { ThemeProvider } from "next-themes";
export default function Home() {
  const [isModalOpen,setIsModalOpen] = useState(true);
  return (
    
      <main className="flex flex-col gap-[32px] md:row-start-2 items-center sm:items-start bg-gradient-hero bg-[url('/hero-img.webp')] bg-cover bg-center w-full relative overflow-y-scroll h-[100vh]">
        {/* <Image className="object-cover fixed top-0 left-0" src={`/hero-img.webp`} alt="Hero Image" fill/> */}
        <HeroSection/>
        <FeaturesSection/>
      </main>
        
    
  );
}
