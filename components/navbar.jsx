import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Image from "next/image";
import logo from "../public/assets/images/logo.png";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className=" fixed z-50 inset-x-0 md:w-full px-2 bg-custom-blue text-custom-white py-1   md:max-w-full  lg:px-8">
      <div className="relative flex items-center justify-between">
        <span
          onClick={() => {
            scroll.scrollToTop();
          }}
          className=" text-white text-xl items-center md:flex lg:flex flex font-bold tracking-wide  lg:block text-gray-800 uppercase"
        >
          <Image src={logo} width={40} height={40} /> <br />
          <span className="ml-4">MASTERMERCH</span>
        </span>

        <ul className="flex items-center hidden space-x-8 lg:flex">
          <Link to="services" smooth={true}>
            <a
              aria-label="Our product"
              title="Our product"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Services
            </a>
          </Link>
          <Link to="about" smooth={true}>
            <a
              href="/"
              aria-label="Product pricing"
              title="Product pricing"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              About
            </a>
          </Link>
          <Link to="team" smooth={true}>
            <a
              aria-label="Product pricing"
              title="Product pricing"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Team
            </a>
          </Link>
          <Link to="footer" smooth={true}>
            <a
              href="/footer"
              aria-label="About us"
              title="About us"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Contact
            </a>
            {/* Contact */}
          </Link>
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute transition-all p-10 duration-100 top-10 z-40 right-[-8px] h-96 w-1/2 bg-custom-blue">
              <div className="flex flex-col justify-between ">
                <Link
                  to="services"
                  onClick={() => setIsMenuOpen(false)}
                  smooth={true}
                  className="mb-7"
                >
                  <a
                    aria-label="Our product"
                    title="Our product"
                    className="font-medium tracking-wide"
                  >
                    Services
                  </a>
                </Link>
                <Link
                  to="about"
                  onClick={() => setIsMenuOpen(false)}
                  smooth={true}
                  duration={2000}
                  className="mb-7"
                >
                  <a
                    href="/"
                    aria-label="Product pricing"
                    title="Product pricing"
                    className="font-medium tracking-wide"
                  >
                    About
                  </a>
                </Link>
                <Link
                  onClick={() => setIsMenuOpen(false)}
                  to="team"
                  smooth={true}
                  duration={2000}
                  className="mb-7"
                >
                  <a
                    aria-label="Product pricing"
                    title="Product pricing"
                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    Team
                  </a>
                </Link>
                <Link
                  onClick={() => setIsMenuOpen(false)}
                  to="footer"
                  smooth={true}
                  duration={3000}
                  className="mb-7"
                >
                  <a
                    href="/footer"
                    aria-label="About us"
                    title="About us"
                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    Contact
                  </a>
                  {/* Contact */}
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
