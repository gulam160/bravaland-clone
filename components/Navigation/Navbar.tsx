"use client";
import React from "react";
import { navdataLeft } from "@/constants/data";
import TwitterIcon from "@mui/icons-material/Twitter";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { FaTiktok } from "react-icons/fa";
import { CiUser, CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import MobileNav from "./MobileNav";
import { motion, useCycle, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useCycle(false, true);

  return (
    <>
      <div className="bg-primary py-2 font-sans text-center font-semibold text-[14px]">
        VISIT US ON TIKTOK @BRAVALAND.COM
      </div>
      <header className="sticky -top-0.5 w-full z-50">
        <nav className="flex justify-between items-center px-4 py-2 mx-auto bg-secondary">
          {/* hamburger icon */}
          <motion.button
            animate={mobileNav ? "open" : "closed"}
            className="hidden transition-all duration-500 lg:block md:block sm:block"
            onClick={() => setMobileNav()}
          >
            {!mobileNav ? (
              <MenuOutlinedIcon sx={{ fontSize: 24 }} className="icons" />
            ) : (
              <CloseIcon sx={{ fontSize: 24 }} className="icons" />
            )}
          </motion.button>
          <div className="flex gap-5 lg:hidden md:hidden sm:hidden">
            {navdataLeft &&
              navdataLeft.map(({ id, label, icon }) => (
                <li
                  key={id}
                  className="navlink list-none relative transition-all delay-[0.4s]"
                >
                  <p className="text-white font-bold flex items-center gap-1 cursor-pointer hover:text-primary">
                    <span>{label}</span>
                    {icon && <KeyboardArrowDownIcon />}
                  </p>
                </li>
              ))}
          </div>
          <div>
            <img
              src="https://bravaland.com/cdn/shop/files/Artboard_1.png?v=1678787853"
              alt="app-logo"
              className="w-28 md:ml-4 sm:ml-4"
            />
          </div>
          <div className="flex gap-5">
            <div className="flex gap-5 lg:hidden md:hidden sm:hidden">
              <li className="navlink list-none relative transition-all delay-[0.4s] navlink">
                <p className="text-white font-bold hover:text-primary">
                  become an affiliate
                </p>
              </li>
              <TwitterIcon className="icons" />
              <FaTiktok size={22} className="icons" />
              <InstagramIcon className="icons" />
            </div>
            <div className="flex gap-5 md:gap-2 sm:2">
              <CiUser
                size={24}
                className="icons lg:hidden md:hidden sm:hidden"
              />
              <CiSearch size={24} className="icons" />
              <HiOutlineShoppingBag size={22} className="icons" />
            </div>
          </div>
        </nav>
        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileNav && (
            <motion.div
              variants={{ open: { y: "0%" }, closed: { y: "-100%" } }}
              initial="closed"
              animate="open"
              className="hidden lg:block md:block sm:block bg-secondary px-4 py-2"
            >
              <MobileNav />
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;
