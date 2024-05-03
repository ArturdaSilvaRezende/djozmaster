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
  festivalName: string;
};

export const FestivalList: FestivalType[] = [
  {
    id: 1,
    fileVideoName: `${Festival01}`,
    fileImageName: `${YoutubeFeed01}`,
    festivalName: "David Guetta Miami Ultra Music Festival",
  },
  {
    id: 2,
    fileVideoName: `${Festival02}`,
    fileImageName: `${YoutubeFeed02}`,
    festivalName: "Martin Garrix (Full live-set) | SLAM!Koningsdag",
  },
  {
    id: 3,
    fileVideoName: `${Festival03}`,
    fileImageName: `${YoutubeFeed03}`,
    festivalName: "Dimitri Vegas, Steve Aoki & Like Mike’s",
  },
];
