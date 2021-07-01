import React from "react";
import logo from "../public/assets/images/logo.png";
import { Link, animateScroll as scroll } from "react-scroll";
import Image from "next/image";
import { GrLinkTop } from "react-icons/gr";

export default function Footer() {
  const iconStyles = "w-20 h-10 absolute right-0 shadown-lg text-white-custom";
  return (
    <div
      id="contact"
      className="px-4 text-custom-white bg-custom-blue pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
    >
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <Image src={logo} height={50} width={50} />
            <span className="ml-2 text-xl font-bold tracking-wide  uppercase">
              MASTERMECH
            </span>
          </a>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm lg:text-base text-gray-800">
              MASTERMECH INTERNATIONAL Limited specializes in provision of
              excellence services ranging from supply,installation and
              maintenance of office and Industrial equipment.The company works
              with corporate companies,organizations and government institutions
              to provide effective solution
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm lg:text-base">
          <p className="text-base font-bold tracking-wide text-gray-900">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 text-gray-800">Phone:</p>
            <a
              href="tel:+255715821322"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              +255715821322
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Phone:</p>
            <a
              href="tel:+255752028480"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              +255752028480
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Email:</p>
            <a
              href="mailto:mastermechinternational@gmail.com"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              info@mastermech-int.com
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Address:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              P.O BOX 80319 Nkurumah street, Dar es salaam
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <GrLinkTop
          height={400}
          onClick={() => {
            scroll.scrollToTop();
          }}
          className={iconStyles}
        />{" "}
        <p className="text-sm text-gray-600">
          © Copyright {new Date().getFullYear()} Mastermech international
          company ltd. All rights reserved.
        </p>
      </div>
    </div>
  );
}
