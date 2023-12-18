/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Button } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import HeroSection from "@/components/Fragments/HeroSection";
import Brands from "@/components/Fragments/Brands";
import About from "@/components/Fragments/About";
import ContactUs from "@/components/Fragments/ContactUs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Brands />
      <About />
      <ContactUs />
    </main>
  );
}
