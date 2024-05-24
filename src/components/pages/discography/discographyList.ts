const discographyImages: string[] = [];

for (let i = 1; i <= 18; i++) {
  discographyImages.push(`disco-${i}.jpg`);
}

export type discographyListType = {
  id: number;
  disco: string;
};

export const discographyList: discographyListType[] = [
  {
    id: 1,
    disco: discographyImages[0],
  },
  {
    id: 2,
    disco: discographyImages[1],
  },
  {
    id: 3,
    disco: discographyImages[2],
  },
  {
    id: 4,
    disco: discographyImages[3],
  },
  {
    id: 5,
    disco: discographyImages[4],
  },
  {
    id: 6,
    disco: discographyImages[5],
  },
  {
    id: 7,
    disco: discographyImages[6],
  },
  {
    id: 8,
    disco: discographyImages[7],
  },
  {
    id: 9,
    disco: discographyImages[8],
  },
  {
    id: 10,
    disco: discographyImages[9],
  },
  {
    id: 11,
    disco: discographyImages[10],
  },
  {
    id: 12,
    disco: discographyImages[11],
  },
  {
    id: 13,
    disco: discographyImages[12],
  },
  {
    id: 14,
    disco: discographyImages[13],
  },
  {
    id: 15,
    disco: discographyImages[14],
  },
  {
    id: 16,
    disco: discographyImages[15],
  },
  {
    id: 17,
    disco: discographyImages[16],
  },
  {
    id: 18,
    disco: discographyImages[17],
  },
];
