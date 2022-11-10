import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 static inset-x-0 bottom-0 ">
      <hr class="my-8 h-px bg-amber-700 border-0 "></hr>
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a href="/" aria-label="Go home" title="Company" className="inline-flex items-center">
            <svg
              className="w-8 text-deep-purple-accent-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span className="ml-2 text-xl font-bold tracking-wide uppercase">Elegant Ambiance</span>
          </a>
          <div className="mt-6">
            <p className="text-sm">A Personal Home Decor Service</p>
            <p className="mt-4 text-sm ">
              This website was designed and developed by Tahmid Taki Rahman
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide ">Developer Contacts</p>
          <div className="flex">
            <p className="mr-1 ">Phone:</p>
            <a
              href="tel:+60102812636"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              +60102812636
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 ">Email:</p>
            <a
              href="mailto:rahman.tr53@gmail.com"
              aria-label="My email"
              title="My email"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              rahman.tr53@gmail.com
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 ">Address:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              IIUM, Gombak, Selangor, Malaysia
            </a>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide ">Social</span>
          <div className="flex justify-center mt-1 space-x-3">
            <a
              href="https://github.com/TahmidTaki"
              className=" transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/rahman-tahmid-taki-5676781b8/"
              className=" transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <FaLinkedin />
            </a>
          </div>
          <p className="mt-4 text-sm ">Hit me up for any professional works</p>
        </div>
      </div>
      <hr class="my-8 h-px bg-amber-700 border-0 "></hr>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 lg:flex-row">
        <p className="text-sm ">&copy;Copyright 2022, Tahmid Taki Rahman. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
