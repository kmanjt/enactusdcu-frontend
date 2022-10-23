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

const Team = () => {
  return (
    <div id="team" className="max-w-[620px] mx-auto text-center py-24">
      <h1 className="text-2xl font-bold pb-4">The Enactus DCU Team</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
        <TeamImg teamImg={Chairperson} />
        <TeamImg teamImg={TeamL1} />
        <TeamImg teamImg={TeamL2} />
        <TeamImg teamImg={Secretary} />
        <TeamImg teamImg={Treasurer} />
        <TeamImg teamImg={PRO} />
        <TeamImg teamImg={ABLO} />
        <TeamImg teamImg={SO1} />
        <TeamImg teamImg={SO2} />
        <TeamImg teamImg={SO} />
        <TeamImg teamImg={FYR} />
        <TeamImg teamImg={SPR} />
      </div>
    </div>
  );
};

export default Team;
