import React from "react";
import Image from "next/image";
import Work from "../public/assets/images/work.jpeg";
import rocket from "../public/assets/icons/rocket.svg";
import target from "../public/assets/icons/target.svg";
import Mission from "./mission";

export default function about() {
  return (
    <div id="about" className="container px-5 py-24 mx-auto">
      <h3 className="text-center text-custom-blue font-bold text-2xl">About</h3>
      <div className="mt-10 flex flex-wrap -mx-4 -mb-10">
        <div className="sm:w-1/2 mb-10 px-4">
          <div className="rounded-lg  overflow-hidden">
            <Image
              alt="content"
              className="object-cover hover:scale-125 duration-500 object-center h-full w-full"
              src={Work}
            />
          </div>
        </div>
        <div className="sm:w-1/2  px-4">
          <Mission
            src={rocket}
            title="Our mission"
            description="To help customers build a
            reliable, secure, manageable
            and flexible infrastructure that
            establishes a foundation for
            Clients to meet their business
            objective."
            height="300"
          />
          <Mission
            src={target}
            title="Our objective"
            width="1000"
            description="Our objectives are to assist clients with various implementations of their projects, and we have confidence in our ability to generate the consensus and commitments necessary to succeed. We are prepared to stand behind our recommendations and to assist our clients with obtaining appropriate approvals to proceed"
          />
        </div>
      </div>
    </div>
  );
}
