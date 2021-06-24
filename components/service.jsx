import React from "react";
import Image from "next/image";
import Office from "../public/assets/images/office.jpeg";
import Electical from "../public/assets/images/electrical.jpeg";

export default function service() {
  const generalServices = [
    {
      activity: "supply and service of office equipment",
      list: [
        "office stationaries,printers and scanning machine,photocopy machine",
        "note counting machines,note binding machine,strapping machine,fire proof filling cabinet",
        "Mobile compactors storage system,fireproof and burglar proof safe and strong room doors",
      ],
    },
    {
      activity: "supply of firefighting equipement and system",
      list: [
        " MasterMech International ltd, is a fire safety and protection consultancy specializing indesigning installation, Inspection and provision of fire safety equipment and products. The solutions we offer are tailor made to best fit your unique operating environment.",
      ],
    },
    {
      activity:
        "Supply and service of air conditioners,generators, construction machines,power backup systems",
      list: [
        "supply and offer maintenance services of air conditioners,generators as well as construction moving machine through Tanzania.",
        "We offer high quality,professional maintenance services and exceptional customer services from trained and licenced experts",
      ],
    },
    {
      activity: "Supply of furnitures and alluminium profile",
      list: [
        "Company is highly competent in supply of furniture,aluminium profile and providing services such as classic design and installation of office partition,aluminium doors and windows, frameless glass doors,showers cubicles, installation of curtains and ceiling",
      ],
    },
  ];
  return (
    <div className="mt-5">
      <div>
        <div className="">
          <h1 className="text-custom-blue text-2xl text-center font-bold">
            Services
          </h1>
          <p>
            MasterMech International ltd offer fully comprehensive Services to
            our customers and we are Confident that we can deliver and
            co-ordinate the full service required to each individual customers,
            whether it is straight forward or challenging request. Our services
            divided into sections comprises of General services and Engineering
            services.
          </p>
        </div>

        <div className="container mt-8 mx-auto">
          <div className="lm-5 flex flex-wrap ">
            {/* start of the card */}
            {generalServices.map((card) => {
              <div className="p-4 lg:w-1/2">
                <div className="h-full shadow-md hover:translate-y-1 hover:transition-all hover:shadow-lg overflow-hidden">
                  <h3 className=" text-custom-blue text-xl">{card.activity}</h3>
                  <div className="mt-4">
                    <Image
                      className="lg:h-48 md:h-36  w-full object-cover object-center"
                      src={Office}
                      alt="blog"
                    />
                  </div>
                  <div className="p-6">
                    <ul className="list-disc">
                      <li>list</li>
                    </ul>
                  </div>
                </div>
              </div>;
            })}
            {/* end of  card */}

            {/* start of the card */}
            {/*
            <div className="p-4 lg:w-1/2">
              <div className="h-full shadow-md hover:translate-y-1 hover:transition-all hover:shadow-lg overflow-hidden">
                <h3 className=" text-custom-blue text-xl">
                  Supply and service of office equipment
                </h3>
                <div className="mt-4">
                  <Image
                    className="lg:h-48 md:h-36  w-full object-cover object-center"
                    src={Office}
                    alt="blog"
                  />
                </div>
                <div className="p-6">
                  <ul className="list-disc">
                    <li>
                      <p className="leading-relaxed mb-3">
                        Photo booth fam kinfolk cold-pressed sriracha leggings
                        jianbing microdosing tousled waistcoat.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}

            {/* end of  card */}
          </div>
        </div>
      </div>

      {/* start of engineering services */}

      <div>
        <div className="">
          <h1 className="text-custom-blue text-2xl text-center font-bold">
            Engineering services
          </h1>
          <p>
            MasterMech International ltd offer fully comprehensive Services to
            our customers and we are Confident that we can deliver and
            co-ordinate the full service required to each individual customers,
            whether it is straight forward or challenging request. Our services
            divided into sections comprises of General services and Engineering
            services.
          </p>
        </div>

        <div className="container mx-auto">
          <div className="lm-5 flex flex-wrap ">
            {/* start of the card */}
            <div className="p-4 lg:w-1/2">
              <div className="h-full shadow-md hover:translate-y-1 hover:transition-all hover:shadow-lg overflow-hidden">
                <h3 className=" text-custom-blue text-xl">
                  Supply and service of office equipment
                </h3>
                <div className="mt-4">
                  <Image
                    className="lg:h-48 md:h-36  w-full object-cover object-center"
                    src={Office}
                    alt="blog"
                  />
                </div>
                <div className="p-6">
                  <ul className="list-disc">
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
            {/* end of  card */}
          </div>
        </div>
      </div>
    </div>
  );
}
