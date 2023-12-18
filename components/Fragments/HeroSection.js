/* eslint-disable @next/next/no-img-element */
import { Button } from "@nextui-org/react";
import React from "react";
import Navbar from "../Navbar";

function HeroSection() {
  return (
    <section className="lg:h-screen lg:min-h-[600px] lg:max-h-[1000px] h-[500px] bg-orange-50 relative">
      <img
        src="https://www.neurascapes.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcigzqcd7%2Fimage%2Fupload%2Fv1700761285%2Ftest%2Fmsg3pfycwvuht6tmntem.webp&w=3840&q=75"
        alt=""
        className="object-cover w-full h-full brightness-50"
      />
      <div className="absolute inset-0 z-10 flex flex-col h-full w-full">
        <Navbar />
        <div className="flex items-center justify-center my-auto">
          <div className="w-fit h-fit flex flex-col items-center justify-center p-20 bg-black/0 ">
            <h1 className="text-7xl text-center font-semibold text-white font-serif">
              Spoil the tail you love
            </h1>
            <p className="text-white/70 text-base mt-5 italic">
              {`"`} Playful and memorable, emphasizes treating your pet like
              royalty. {`"`}
            </p>
            <div className="flex items-center justify-center space-x-5 mt-16">
              <Button className="rounded-full bg-transparent border border-white text-white text-base h-12">
                <span className="px-6">Contact us</span>
              </Button>
              <Button className="rounded-full bg-white border border-white text-black text-base h-12">
                <span className="px-6">Locate us</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
