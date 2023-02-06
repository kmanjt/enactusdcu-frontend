import React from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import { motion } from "framer-motion";

const Resources = [
  {
    des: "Enactus Ireland Website",
    link: "https://www.enactus.ie/",
  },
];

export default function Footer() {
  return (
    <div className="bg-white p-4 text-black shadow-inner shadow-stone-400/50">
      <div className="grid mt-4 md:grid-cols-12 grid-cols-1 gap-3">
        <motion.div whileHover={{ scale: 1.2 }} className="col-span-4">
          <a target={"_blank"} href="https://www.enactusdcu.com/">
            <Image
              src={logo}
              width={200}
              height={200}
              alt="Enactus DCU"
              className="w-16 h-8 rounded-sm  mx-auto mb-8"
            />
          </a>
        </motion.div>
        <div className="col-span-5   text-left">
          <p className="text-md">
            <span className="font-bold text-amber-300 text-xl">
              Enactus DCU
            </span>
          </p>
          <p className="text-sm">DCU Glasnevin</p>
          <br />
          <br />
          <p className="text-xs">
            <span className="font-bold">Site by:</span>{" "}
            <a
              href="https://www.linkedin.com/in/niamh-gowran-6b3b24221/"
              target={"_blank"}
              rel="noreferrer"
              className="hover:text-red-500"
            >
              Niamh Gowran
            </a>
            <span className="font-bold"> & </span>{" "}
            <a
              href="https://www.linkedin.com/in/kevin-james-tomescu/"
              rel="noreferrer"
              target={"_blank"}
              className="hover:text-red-500"
            >
              Kevin Tomescu
            </a>
          </p>
        </div>
        <div className="col-span-3">
          <p className="text-md">
            <span className="font-bold">Resources:</span>
          </p>
          {Resources.map((item, index) => {
            return (
              <motion.a
                whileHover={{ scale: 1.1 }}
                className="hover:text-amber-300 hover:font-bold block"
                href={item.link}
                rel="noreferrer"
                target={"_blank"}
                key={index}
              >
                {item.des}
              </motion.a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
