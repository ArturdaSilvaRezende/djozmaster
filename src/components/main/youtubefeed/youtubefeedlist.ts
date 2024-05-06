const Festival01 = "festival-01.mp4";
const Festival02 = "festival-02.mp4";
const Festival03 = "festival-03.mp4";
const YoutubeFeed01 = "youtube-1.jpg";
const YoutubeFeed02 = "youtube-2.jpg";
const YoutubeFeed03 = "youtube-3.jpg";

export type FestivalType = {
  id: number;
  fileVideoName: string;
  fileImageName: string;
  festivalAbout: string;
};

export const FestivalList: FestivalType[] = [
  {
    id: 1,
    fileVideoName: `${Festival01}`,
    fileImageName: `${YoutubeFeed01}`,
    festivalAbout: "Bailey McKee - Home",
  },
  {
    id: 2,
    fileVideoName: `${Festival02}`,
    fileImageName: `${YoutubeFeed02}`,
    festivalAbout: "Venue Annoucement",
  },
  {
    id: 3,
    fileVideoName: `${Festival03}`,
    fileImageName: `${YoutubeFeed03}`,
    festivalAbout: "Seven Lions, Jason Ross",
  },
];
