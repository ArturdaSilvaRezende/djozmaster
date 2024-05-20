const TourImage01 = "/assets/images/tours/tour-1.jpg";
const TourImage02 = "/assets/images/tours/tour-2.jpg";
const TourImage03 = "/assets/images/tours/tour-3.jpg";
const fullYear = new Date();

export type toursListType = {
  id: number;
  title: string;
  toursAbout: string;
  toursDescription: string;
  tourImage: string;
};

export const toursList: toursListType[] = [
  {
    id: 1,
    title: `Untold Festival ${fullYear.getFullYear()}`,
    toursAbout:
      "Held in Europe’s electronic music capital on New Year’s Eve, the seminal Funkhaus Berlin hosts an impressive roster of techno artists worthy.",
    toursDescription:
      "Soundtracking the leap from 2019 into 2020 in what is one of the most anticipated nights of the year, in one of the city’s most hyped venues, HYTE Berlin NYE is the",
    tourImage: `${TourImage01}`,
  },
  {
    id: 2,
    title: `Untold Festival ${fullYear.getFullYear()}`,
    toursAbout:
      "Held in Europe’s electronic music capital on New Year’s Eve, the seminal Funkhaus Berlin hosts an impressive roster of techno artists worthy.",
    toursDescription:
      "Soundtracking the leap from 2019 into 2020 in what is one of the most anticipated nights of the year, in one of the city’s most hyped venues, HYTE Berlin NYE is the",
    tourImage: `${TourImage02}`,
  },
  {
    id: 3,
    title: `Untold Festival ${fullYear.getFullYear()}`,
    toursAbout:
      "Held in Europe’s electronic music capital on New Year’s Eve, the seminal Funkhaus Berlin hosts an impressive roster of techno artists worthy.",
    toursDescription:
      "Soundtracking the leap from 2019 into 2020 in what is one of the most anticipated nights of the year, in one of the city’s most hyped venues, HYTE Berlin NYE is the",
    tourImage: `${TourImage03}`,
  },
];
