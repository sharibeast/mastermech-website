import React, { useState } from "react";
import Image from "next/image";
import camusat from "../public/assets/images/camusat.png";
import iom from "../public/assets/images/iom.png";
import tanesco from "../public/assets/images/tanesco.png";
import toshiba from "../public/assets/images/toshiba.png";
import nhc from "../public/assets/images/nhc.png";
import songas from "../public/assets/images/songas.png";

import Marquee from "react-fast-marquee";

export default function clients() {
  const clientsArray = [
    {
      id: 1,
      image: require("../public/assets/images/camusat.png"),
    },
    {
      id: 2,
      image: require("../public/assets/images/toshiba.png"),
    },
    {
      id: 3,
      image: require("../public/assets/images/songas.png"),
    },
    {
      id: 5,
      image: require("../public/assets/images/tanesco.png"),
    },

    {
      id: 4,
      image: require("../public/assets/images/nhc.png"),
    },
  ];

  const [clients, setClients] = useState(clientsArray);
  return (
    <>
      <h1 className="text-center inset-y-1 text-custom-blue text-2xl font-bold">
        Trusted by
      </h1>
      <div className="flex flex-wrap justify-center">
        {clients.map((client) => {
          return <Image key={client.id} src={client.image} height={200} />;
        })}
      </div>
    </>
  );
}
