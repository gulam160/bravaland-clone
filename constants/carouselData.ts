export interface carouselDataType {
  id: string;
  image: any;
  label: string;
  callToAction: string;
}

export const carouselData: carouselDataType[] = [
  {
    id: "01",
    image: require("@/public/assets/carousel_01.png"),
    label: "",
    callToAction: "",
  },
  {
    id: "02",
    image: require("@/public/assets/carousel_02.png"),
    label: "",
    callToAction: "",
  },
  {
    id: "03",
    image: require("@/public/assets/carousel_03.png"),
    label: "",
    callToAction: "",
  },
  {
    id: "04",
    image: require("@/public/assets/carousel_04.png"),
    label: "",
    callToAction: "",
  },
  {
    id: "05",
    image: require("@/public/assets/carousel_05.png"),
    label: "",
    callToAction: "",
  },
];
