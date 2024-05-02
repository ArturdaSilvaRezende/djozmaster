const soundsFile: string[] = [];

for (let i = 1; i <= 9; i++) {
  soundsFile.push(`sound-0${i}.mp3`);
}

export type SoundsListType = {
  id: number;
  artist: string;
  music: string;
  file: string;
};

export const SoundsList: SoundsListType[] = [
  {
    id: 1,
    artist: "A7S S1mba",
    music: "On On",
    file: soundsFile[0],
  },
  {
    id: 2,
    artist: "Acraze",
    music: "Do It To It",
    file: soundsFile[1],
  },
  {
    id: 3,
    artist: "Blasterjaxx",
    music: "Dynamite",
    file: soundsFile[2],
  },
  {
    id: 4,
    artist: "Felix Jaehn",
    music: "Rain In Ibiza",
    file: soundsFile[3],
  },
  {
    id: 5,
    artist: "Gabry Pont",
    music: "Call Me",
    file: soundsFile[4],
  },
  {
    id: 6,
    artist: "Kid Ink",
    music: "Tungevaag",
    file: soundsFile[5],
  },
  {
    id: 7,
    artist: "Kylie Cantrall",
    music: "Sad Boy",
    file: soundsFile[6],
  },
  {
    id: 8,
    artist: "Rain Radio",
    music: "He Goes Down",
    file: soundsFile[7],
  },
  {
    id: 9,
    artist: "Roman Messer",
    music: "Get Down",
    file: soundsFile[8],
  },
];
