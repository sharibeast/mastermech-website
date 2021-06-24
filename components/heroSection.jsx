import React from "react";

export default function heroSection() {
  return (
    <div className="sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div>
        <img
          className="object-cover md:max-w-full w-full h-56 sm:h-96"
          src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
          alt=""
        />
      </div>
      <div className="absolute inset-40 inset-x-4">
        <h1 className="text-custom-white font-bold lg:text-5xl text-2xl inset-y-4">
          Every engament with you <br />
          is partener ship not a business deal
        </h1>
      </div>
    </div>
  );
}
