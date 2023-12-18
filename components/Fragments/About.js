import { Icon } from "@iconify/react";
import React from "react";

function About() {
  return (
    <section className="flex">
      <div className="w-[40%]">
        <img
          src="https://images.squarespace-cdn.com/content/v1/589b5054440243b575b569a8/1682426778911-VBZ4MVNYYKBOBAO71OPT/DA006-TheDogAssembly-BorderCollie5.jpg?format=2500w"
          className="object-cover w-full max-h-[600px]"
          alt=""
        />
      </div>
      <div className="w-[60%] px-16 flex flex-col justify-center relative">
        <h2 className="font-thin text-transparent leading-[1.2] w-full bg-gradient-to-r from-white to-white via-yellow-200 bg-clip-text text-5xl">
          What drives us to provide the best care for your pets ?
        </h2>
        <p className="text-white/80 leading-9 text-base mt-5 font-thin">
          Quality pet care is not just a service; it&apos;s a promise to
          nurture, protect, and love a furry friend who depends on us for their
          entire world. Choosing the best pet care is akin to making a promise
          to prioritize your pet&apos;s needs, whether it&apos;s regular
          veterinary check-ups, a balanced and nutritious diet, proper grooming,
          or sufficient exercise. This commitment reflects a deep understanding
          of the bond between humans and animals, recognizing that pets rely on
          their owners for their overall well-being.
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
  );
}

export default About;
