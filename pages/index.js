/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Button } from "@nextui-org/react";
import { Icon } from "@iconify/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <section className="lg:h-screen lg:min-h-[600px] lg:max-h-[1000px] h-[500px] bg-orange-50 relative">
        <img
          src="https://www.neurascapes.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdcigzqcd7%2Fimage%2Fupload%2Fv1700761285%2Ftest%2Fmsg3pfycwvuht6tmntem.webp&w=3840&q=75"
          alt=""
          className="object-cover w-full h-full brightness-75"
        />
        <div className="absolute inset-0 z-10 flex flex-col h-full w-full bg-gradient-to-b from-black to-transparent">
          <div className="p-12 flex items-center">
            <img src="/logo.png" className="h-12" alt="" />
            <ul className="text-white/70 flex text-sm items-center space-x-12 ml-auto">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Testimonials</li>
            </ul>
            <button className="h-9 px-5 text-sm rounded-full bg-white ml-10">
              Contact us
            </button>
          </div>

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
      <section className="h-1 overflow-hidden bg-teal-950 border--2 border-teal-600 items-center flex">
        <img
          src="data:image/jpeg;base64,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"
          className="object-cover w-full scale-105 h-16"
          alt=""
        />
      </section>
      <section className="py-24 bg-neutral-950">
        <p className="text-white/70 text-lg font-light tracking-[5px] text-center">
          BRANDS WE TRUST ON
        </p>
      </section>
      <section className="h-1 overflow-hidden bg-teal-950 border--2 border-teal-600 items-center flex">
        <img
          src="data:image/jpeg;base64,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"
          className="object-cover w-full scale-105 h-16"
          alt=""
        />
      </section>
      <section className="flex">
        <div className="w-[40%]">
          <img
            src="https://images.squarespace-cdn.com/content/v1/589b5054440243b575b569a8/1682426778911-VBZ4MVNYYKBOBAO71OPT/DA006-TheDogAssembly-BorderCollie5.jpg?format=2500w"
            className="object-cover w-full max-h-[550px]"
            alt=""
          />
        </div>
        <div className="w-[60%] px-16 flex flex-col justify-center relative">
          <h2 className="font-thin text-transparent leading-[1.3] w-full bg-gradient-to-r from-white to-white via-yellow-200 bg-clip-text text-5xl">
            What drives us to provide the best care for your pets ?
          </h2>
          <p className="text-white/80 leading-9 text-base mt-5 font-thin">
            Quality pet care is not just a service; it&apos;s a promise to
            nurture, protect, and love a furry friend who depends on us for
            their entire world. Choosing the best pet care is akin to making a
            promise to prioritize your pet&apos;s needs, whether it&apos;s
            regular veterinary check-ups, a balanced and nutritious diet, proper
            grooming, or sufficient exercise. This commitment reflects a deep
            understanding of the bond between humans and animals, recognizing
            that pets rely on their owners for their overall well-being.
          </p>

          <button className="w-fit group text-white/70 hover:text-white bg-white/0 py-3 flex items-center rounded-full mt-10 relative">
            <div className="w-0 group-hover:w-full absolute inset-x-0 bottom-0 h-[1px] bg-white transition-all"></div>
            <span className="text-inherit font-light tracking-wide text-base transition-all">
              Begin an adventure with us today
            </span>
            <Icon height={20} className="ml-2" icon="mdi:arrow-right" />
          </button>
        </div>
      </section>
    </main>
  );
}
