import React from "react";
import Image from "next/image";
import camusat from "../public/assets/images/camusat.png";
import iom from "../public/assets/images/iom.png";
import tanesco from "../public/assets/images/tanesco.png";
import toshiba from "../public/assets/images/toshiba.png";

export default function clients() {
  return (
    <div className="flex mt-32 justify-around space-x-24">
      <Image src={camusat} />
      <Image src={iom} />
      <Image src={tanesco} />
      <Image src={toshiba} height={100} width={100} />
    </div>
  );
}
