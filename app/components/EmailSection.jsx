"use client";
import React from "react";
import GitHub from "../../public/github-icon.svg";
import LinkedIn from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const Alert = () => {
    alert(
      "Sorry, this function is currently not available. Please contact me via LinkedIn"
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    try {
      const resData = await response.json();

      if (response.status === 200) {
        console.log("Message sent.");
      }
    } catch (error) {
      console.error("Fehler beim Parsen der JSON-Antwort:", error);
    }

    if (response.status === 200) {
      console.log("Message sent.");
    }
  };
  return (
    <section
      name="contact"
      className="grid md:grid-cols-2 my-12 md_my-12 py-24 gap-4 relative"
    >
      <div>
        <h5 className="text-xl font-bold text-white my-2">Lets Connect</h5>
        <p className="text-[#adb7be] mb-4 max-w-md">
          Du suchst den Kontakt zu mir? <br /> Dann zögere nicht und nutze das
          Formular und sende mir damit deine Nachricht. <br /> <br />
          gerne kannst du mich auch über <strong>LinkedIn </strong>
          kontaktieren, und falls du sehen willst welche arbeit ich bisher
          geleistet habe dann nutz doch gern <strong>GitHub</strong>
        </p>
        <div className="social flex flex-row gap-2">
          <Link href="https://github.com/DevWavez">
            <Image src={GitHub} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/ramo-d%C3%B6ring-583ab618a/">
            <Image src={LinkedIn} alt="LinkedIn" />
          </Link>
        </div>
      </div>
      <div>
        <form action="" className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              type="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email:
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Johndoe@example.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              type="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject:
            </label>
            <input
              type="text"
              id="subject"
              required
              className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="What u have to say?"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Message:
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Lets talk about..."
              className=" bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-300 to-blue-600 text-white py-2.5 px-5 rounded-lg w-full"
            onClick={Alert}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
