"use client";
import React from "react";
import { FaTiktok } from "react-icons/fa";
import { navdataLeft } from "@/constants/data";
import EastIcon from "@mui/icons-material/East";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { CiUser } from "react-icons/ci";

const MobileNav = () => {
  return (
    <>
      <div>
        {navdataLeft &&
          navdataLeft.map(({ id, label, icon }) => (
            <p
              key={id}
              className="text-white p-2 my-4 text-xl font-semibold flex justify-between items-center cursor-pointer hover:text-primary"
            >
              <span>{label}</span>
              {icon && <EastIcon sx={{ fontSize: 18 }} />}
            </p>
          ))}
        <p className="text-white p-2 my-4 text-xl font-semibold cursor-pointer hover:text-primary">
          become an affiliate
        </p>
      </div>
      <div className="flex items-center gap-5 p-2 my-4">
        <TwitterIcon sx={{ fontSize: 22 }} className="icons" />
        <FaTiktok size={19} className="icons" />
        <InstagramIcon sx={{ fontSize: 22 }} className="icons" />
      </div>
      <div className="flex items-center gap-2 px-2 py-4 mt-16 text-white cursor-pointer hover:text-primary">
        <CiUser size={16} />
        <p>login</p>
      </div>
    </>
  );
};

export default MobileNav;
