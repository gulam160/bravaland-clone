"use clients";
import { carouselData } from "@/constants/carouselData";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const Carousel = () => {
  const [ishovered, setIsHovered] = useState(false);
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(index);

  const incrementIndex = () => {
    if (index === carouselData.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
      setPrevIndex(index);
    }
  };
  const decrementIndex = () => {
    if (index <= 0) {
      setIndex(carouselData.length - 1);
    } else {
      setIndex(index - 1);
      setPrevIndex(index);
    }
  };

  const direction = index > prevIndex ? "increasing" : "decreasing";

  useEffect(() => {
    const interverId = setInterval(() => {
      incrementIndex();
    }, 3000);
    return () => clearInterval(interverId);
  }, [index]);

  return (
    <section
      className="w-full relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {ishovered && (
        <div className="flex justify-between items-center px-4 w-full absolute top-[43%]">
          <button
            className={`bg-secondary hover:bg-white p-3 sm:p-2 rounded-full`}
            onClick={decrementIndex}
          >
            <WestIcon className="text-white sm:text-sm hover:text-secondary" />
          </button>
          <button
            className={`bg-secondary hover:bg-white p-3 sm:p-2 rounded-full`}
            onClick={incrementIndex}
          >
            <EastIcon className="text-white sm:text-sm hover:text-secondary" />
          </button>
        </div>
      )}
      <div className="overflow-hidden sm:h-[35vh]">
        <motion.div
          key={index}
          variants={{
            enter: { x: direction === "increasing" ? 100 : -100 },
            center: { x: 0 },
            exit: { x: direction === "increasing" ? -100 : 100 },
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6 }}
          className="sm:h-full"
        >
          <Image
            src={carouselData[index]?.image}
            alt={`carousel_${carouselData[index]?.id}`}
            className="w-full h-auto sm:h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Carousel;
