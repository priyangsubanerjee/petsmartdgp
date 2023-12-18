/* eslint-disable @next/next/no-img-element */
import { Icon } from "@iconify/react";
import React from "react";

function ContactUs() {
  return (
    <div>
      <div className="relative">
        <img
          src="https://www.pngmart.com/files/10/Christmas-Ribbon-Transparent-PNG.png"
          className="h-24 absolute top-0 right-1/2 z-10 -translate-y-[20%] translate-x-1/2 grayscale"
          alt=""
        />
        <div className="h-1 overflow-hidden bg-teal-950 items-center flex relative">
          <img
            src="https://w7.pngwing.com/pngs/214/993/png-transparent-green-ribbon-banner-purple-green-banner-blue-ribbon-flag.png"
            className="object-cover w-full scale-150 grayscale h-16"
            alt=""
          />
        </div>
      </div>
      <div className="bg-[#050e10] py-44">
        <div className="w-full flex justify-center ">
          <div className="w-1/2">
            <h1 className="text-5xl font-josefin text-white font-semibold text-right">
              Wanna talk to us?
            </h1>
            <p className="text-white/70 text-right mt-2">
              Fill in the form and we will get back to you as soon as possible.
            </p>
            <p className="text-white/70 text-right my-7 px-6 font-thin">OR</p>
            <p className="text-white text-right px-6 font-light">
              <span className="opacity-60">Call us at</span> +91 98839 23485
            </p>
            <p className="text-white text-right mt-3 px-6 font-light">
              <span className="opacity-60">Email us at</span>{" "}
              petsmart0016@gmail.com
            </p>
          </div>
          <div className="w-1/2 px-10">
            <input
              type="text"
              className="block h-12 w-[70%] bg-[#0f282e7d] px-6"
              placeholder="Name"
              name=""
              id=""
            />
            <input
              type="text"
              className="block h-12 w-[70%] bg-[#0f282e7d] px-6 mt-2"
              placeholder="Phone number"
              name=""
              id=""
            />
            <textarea
              name=""
              className="block h-36 w-[70%] bg-[#0f282e7d] p-6 mt-2"
              placeholder="Message"
              id=""
              cols="30"
              rows="10"
            ></textarea>

            <button className="h-12 w-[70%] bg-white/80 text-black hover:bg-white mt-4">
              Send
            </button>
          </div>
        </div>
        <div className="mt-32">
          <div className="flex items-center justify-center space-x-10">
            <div className="h-[1px] w-[20%] bg-white/50"></div>
            <h1 className="text-3xl font-josefin shrink-0 text-white font-semibold text-right">
              Visit us
            </h1>
            <div className="h-[1px] w-[20%] bg-white/50"></div>
          </div>

          <div className="grid grid-cols-2 gap-7 place-content-center place-items-center mt-20 max-w-5xl mx-auto">
            <div className="flex space-x-4">
              <div className="h-16 w-16 shrink-0 rounded-md bg-teal-950 text-white flex items-center justify-center">
                <Icon icon="ri:home-line" height={24} />
              </div>
              <div>
                <h2 className="font-semibold text-white">City Center</h2>
                <p className="text-white/70 mt-2 text-sm">Ph: +91 9883923485</p>
                <p className="text-white/50 font-light text-sm mt-2 leading-6">
                  Shop No - 13 , Kabiguru Sarani . SAIL CO-operative , City
                  Centre , Durgapur , West Bengal , 713216 , India
                </p>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="h-16 w-16 shrink-0 rounded-md bg-teal-950 text-white flex items-center justify-center">
                <Icon icon="ri:home-line" height={24} />
              </div>
              <div>
                <h2 className="font-semibold text-white">Bidhannagar</h2>
                <p className="text-white/70 mt-2 text-sm">Ph: +91 6297136600</p>
                <p className="text-white/50 font-light text-sm mt-2 leading-6">
                  52 Bidhannagar, Landmark : Bank Colony circle , Durgapur
                  713206 , West Bengal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
