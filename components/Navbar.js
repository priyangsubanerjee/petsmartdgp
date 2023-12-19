import { Icon } from "@iconify/react";
import React from "react";

function Navbar() {
  return (
    <div className="p-12 flex items-center sticky top-0  bg-gradient-to-b from-black via-black/40 to-transparent">
      <img src="/logo.png" className="h-20" alt="" />
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
  );
}

export default Navbar;
