const Event01 = "event-1.jpg";
const Event02 = "event-2.jpg";
const Event03 = "event-3.jpg";
const Event04 = "event-4.jpg";
const Event05 = "event-5.jpg";
const Event06 = "event-6.jpg";
const Event07 = "event-7.jpg";
const Event08 = "event-8.jpg";
const Event09 = "event-9.jpg";

export type EventsType = {
  img: string;
  eventData: string;
  artist: string;
  address: string;
};

export const EventList: EventsType[] = [
  {
    img: `${Event01}`,
    eventData: "Dec 19, 2022",
    artist: "Ashley Wright",
    address: "Funkhaus Berlin, Berlin, Germany",
  },
  {
    img: `${Event02}`,
    eventData: "Dec 19, 2022",
    artist: "Emma Johnson",
    address: "Funkhaus Berlin, Berlin, Germany",
  },
  {
    img: `${Event03}`,
    eventData: "Dec 19, 2022",
    artist: "Kenzie Hall",
    address: "Funkhaus Berlin, Berlin, Germany",
  },
  {
    img: `${Event04}`,
    eventData: "Dec 20, 2022",
    artist: "Thierry Torres",
    address: "Funkhaus Berlin, Berlin, Germany",
  },
  {
    img: `${Event05}`,
    eventData: "Dec 20, 2022",
    artist: "Ryan Carter",
    address: "Funkhaus Berlin, Berlin, Germany",
  },
  {
    img: `${Event06}`,
    eventData: "Dec 20, 2022",
    artist: "Edward Reed",
    address: "Funkhaus Berlin, Berlin, Germany",
  },
  {
    img: `${Event07}`,
    eventData: "Dec 21, 2022",
    artist: "Lucille Thompson",
    address: "Funkhaus Berlin, Berlin, Germany",
  },
  {
    img: `${Event08}`,
    eventData: "Dec 21, 2022",
    artist: "Mary Barnes",
    address: "Funkhaus Berlin, Berlin, Germany",
  },
  {
    img: `${Event09}`,
    eventData: "Dec 21, 2022",
    artist: "Micheline Collins",
    address: "Funkhaus Berlin, Berlin, Germany",
  },
];
