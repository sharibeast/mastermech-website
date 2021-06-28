import React from "react";
import Image from "next/image";

export default function mission({ src, title, description, height, width }) {
  return (
    <div className="flex h-1/2 mb-5 lg:mb-px">
      <div>
        <Image src={src} height={height} width={width} />
      </div>
      <div>
        <h4 className=" text-custom-blue text-xl">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}
