import React from "react";
import Image from "next/image";
import camusat from "../public/assets/images/camusat.png";
import iom from "../public/assets/images/iom.png";
import tanesco from "../public/assets/images/tanesco.png";
import toshiba from "../public/assets/images/toshiba.png";
import Marquee from "react-fast-marquee";

export default function clients() {
  return (
    <div className="flex   justify-around space-x-24">
      <Marquee>
        <Image src={camusat} height={100} width={100} className="m-6" />
        <Image src={iom} height={100} width={200} className="m-6" />
        <Image src={tanesco} height={100} width={100} className="m-6" />
        <Image src={toshiba} height={100} width={100} className="m-6" />
      </Marquee>
    </div>
  );
}
