"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const CVdownload = () => {
  alert(
    "Thank you for your interest, unfortunately I am currently editing my CV so you can see all my experience in LinkedIn, as well as in GitHub. Thank you for your understanding"
  );
  {
    /*
  const link = document.createElement("a");
  link.href = "/CV.pdf";
  
  link.download = "CV.pdf";
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
*/
  }
};

const HeroSection = () => {
  return (
    <section>
      {/* Welcome Text */}
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-500">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Ramo",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          {/* Description */}
          <p className="text-[#adb7be] text-base sm:text-lg mb-6 lg:text-xl">
            Leidenschaftlicher Frontend-Entwickler mit einer Vorliebe für
            kooperative Programmierung und Flexibilität im Team.
          </p>
          <div>
            <button
              onClick={CVdownload}
              className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-blue-500 bg-transparent hove:bg-slate-800 text-white mt-3"
            >
              <span className=" block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        {/* Profil */}
        <div className="col-span-5">
          <div className="rounded-full bg-[#181818] w-[350px] h-[350px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="profil"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
