/* eslint-disable @next/next/no-img-element */
import { Icon } from "@iconify/react";
import React from "react";

function About() {
  return (
    <section className="flex lg:min-h-screen">
      <div className="relative h-screen w-full">
        <div className="h-full object-cover absolute right-0 z-0 inset-y-0">
          <img
            src="https://images.squarespace-cdn.com/content/v1/589b5054440243b575b569a8/1682426778911-VBZ4MVNYYKBOBAO71OPT/DA006-TheDogAssembly-BorderCollie5.jpg?format=2500w"
            className="object-cover h-full brightness-50 bg-blend-multiply"
            alt=""
          />
        </div>
        <div className="lg:w-[80%] px-24 lg:px-36 h-full flex flex-col justify-center relative z-20">
          <p className="italic font-light text-white/70 relative w-fit">
            <span className="text-white inline-block mr-1 absolute -left-12 -top-8">
              <Icon height={44} icon="icon-park-outline:quote" />
            </span>
            The greatness of a nation and its moral progress can be judged by
            the way its animals are treated
            <span className="text-white inline-block mr-1 absolute -right-14 -bottom-6 rotate-180">
              <Icon height={44} icon="icon-park-outline:quote" />
            </span>
          </p>
          <h2 className="font-thin text-transparent mt-16 leading-[1.2] w-full bg-gradient-to-r from-white to-white via-yellow-200 bg-clip-text text-5xl">
            What drives us to provide the best care for your pets ?
          </h2>
          <p className="text-white/80 leading-10 text-base mt-10 font-thin">
            Quality pet care is not just a service; it&apos;s a promise to
            nurture, protect, and love a furry friend who depends on us for
            their entire world. Choosing the best pet care is akin to making a
            promise to prioritize your pet&apos;s needs, whether it&apos;s
            regular veterinary check-ups, a balanced and nutritious diet, proper
            grooming, or sufficient exercise. This commitment reflects a deep
            understanding of the bond between humans and animals, recognizing
            that pets rely on their owners for their overall well-being.
          </p>

          <button className="w-fit group border-b border-white/20 text-white/70 hover:text-white bg-white/0 py-3 flex items-center rounded-none mt-16 relative">
            <div className="w-0 group-hover:w-full absolute inset-x-0 bottom-0 h-[1px] bg-white transition-all"></div>
            <span className="text-inherit font-light tracking-wide text-base transition-all">
              Begin an adventure with us today
            </span>
            <Icon height={20} className="ml-2" icon="mdi:arrow-right" />
          </button>
        </div>
      </div>
      {/* */}
    </section>
  );
}

export default About;
