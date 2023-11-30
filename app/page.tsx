"use client";
import AutoSliderCard from "@/components/AutoSliderCard";
import Carousel from "@/components/Carousel";
import NewArrivalCard from "@/components/NewArrivalCard";
import { autoSliderData } from "@/constants/autoSliderData";
import { newArrivalCardData } from "@/constants/newArrivalCardData";
import Marquee from "react-fast-marquee";

function Home() {
  return (
    <main>
      <Carousel />
      <section className="my-10 py-2 sm:my-2 md:my-4 lg:4">
        <Marquee className="whitespace-nowrap" pauseOnHover={true} speed={60}>
          {autoSliderData &&
            autoSliderData.map(
              ({ id, image, label, callToAction, background }) => (
                <AutoSliderCard
                  key={id}
                  id={id}
                  image={image}
                  background={background}
                  callToAction={callToAction}
                  label={label}
                />
              )
            )}
        </Marquee>
      </section>
      <section className="my-10 sm:my-4 w-full">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-3xl font-bold font-nova underline text-secondary">
            new arrivals
          </h1>
          <p className="text-lg font-bold text-secondary text-center">
            Elevated style you can take with you into the 3D.
          </p>
        </div>
        <div className="w-full my-8">
          <div className="flex flex-row justify-around items-center flex-wrap gap-8 px-4">
            {newArrivalCardData.map(({ action, id, image, product }) => (
              <NewArrivalCard
                key={id}
                action={action}
                id={id}
                image={image}
                product={product}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
