export type Advertisement = {
  id: string;
  title: string;
  description: string;
  city: string;
  location: {
    latitude: number;
    longitude: number;
  };
  createdAt: string;
  startDate: string;
  endDate: string;
  userId: string;
  isCompany: boolean;
  isEquipment: boolean;
  image: string;
};

export function getAdFromId(id: string): Advertisement | undefined {
  return advertisements.find((ad) => ad.id === id);
}

export const advertisements: Advertisement[] = [
  {
    id: "1",
    title: "Filmfotograf med drone søkes",
    description:
      "Vi søker en erfaren filmfotograf med dronekompetanse til opptak av naturdokumentar.",
    city: "Lofoten",
    location: {
      latitude: 68.166356,
      longitude: 13.658062,
    },
    createdAt: "2024-04-01",
    startDate: "2024-05-15",
    endDate: "2024-07-30",
    userId: "user123",
    isCompany: true,
    isEquipment: false,
    image: "/nrk.png",
  },
  {
    id: "2",
    title: "Statister til produksjon",
    description:
      "Vi trenger 50 statister til opptak av ny krim-serie, opptak foregår i Bergen sentrum.",
    city: "Bergen",
    location: {
      latitude: 60.3971,
      longitude: 5.3245,
    },
    createdAt: "2024-03-28",
    startDate: "2024-06-10",
    endDate: "2024-06-25",
    userId: "user456",
    isCompany: true,
    isEquipment: false,
    image: "/nrk.png",
  },
  {
    id: "3",
    title: "Dronefotograf tilgjengelig",
    description:
      "Erfaren location manager med gode referanser fra NRK-produksjoner tilgjengelig fra august 2024.",
    city: "Lofoten",
    location: {
      latitude: 68.166356,
      longitude: 13.658062,
    },
    createdAt: "2024-04-05",
    startDate: "2024-08-01",
    endDate: "2024-12-31",
    userId: "user789",
    isCompany: false,
    isEquipment: false,
    image: "/johanne.jpg",
  },
  {
    id: "4",
    title: "Lydtekniker søkes umiddelbart",
    description:
      "Vi søker en erfaren lydtekniker til opptak av dokumentarfilm i Stavanger, da vi har fått en avbestilling.",
    city: "Stavanger",
    location: {
      latitude: 58.969975,
      longitude: 5.733107,
    },
    createdAt: "2024-04-10",
    startDate: "2024-05-01",
    endDate: "2024-09-15",
    userId: "user321",
    isCompany: true,
    isEquipment: false,
    image: "/nrk.png",
  },
  {
    id: "5",
    title: "Filmfotograf tilbyr tjenester",
    description:
      "Freelance filmfotograf med erfaring fra reklamefilmer og musikkvideoer tilbyr sine tjenester.",
    city: "Oslo",
    location: {
      latitude: 59.928,
      longitude: 10.7162, // Majorstuen
    },
    createdAt: "2024-04-02",
    startDate: "2024-04-15",
    endDate: "2024-12-31",
    userId: "user654",
    isCompany: false,
    isEquipment: false,
    image: "/henrik.png",
  },
  {
    id: "6",
    title: "Drone til leie",
    description:
      "Drone som kan brukes til filming av landskap og arrangementer.",
    city: "Oslo",
    location: {
      latitude: 59.928,
      longitude: 10.7162, // Majorstuen
    },
    createdAt: "2024-04-02",
    startDate: "2024-04-15",
    endDate: "2024-12-31",
    userId: "DroneElsker",
    isCompany: false,
    isEquipment: true,

    image: "/drone.png",
  },
  {
    id: "7",
    title: "Lydtekniker basert i Tromsø tilgjengelig",
    description:
      "Lokalkjent lydtekniker med bærekraftig utstyr tilgjengelig for produksjoner i Nord-Norge.",
    city: "Tromsø",
    location: {
      latitude: 69.6496,
      longitude: 18.956,
    },
    createdAt: "2024-04-20",
    startDate: "2024-05-01",
    endDate: "2024-12-31",
    userId: "user907",
    isCompany: false,
    isEquipment: false,
    image: "/henrik.png",
  },
  {
    id: "8",
    title: "Elbil til leie for filmcrew",
    description:
      "Tesla Model Y tilgjengelig for transport av crew og utstyr under opptak i Oslo-området.",
    city: "Oslo",
    location: {
      latitude: 59.9139,
      longitude: 10.7522,
    },
    createdAt: "2024-04-22",
    startDate: "2024-05-01",
    endDate: "2024-08-31",
    userId: "greenrides",
    isCompany: false,
    isEquipment: true,
    image: "/henrik.png",
  },
  {
    id: "9",
    title: "Bærekraftig catering til filmproduksjon",
    description:
      "Vegetarisk cateringfirma tilbyr miljøvennlig matlevering til film- og TV-innspillinger i Vestfold.",
    city: "Tønsberg",
    location: {
      latitude: 59.2675,
      longitude: 10.407,
    },
    createdAt: "2024-04-23",
    startDate: "2024-05-10",
    endDate: "2024-12-01",
    userId: "greenbites",
    isCompany: true,
    isEquipment: false,
    image: "/henrik.png",
  },
  {
    id: "10",
    title: "Grip tilgjengelig i Kristiansand-området",
    description:
      "Grip med eget utstyr tilbyr tjenester til små og mellomstore produksjoner. Miljøfokusert transport og rigging.",
    city: "Kristiansand",
    location: {
      latitude: 58.1467,
      longitude: 7.9956,
    },
    createdAt: "2024-04-24",
    startDate: "2024-06-01",
    endDate: "2024-11-30",
    userId: "user858",
    isCompany: false,
    isEquipment: false,
    image: "/henrik.png",
  },
  {
    id: "11",
    title: "Gjenbrukbare scenografimaterialer til leie",
    description:
      "Stort lager av gjenbrukbare kulisser og rekvisitter tilgjengelig for bærekraftige produksjoner.",
    city: "Oslo",
    location: {
      latitude: 59.928,
      longitude: 10.7162,
    },
    createdAt: "2024-04-24",
    startDate: "2024-05-01",
    endDate: "2024-12-31",
    userId: "scenegjenbruk",
    isCompany: true,
    isEquipment: true,
    image: "/henrik.png",
  },
];
