import React, { useState } from "react";
import Image from "next/image";
import team1 from "../public/assets/images/team1.jpg";

export default function Team() {
  const teamsData = [
    {
      id: 1,
      name: "Costa Henry Kayombo",
      position: "Managing director",
      image: require("../public/assets/images/team1.jpg"),
    },
    {
      id: 2,
      name: "Winnie Uronu",
      position: "Business development manager",
      image: require("../public/assets/images/winnie.jpg"),
    },
    {
      id: 3,
      name: "Benedict Matto",
      position: "Project manager",
      image: require("../public/assets/images/team1.jpg"),
    },
  ];
  const [teams, setTeams] = useState(teamsData);

  return (
    <section id="team" className="text-gray-600 body-font ">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className=" font-bold  mb-4 text-custom-blue text-2xl">
            OUR TEAM
          </h1>
          <p className="lg:w-2/3 text-xl mx-auto leading-relaxed ">
            Meet our exceptionally talented team at
            mastermech-international-company
          </p>
        </div>
        <div className="flex flex-wrap justify-center -m-4">
          {teams.map((member) => {
            return (
              <div key={member.id} className="p-4 lg:w-1/4 md:w-1/2">
                <div className="flex flex-col items-center text-center">
                  <Image
                    alt="team"
                    className="flex-shrink-0 hover:scale-110 duration-300 rounded-lg w-full h-56 object-cover object-center mb-4"
                    src={member.image}
                  />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      {member.name}
                    </h2>
                    <h3 className="text-gray-500 mb-3">{member.position}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
