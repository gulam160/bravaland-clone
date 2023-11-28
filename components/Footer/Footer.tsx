import React from "react";
import ChatModal from "./ChatModal";
import EastIcon from "@mui/icons-material/East";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <ChatModal />
      {/* flex lg:flex-wrap md:flex-wrap sm:flex-wrap justify-between */}
      <section className="bg-[#f8f8f8] grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 px-4 py-6 gap-4 mx-auto">
        <div className="w-full">
          <p className="font-semibold ">get on the list</p>
          <div className="flex flex-col md:flex-col-reverse sm:flex-col-reverse">
            <div className=" mt-2">
              <p className="my-0.5 cursor-pointer">exclusive discouts</p>
              <p className="my-0.5 cursor-pointer">giveaways</p>
              <p className="my-0.5 cursor-pointer">premier access</p>
            </div>
            <div className="flex items-center border border-secondary bg-secondary rounded-full w-[90%] my-6">
              <input
                type="email"
                name="email"
                placeholder="email"
                className="border-r border-secondary bg-[#f8f8f8] p-2 rounded-l-full outline-none w-1/2"
              />
              <EastIcon
                sx={{
                  margin: "0 auto",
                  color: "white",
                }}
              />
            </div>
          </div>
        </div>
        <div className="w-full">
          <p className="font-semibold ">shop</p>
          <div className=" mt-2">
            <p className="my-0.5 cursor-pointer">brands</p>
            <p className="my-0.5 cursor-pointer">apparel</p>
            <p className="my-0.5 cursor-pointer">art</p>
            <p className="my-0.5 cursor-pointer">accessories</p>
          </div>
        </div>
        <div className="w-full">
          <p className="font-semibold ">company</p>
          <div className=" mt-2">
            <p className="my-0.5 cursor-pointer">about us</p>
            <p className="my-0.5 cursor-pointer">brava spotlight</p>
            <p className="my-0.5 cursor-pointer">join brava</p>
            <p className="my-0.5 cursor-pointer">become an affiliate</p>
            <p className="my-0.5 cursor-pointer">privacy policy</p>
          </div>
        </div>
        <div className="w-full">
          <p className="font-semibold">help</p>
          <div className=" mt-2">
            <p className="my-0.5 cursor-pointer">info@bravaland.com</p>
            <p className="my-0.5 cursor-pointer">returns/exchanges</p>
            <p className="my-0.5 cursor-pointer">faqs</p>
            <p className="my-0.5 cursor-pointer">contact us</p>
          </div>
        </div>
      </section>
      <div className="flex justify-around items-center bg-[#f8f8f8] p-4">
        <TwitterIcon
          sx={{
            border: "1px solid #212122",
            padding: "8px",
            fontSize: "40px",
            borderRadius: "50px",
          }}
        />
        <FaTiktok
          size={40}
          className="border border-secondary p-2 rounded-full"
        />
        <InstagramIcon
          sx={{
            border: "1px solid #212122",
            padding: "8px",
            fontSize: "40px",
            borderRadius: "50px",
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;
