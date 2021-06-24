import React from "react";
import Image from "next/image";
import Work from "../public/assets/images/work.jpeg";
import rocket from "../public/assets/icons/rocket.svg";
import target from "../public/assets/icons/target.svg";
import Mission from "./mission";

export default function about() {
  return (
    <div className="container h-screen px-5 py-24 mx-auto">
      <h3 className="text-center text-custom-blue font-bold text-2xl">About</h3>
      <div className="mt-10 flex flex-wrap -mx-4 -mb-10">
        <div className="sm:w-1/2 mb-10 px-4">
          <div className="rounded-lg  overflow-hidden">
            <Image
              alt="content"
              className="object-cover object-center h-full w-full"
              src={Work}
            />
          </div>
        </div>
        <div className="sm:w-1/2 mb-10 px-4">
          <Mission src={rocket} />
          <Mission src={target} />
        </div>
      </div>
    </div>
  );
}
