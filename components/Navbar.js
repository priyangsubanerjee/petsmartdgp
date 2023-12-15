import { Icon } from "@iconify/react";
import React from "react";

function Navbar() {
  return (
    <div className="">
      <div className="flex bg-gradient-to-r via-white w-full h-16 lg:h-20 items-center px-6 lg:px-16">
        <div className="lg:hidden mr-5">
          <button>
            <Icon height={24} icon="basil:menu-solid" />
          </button>
        </div>
        <div className="flex items-center">
          <div>
            <h1 className="text-xl font-josefin font-semibold lg:text-2xl">
              Pet Smart
            </h1>
            <p className="text-xs text-neutral-600">
              Providing the best care for your pets
            </p>
          </div>
          <ul className="hidden text-sm text-neutral-700 lg:flex  items-center space-x-12 ml-44">
            <li>Home</li>
            <li>About</li>
            <li>Brands</li>
            <li>Reviews</li>
            <li>Locate us</li>
          </ul>
        </div>
        <div className="flex items-center ml-auto">
          <Icon height={24} icon="mdi:location" />

          <ul className="hidden lg:flex items-center lg:ml-7 space-x-7">
            <li>
              <Icon height={24} icon="mdi:instagram" />
            </li>
            <li>
              <Icon height={24} icon="mdi:facebook" />
            </li>
          </ul>
        </div>
      </div>
      <div className="h-9 lg:h-12 flex items-center justify-center bg-black w-full">
        <p className="text-center font-josefin text-white text-sm font-light">
          Mon - Fri: 8:00am - 8:00pm
        </p>
      </div>
    </div>
  );
}

export default Navbar;
