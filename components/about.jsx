import React from "react";
import Image from "next/image";
import Office from "../public/assets/images/office.jpeg";
import Camusat from "../public/assets/images/camusat.png";

export default function about() {
  return (
    <div className="mt-5">
      <div>
        <h1 className="text-custom-blue text-2xl text-center">Services</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
          tempora non aspernatur, harum eligendi inventore sapiente distinctio
          excepturi sit illum cumque! Perspiciatis eum sit aut laudantium ab
          quae adipisci nemo!
        </p>
      </div>

      <div className="text-gray-600 body-font">
        <div className="container mt-6 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full shadow-lg rounded-lg overflow-hidden">
                <h3 className=" text-custom-blue text-xl">
                  Supply and service of office equipment
                </h3>
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={Office}
                  alt="blog"
                />
                <div className="p-6">
                  <ul className="list-disc">
                    <li>
                      <p className="leading-relaxed mb-3">
                        Photo booth fam kinfolk cold-pressed sriracha leggings
                        jianbing microdosing tousled waistcoat.
                      </p>
                    </li>
                    <li>
                      <p className="leading-relaxed mb-3">
                        Photo booth fam kinfolk cold-pressed sriracha leggings
                        jianbing microdosing tousled waistcoat.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* second card */}
            <div className="p-4 md:w-1/3">
              <div className="h-full shadow-lg rounded-lg overflow-hidden">
                <h3 className=" text-custom-blue text-xl">
                  Supply and service of office equipment
                </h3>
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={Office}
                  alt="blog"
                />
                <div className="p-6">
                  <ul className="list-disc">
                    <li>
                      <p className="leading-relaxed mb-3">
                        Photo booth fam kinfolk cold-pressed sriracha leggings
                        jianbing microdosing tousled waistcoat.
                      </p>
                    </li>
                    <li>
                      <p className="leading-relaxed mb-3">
                        Photo booth fam kinfolk cold-pressed sriracha leggings
                        jianbing microdosing tousled waistcoat.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* third card */}

            <div className="p-4 md:w-1/3">
              <div className="h-full shadow-lg rounded-lg overflow-hidden">
                <h3 className=" text-custom-blue text-xl">
                  Supply and service of office equipment
                </h3>
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={Office}
                  alt="blog"
                />
                <div className="p-6">
                  <ul className="list-disc">
                    <li>
                      <p className="leading-relaxed mb-3">
                        Photo booth fam kinfolk cold-pressed sriracha leggings
                        jianbing microdosing tousled waistcoat.
                      </p>
                    </li>
                    <li>
                      <p className="leading-relaxed mb-3">
                        Photo booth fam kinfolk cold-pressed sriracha leggings
                        jianbing microdosing tousled waistcoat.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* end of card */}
          </div>
        </div>
      </div>
    </div>
  );
}
