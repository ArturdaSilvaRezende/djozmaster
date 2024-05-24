const carouselImagesPath: string[] = [];
const fullYear = new Date();

for (let i = 1; i < 9; i++) {
  carouselImagesPath.push(`/assets/images/videos/videos-${i}.jpg`);
}

export type CarouselListType = {
  id: number;
  carouselTitle: string;
  data: string;
  imagePath: string;
  videoName: string;
};

export const CarouselList: CarouselListType[] = [
  {
    id: 1,
    carouselTitle: `Tiësto - Live Electric Daisy Carnival Las Vegas ${fullYear.getFullYear()}`,
    data: `Dec 17, ${fullYear.getFullYear()}`,
    imagePath: carouselImagesPath[0],
    videoName: "about.mp4",
  },
  {
    id: 2,
    carouselTitle: `Martin Garrix - Live Ultra Music Festival Miami ${fullYear.getFullYear()}`,
    data: `Dec 17, ${fullYear.getFullYear()}`,
    imagePath: carouselImagesPath[1],
    videoName: "festival-01.mp4",
  },
  {
    id: 3,
    carouselTitle: `Armin van Buuren live at Tomorrowland ${fullYear.getFullYear()}`,
    data: `Dec 17, ${fullYear.getFullYear()}`,
    imagePath: carouselImagesPath[2],
    videoName: "festival-02.mp4",
  },
  {
    id: 4,
    carouselTitle: `Martin Garrix - Live Ultra Music Festival Miami ${fullYear.getFullYear()}`,
    data: `Dec 17, ${fullYear.getFullYear()}`,
    imagePath: carouselImagesPath[3],
    videoName: "festival-03.mp4",
  },
  {
    id: 5,
    carouselTitle: `Electric Love Festival ${fullYear.getFullYear()} - The Opening Ceremony`,
    data: `Dec 17, ${fullYear.getFullYear()}`,
    imagePath: carouselImagesPath[4],
    videoName: "hero.mp4",
  },
  {
    id: 6,
    carouselTitle: `Tiësto - Live Electric Daisy Carnival Las Vegas ${fullYear.getFullYear()}`,
    data: `Dec 17, ${fullYear.getFullYear()}`,
    imagePath: carouselImagesPath[5],
    videoName: "services.mp4",
  },
  {
    id: 7,
    carouselTitle: `Martin Garrix - Live Ultra Music Festival Miami ${fullYear.getFullYear()}`,
    data: `Dec 17, ${fullYear.getFullYear()}`,
    imagePath: carouselImagesPath[6],
    videoName: "about.mp4",
  },
  {
    id: 8,
    carouselTitle: `Armin van Buuren live at Tomorrowland ${fullYear.getFullYear()}`,
    data: `Dec 17, ${fullYear.getFullYear()}`,
    imagePath: carouselImagesPath[7],
    videoName: "festival-01.mp4",
  },
];
