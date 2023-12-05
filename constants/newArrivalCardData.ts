export const newArrivalCardData = [
  {
    id: "01",
    image:
      "https://bravaland.com/cdn/shop/files/dbcb76bd-7f89-49bc-ac5c-f5d329d9d706_35546574-099b-49d8-9e8d-2b891e7ffc72_320x320_crop_center.jpg?v=1696932361",
    product: "framed poster",
    action: "shop now",
  },
  {
    id: "02",
    image:
      "https://bravaland.com/cdn/shop/files/HOSKY_1_1copia2_a1fc6ca3-71b3-427a-8bc3-e582c5f9e09b_320x320_crop_center.jpg?v=1696932502",
    product: "apparel",
    action: "shop now",
  },
  {
    id: "03",
    image:
      "https://bravaland.com/cdn/shop/files/iPhone14Full_ec6e7630-b45e-4a83-9937-5f7974d6b781_320x320_crop_center.png?v=1696932599",
    product: "phone case",
    action: "shop now",
  },
];

export const responsiveOptions = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
