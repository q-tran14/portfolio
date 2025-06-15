import React from "react";
import avatar1 from "../../src/assets/avatars/avatar1.png";
import * as Icon from "@phosphor-icons/react";

export const Home = () => {
  return (
    <div className="flex items-center mx-[30px] py-[25vh]">
      <div className="flex flex-col md:flex-row w-full max-w-full md:max-w-4xl mx-auto items-center justify-between p-8 rounded-2xl shadow-lg bg-black/25 backdrop-blur-sm">
        <img
          src={avatar1}
          alt="Avatar"
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-84 md:h-84 object-cover rounded-lg mb-6 md:mb-0"
        />
        {/* Right: Introduction Quote */}
        <div className="max-w-full md:max-w-3xl text-lg sm:text-xl md:text-2xl leading-relaxed md:ml-10 text-white">
          <blockquote className="italic font-bold">
            <span className="block text-4xl sm:text-4xl">Hello,</span>
            <span className="block text-3xl sm:text-3xl">My name is Quân.</span>
            <p className="text-1xl sm:text-2xl mb-4">
              It all starts with one idea, crafted through thousands of lines of
              code - each leading to endless adventures in the worlds I create.
            </p>
            <span className="font-light text-base sm:text-md block mb-6">
              Creative Thinker | Professional Worker | Responsible Team Player |
              Aesthetic Mindset
            </span>
            <div className="w-full flex justify-end">
              <a
                href="/projects"
                className="font-bold text-lg flex items-center gap-2 transition-transform transform hover:scale-105 hover:text-[#A7B94B]"
              >
                <span>View Projects</span>
                <Icon.ArrowRightIcon className="w-5 h-5 translate-y-[1px]" />
              </a>
            </div>
          </blockquote>
        </div>
      </div>
    </div>
  );
};
