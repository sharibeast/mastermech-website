import React from "react";
import Image from "next/image";

export default function mission({ src }) {
  return (
    <div className="flex h-1/2 mb-5 lg:mb-px">
      <div>
        <Image src={src} width={500} height={500} />
      </div>
      <div>
        <h4 className=" text-custom-blue text-xl">our mission</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reprehenderit iusto ab incidunt, ea voluptate maiores perferendis
          eaque quia. Necessitatibus excepturi repellat reiciendis blanditiis
          quasi nemo in nisi non, velit accusamus?
        </p>
      </div>
    </div>
  );
}
