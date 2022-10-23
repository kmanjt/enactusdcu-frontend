import React from "react";
import Chairperson from "../public/committee/Niamh.png";
import TeamL1 from "../public/committee/Kevin.png";
import TeamL2 from "../public/committee/Darragh.png";
import Secretary from "../public/committee/Alethea.png";
import Treasurer from "../public/committee/Malavika.png";
import PRO from "../public/committee/Lina.png";
import ABLO from "../public/committee/Suzanne.png";
import SO1 from "../public/committee/Mahima.png";
import SO2 from "../public/committee/Shivangi.png";
import SO from "../public/committee/Klara.png";
import FYR from "../public/committee/Stephen.png";
import SPR from "../public/committee/Lucas.png";
import TeamImg from "./TeamImg";
import Image from "next/image";
import { TeamData } from "./TeamData";
import { FaLinkedin } from "react-icons/fa";

const Team = () => {
  return (
    <div id="team" className="w-160 md:w-320 lg:w-480 md:p-24 lg:p-32 mx-auto text-center py-24">
      <p className="mt-2 text-3xl font-bold leading-8 tracking-tight  pb-10 text-gray-900 sm:text-4xl">
        The Enactus DCU Team
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
        {TeamData.map((team, index) => {
          return (
            <div key={index} className="relative">
              <Image
                src={team.image}
                alt="/"
                width={"4000w"}
                height={"6000h"}
                layout="responsive"
                className="rounded"
              />
              {/* Overlay */}
              <a href={team.url} target="blank">
                <div className="flex justify-center w-full h-full items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group">
                  <p className="text-gray-300 hidden group-hover:block text-s">
                    <FaLinkedin className="mx-auto" size={30} />
                    <br />
                    {team.name}
                    <br />
                    {team.role}
                  </p>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
