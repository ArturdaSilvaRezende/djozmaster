const ServicesImages: string[] = [];

for (let i = 1; i <= 4; i++) {
  ServicesImages.push(`service-${i}.png`);
}

export type ServicesImageType = {
  id: number;
  icon: string;
  title: string;
  description: string;
  bgColor: string;
};

export const ServicesList: ServicesImageType[] = [
  {
    id: 1,
    icon: ServicesImages[0],
    title: "Wedding",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    bgColor: "#5400BC",
  },
  {
    id: 2,
    icon: ServicesImages[1],
    title: "Clubs and bar",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    bgColor: "#5c00ce",
  },
  {
    id: 3,
    icon: ServicesImages[2],
    title: "Corporate events",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    bgColor: "#5c00ce",
  },
  {
    id: 4,
    icon: ServicesImages[3],
    title: "DJ lessons",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    bgColor: "#5400BC",
  },
];
