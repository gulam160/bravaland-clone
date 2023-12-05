import React from "react";
import { Image } from "@chakra-ui/react";

interface NewArrivalCardProps {
  id: string;
  image: string;
  product: string;
  action: string;
}

const NewArrivalCard: React.FC<NewArrivalCardProps> = (props) => {
  const { action, id, image, product } = props;

  return (
    <div
      className="w-96 h-96 mx-4 rounded-lg cursor-pointer relative shadow-arrival-card"
      tabIndex={0}
    >
      <Image
        src={image}
        alt={`${product}-${id}`}
        className="w-full rounded-lg"
      />
      <div className="bg-secondary opacity-80 w-full rounded-b-lg absolute bottom-0 left-0 right-0">
        <p className="text-white px-8 pt-3 cursor-pointer font-semibold">
          {product}
        </p>
        <p className="text-white underline px-8 pt-1 pb-3 cursor-pointer">
          {action}
        </p>
      </div>
    </div>
  );
};

export default NewArrivalCard;
