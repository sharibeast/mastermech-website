import React from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function heroSection() {
  const data = [
    {
      id: 3,
      summary: "Every engagement with you is partnership not a business deal",
      image: require("../public/assets/images/negotiation.jpeg"),
    },
    {
      id: 2,
      summary:
        "We specialize in provision of excellence services from suppy,installation and maintenance of office and industrial equipements",
      image: require("../public/assets/images/electrical.jpeg"),
    },
    {
      id: 5,
      summary: "We supply and provide service of office equipment",
      image: require("../public/assets/images/office.jpeg"),
    },
    {
      id: 6,
      summary: "dummy3",
      image: require("../public/assets/images/officedummy.jpeg"),
    },
  ];
  return (
    <Carousel
      showStatus={false}
      autoFocus={true}
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
    >
      {data.map((data) => {
        return (
          <div
            key={data.id}
            id="home"
            className="sm:max-w-xl  lg:h-[calc(100vh-10px)] md:max-w-full h-80 lg:max-w-screen-xl"
          >
            <div>
              <Image
                layout="fill"
                className="object-cover md:max-w-full w-full h-56 sm:h-96"
                src={data.image}
                alt=""
              />
            </div>
            <div className="absolute text-custom-blue font-bold inset-40 inset-x-4">
              <h1 className="text-custom-white font-bold lg:text-5xl text-2xl inset-y-4">
                {data.summary} <br />
              </h1>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}
