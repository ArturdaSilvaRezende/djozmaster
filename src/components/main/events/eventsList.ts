const Event01 = "/assets/images/events/event-1.jpg";
const Event02 = "/assets/images/events/event-2.jpg";
const Event03 = "/assets/images/events/event-3.jpg";
const Event04 = "/assets/images/events/event-4.jpg";
const Event05 = "/assets/images/events/event-5.jpg";
const Event06 = "/assets/images/events/event-6.jpg";
const Event07 = "/assets/images/events/event-7.jpg";
const Event08 = "/assets/images/events/event-8.jpg";
const Event09 = "/assets/images/events/event-9.jpg";

export type EventsType = {
  id: number;
  img: string;
  eventData: string;
  artist: string;
  address: string;
};

const fullYear = new Date();

export const EventList: EventsType[] = [
  {
    id: 1,
    img: `${Event01}`,
    eventData: `Dec 19, ${fullYear.getFullYear()}`,
    artist: "Ashley Wright",
    address: "Funkhaus Berlin, Berlin, Germany",
  },
  {
    id: 2,
    img: `${Event02}`,
    eventData: `Dec 19, ${fullYear.getFullYear()}`,
    artist: "Emma Johnson",
    address: "Funkhaus Berlin, Berlin, Germany",
  },
  {
    id: 3,
    img: `${Event03}`,
    eventData: `Dec 19, ${fullYear.getFullYear()}`,
    artist: "Kenzie Hall",
    address: "Funkhaus Berlin, Berlin, Germany",
  },
  {
    id: 4,
    img: `${Event04}`,
    eventData: `Dec 20, ${fullYear.getFullYear()}`,
    artist: "Thierry Torres",
    address: "Funkhaus Berlin, Berlin, Germany",
  },
  {
    id: 5,
    img: `${Event05}`,
    eventData: `Dec 20, ${fullYear.getFullYear()}`,
    artist: "Ryan Carter",
    address: "Funkhaus Berlin, Berlin, Germany",
  },
  {
    id: 6,
    img: `${Event06}`,
    eventData: `Dec 20, ${fullYear.getFullYear()}`,
    artist: "Edward Reed",
    address: "Funkhaus Berlin, Berlin, Germany",
  },
  {
    id: 7,
    img: `${Event07}`,
    eventData: `Dec 21, ${fullYear.getFullYear()}`,
    artist: "Lucille Thompson",
    address: "Funkhaus Berlin, Berlin, Germany",
  },
  {
    id: 8,
    img: `${Event08}`,
    eventData: `Dec 21, ${fullYear.getFullYear()}`,
    artist: "Mary Barnes",
    address: "Funkhaus Berlin, Berlin, Germany",
  },
  {
    id: 9,
    img: `${Event09}`,
    eventData: `Dec 21, ${fullYear.getFullYear()}`,
    artist: "Micheline Collins",
    address: "Funkhaus Berlin, Berlin, Germany",
  },
  {
    id: 10,
    img: `${Event01}`,
    eventData: `Dec 19, ${fullYear.getFullYear()}`,
    artist: "Ashley Wright",
    address: "Funkhaus Berlin, Berlin, Germany",
  },
  {
    id: 11,
    img: `${Event02}`,
    eventData: `Dec 19, ${fullYear.getFullYear()}`,
    artist: "Emma Johnson",
    address: "Funkhaus Berlin, Berlin, Germany",
  },
  {
    id: 12,
    img: `${Event03}`,
    eventData: `Dec 19, ${fullYear.getFullYear()}`,
    artist: "Kenzie Hall",
    address: "Funkhaus Berlin, Berlin, Germany",
  },
];
