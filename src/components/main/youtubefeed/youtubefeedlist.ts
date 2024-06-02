const Festival01 = "/assets/videos/festival-01.mp4";
const Festival02 = "/assets/videos/festival-02.mp4";
const Festival03 = "/assets/videos/festival-03.mp4";
const YoutubeFeed01 = "/assets/images/youtube/youtube-1.jpg";
const YoutubeFeed02 = "/assets/images/youtube/youtube-2.jpg";
const YoutubeFeed03 = "/assets/images/youtube/youtube-3.jpg";

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
