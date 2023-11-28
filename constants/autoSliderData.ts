export interface autoSliderDataType {
  id: string;
  image: any;
  background: string;
  label: string;
  callToAction: string;
}

export const autoSliderData: autoSliderDataType[] = [
  {
    id: "01",
    image: require("@/public/assets/slider_01.png"),
    background: "#236bd3",
    label: "$hosky",
    callToAction: "shop now",
  },
  {
    id: "02",
    image: require("@/public/assets/slider_02.png"),
    background: "#a152d1",
    label: "danketsu",
    callToAction: "shop now",
  },
  {
    id: "03",
    image: require("@/public/assets/slider_03.png"),
    background: "#08212d",
    label: "bitfins",
    callToAction: "shop now",
  },
  {
    id: "04",
    image: require("@/public/assets/slider_04.png"),
    background: "#000000",
    label: "future fest",
    callToAction: "shop now",
  },
  {
    id: "05",
    image: require("@/public/assets/slider_05.png"),
    background: "#09202d",
    label: "brigado",
    callToAction: "shop now",
  },
  {
    id: "06",
    image: require("@/public/assets/slider_06.png"),
    background: "#000000",
    label: "pendulum",
    callToAction: "shop now",
  },
];
