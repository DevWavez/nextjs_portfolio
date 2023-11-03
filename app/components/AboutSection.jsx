"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express.js</li>
        <li>React</li>
        <li>Javascript</li>
        <li>CSharp</li>
        <li>Java</li>
        <li>Python</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Self-Learning</li>
        <li>Udemy - Bootcamp Webdeveloper</li>
        <li>Udemy - Python</li>
        <li>Udemy - Masterclass C#</li>
        <li>Udemy - Java</li>
      </ul>
    ),
  },
  {
    title: "Certification",
    id: "certification",
    content: (
      <ul className="list-disc pl-2">
        <li>Udemy - Bootcamp Webdeveloper</li>
        <li>Udemy - Mastercalss C#</li>
        <li>Udemy - Java</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section name="about" className=" text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-img.jpeg"
          width={500}
          height={500}
          alt="about"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg ">
            erfahrener IT-Experte mit einem beeindruckenden beruflichen
            Werdegang. <br /> <br />
            Mit einer Karriere, die sich über mehrere Jahre erstreckt, sich als
            herausragender Softwareentwickler etabliert.
            <br /> Meine Leidenschaft für Technologie und Innovation spiegelt
            sich in meinen erfolgreichen dreijährigen Selbständigkeit in der
            Softwareentwicklung wider. <br /> <br />
            Während dieser Zeit hab ich eine Vielzahl anspruchsvoller Projekte
            erfolgreich umgesetzt und einen Namen für diese Fähigkeit gemacht,
            innovative Lösungen zu entwickeln. Mein Fachwissen und meine
            Fähigkeiten machen mich zu einer treibenden Kraft in der IT-Branche,
            und mein Engagement für Exzellenz setzt mich von anderen ab.
          </p>

          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certification")}
              active={tab === "certification"}
            >
              {" "}
              Certification{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
