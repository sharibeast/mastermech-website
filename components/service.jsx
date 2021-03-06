import React, { useState } from "react";
import Image from "next/image";
import check from "../public/assets/icons/check.svg";
import chevrons from "../public/assets/icons/chevrons.svg";

export default function service() {
  const generalServices = [
    {
      id: 1,
      activity: "Supply and service of office equipments",
      image: require("../public/assets/images/office.jpeg"),
      list: [
        {
          id: 1,
          descripton:
            "Office stationaries,printers and scanning machines,photocopy machines",
        },
        {
          id: 2,
          descripton:
            "Note counting machines,note binding machines,strapping machines,fire proof filling cabinets",
        },
        {
          id: 1,
          descripton:
            "Mobile compactors storage system,fireproof and burglar proof safe and strong room doors",
        },
      ],
    },
    {
      id: 2,
      activity: "Supply of firefighting equipement and system",
      image: require("../public/assets/images/photo3.jpg"),
      list: [
        {
          id: 1,
          descripton:
            " MasterMech International ltd, is a fire safety and protection consultancy specializing in designing installation, Inspection and provision of fire safety equipment and products. The solutions we offer are tailor made to best fit your unique operating environment.",
        },
      ],
    },
    {
      id: 3,
      activity:
        "Supply and service of AC,generators,construction machines and power backup systems",
      image: require("../public/assets/images/photo4.jpg"),
      list: [
        {
          id: 1,
          descripton:
            "Supply and offer maintenance services of air conditioners,generators as well as construction moving throught Tanzania",
        },
        {
          id: 2,
          descripton:
            "We offer high quality,professional maintenance services and exceptional customer service from trained and licensed experts",
        },
      ],
    },
    {
      id: 4,
      activity: "Supply of furnitures and alluminium profile",
      image: require("../public/assets/images/photo5.jpg"),
      list: [
        {
          id: 1,
          descripton:
            "We are competent in supply of furniture, aluminium profile and providing services such as design and installation of office partition,aluminium doors and windows",
        },
        {
          id: 2,
          descripton:
            "Frameless glass doors,showers cubicles, installation of curtains and ceiling(pvc,gypsum and suspended)",
        },
      ],
    },
  ];
  const engineeringServices = [
    {
      id: 1,
      activity: "Energy and power generation works",
      image: require("../public/assets/images/power.png"),
      list: [
        {
          id: 1,
          descripton:
            "Mastermech international ltd specialize in electric and solar water pumping systems which is life's most needed",
        },
        {
          id: 2,
          descripton:
            "Solar water pump it is a maintenance free system with high reliability and life expectancy which requires simple installation and the most efficient pumping system with high resistance to sand and corrosion ",
        },
      ],
    },
    {
      id: 2,
      activity: "Mechanical works",
      image: require("../public/assets/images/mecha.jpg"),
      list: [
        {
          id: 1,
          descripton: "Welding and fabrication",
        },
        {
          id: 2,
          descripton:
            "Equipement installation and erection mechanical super structure and sub structure",
        },
        { id: 3, descripton: "Lifting and machines hiring" },
        { id: 4, descripton: "Plumbing" },
        { id: 5, descripton: "Insulation" },
      ],
    },
    {
      id: 3,
      activity: "Electrical works",
      image: require("../public/assets/images/electricalpic.jpg"),
      list: [
        {
          id: 1,
          descripton: "New electrical installation on buildings",
        },
        {
          id: 2,
          descripton: "Rehabilitation of existing wirings ",
        },
        {
          id: 3,
          descripton: "Troubleshoting of electrical faults",
        },
      ],
    },
  ];
  const [cards, setCards] = useState(generalServices);
  const [engCards, setEngCards] = useState(engineeringServices);
  return (
    <div id="services" className="mt-5">
      <div>
        <div className="">
          <h1 className="text-custom-blue text-2xl text-center font-bold">
            Services
          </h1>
          <p>
            MasterMech International ltd offer fully comprehensive services to
            our customers and we are Confident that we can deliver and
            co-ordinate the full service required to each individual customers,
            whether it is straight forward or challenging request. Our services
            divided into sections comprises of General services and Engineering
            services.
          </p>
        </div>

        <div className="container mt-8 mx-auto">
          <div className="lm-5 flex flex-wrap ">
            {/* start of cards */}
            {cards.map((data) => {
              return (
                <div key={data.id} className="p-4 lg:w-1/2">
                  <div className="h-full shadow-md hover:translate-y-1 hover:transition-all hover:shadow-lg overflow-hidden">
                    <h3 className=" text-custom-blue text-xl font-bold">
                      {data.activity}
                    </h3>
                    <div className="mt-4">
                      <Image
                        className="lg:h-48 md:h-36 hover:scale-150 duration-500  w-full object-cover object-center"
                        src={data.image}
                        alt="activites-done-by-company"
                        width={600}
                        height={400}
                      />
                    </div>
                    <div className="p-6">
                      <ul>
                        {data.list.map((list) => {
                          return (
                            <>
                              <li className="flex items-center" key={list.id}>
                                <Image src={chevrons} />
                                <p className="leading-relaxed mb-3">
                                  {list.descripton}
                                </p>
                              </li>
                            </>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* end of cards */}
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
            our customers and we are confident that we can deliver and
            co-ordinate the full service required to each individual customers,
            whether it is straight forward or challenging request. Our services
            divided into sections comprises of General services and Engineering
            services.
          </p>
        </div>

        <div className="container mx-auto">
          <div className="lm-5 flex flex-wrap ">
            {/* start of cards */}
            {engCards.map((data) => {
              return (
                <div eye={data.id} className="p-4 lg:w-1/2">
                  <div className="h-full shadow-md hover:translate-y-1 hover:transition-all hover:shadow-lg overflow-hidden">
                    <h3 className=" text-custom-blue text-xl font-bold">
                      {data.activity}
                    </h3>
                    <div className="mt-4">
                      <Image
                        className="lg:h-48 md:h-36 hover:scale-150 duration-500  w-full object-cover object-center"
                        src={data.image}
                        alt="activites-done-by-company"
                        width={600}
                        height={400}
                      />
                    </div>
                    <div className="p-6">
                      <ul className="list-disc">
                        {data.list.map((list) => {
                          return (
                            <li key={list.id} className="flex items-center">
                              <Image src={check} />
                              <p className="leading-relaxed items-end mb-3">
                                {list.descripton}
                              </p>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* end of cards */}
          </div>
        </div>
      </div>
    </div>
  );
}
