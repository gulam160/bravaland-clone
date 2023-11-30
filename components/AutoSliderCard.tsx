import React from "react";
import Image from "next/image";

interface AutoSliderCardProps {
  id: string;
  image: string;
  background: string;
  label: string;
  callToAction: string;
}

const AutoSliderCard: React.FC<AutoSliderCardProps> = ({
  id,
  image,
  label,
  background,
  callToAction,
}) => {
  return (
    <div
      style={{
        background: background,
        borderRadius: "300px 30px 30px 300px",
      }}
      className="flex justify-between w-[350px] sm:w-[300px] mx-4 cursor-pointer"
    >
      <Image
        src={image}
        alt={`slider-${id}`}
        className="w-36 sm:w-28 h-auto rounded-full"
      />
      <div className="flex flex-col boreder border-red-600 justify-between py-6 px-4">
        <h1 className="text-white text-right text-3xl font-bold font-nova">
          {label}
        </h1>
        <p className="text-white text-right underline cursor-pointer">
          {callToAction}
        </p>
      </div>
    </div>
  );
};

export default AutoSliderCard;
