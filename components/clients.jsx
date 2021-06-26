import React, { useState } from "react";
import Image from "next/image";

import Marquee from "react-fast-marquee";

export default function clients() {
  const clientsArray = [
    {
      id: 1,
      image: require("../public/assets/images/camusat.png"),
    },
    {
      id: 2,
      image: require("../public/assets/images/iom.png"),
    },
    {
      id: 3,
      image: require("../public/assets/images/tanesco.png"),
    },
    {
      id: 4,
      image: require("../public/assets/images/toshiba.png"),
    },
    {
      id: 5,
      image: require("../public/assets/images/nhc.png"),
    },
    {
      id: 6,
      image: require("../public/assets/images/songas.png"),
    },
  ];

  const [clients, setClients] = useState(clientsArray);
  return (
    <>
      <h1 className="text-center inset-y-1 text-custom-blue text-2xl font-bold">
        Trusted by
      </h1>
      <div className="flex hidden  justify-around space-x-24">
        <Marquee>
          {clients.map((client) => {
            return <Image key={client.id} src={client.image} />;
          })}
        </Marquee>
      </div>
      <div className="flex md:hidden lg:hidden  flex-col">
        {clients.map((client) => {
          return <Image key={client.id} src={client.image} />;
        })}
      </div>
    </>
  );
}
