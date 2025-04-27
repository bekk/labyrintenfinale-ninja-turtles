export type User = {
  id: string;
  name: string;
  isCompany: boolean;
  city: string;
  profileImage: string;
  experience: string;
  equipment?: string[]; // kun for de som har utstyr (filmfolk etc.)
};

export function getUserFromId(id: string): User | undefined {
  return users.find((user) => user.id === id);
}
export const users: User[] = [
  {
    id: "user123",
    name: "NRK Produksjon",
    isCompany: true,
    city: "Oslo",
    profileImage: "/nrk.png",
    experience: "Lang erfaring med TV- og dramaproduksjoner for NRK.",
  },
  {
    id: "user456",
    name: "NRK Statistavdeling",
    isCompany: true,
    city: "Bergen",
    profileImage: "/nrk.png",
    experience: "Koordinerer statister til krim- og dramaserier nasjonalt.",
  },
  {
    id: "user789",
    name: "Johanne L.",
    isCompany: false,
    city: "Trondheim",
    profileImage: "/johanne.jpg",
    experience:
      "Location Manager med 7 års erfaring fra større NRK-prosjekter.",
    equipment: ["Lokasjonsdatabase", "Kommunikasjonsutstyr"],
  },
  {
    id: "user321",
    name: "Fabel Film",
    isCompany: true,
    city: "Stavanger",
    profileImage: "/nrk.png",
    experience: "Dokumentarproduksjon med fokus på samfunn og miljø.",
  },
  {
    id: "user654",
    name: "Henrik A.",
    isCompany: false,
    city: "Oslo",
    profileImage: "/henrik.png",
    experience:
      "Freelance filmfotograf innen reklame, musikkvideo og kortfilm.",
    equipment: ["RED Komodo 6K", "Sony A7S III", "Lysutstyr", "Droner"],
  },
  {
    id: "DroneElsker",
    name: "Andreas Dronemann",
    isCompany: false,
    city: "Oslo",
    profileImage: "/drone.png",
    experience: "Dronepilot med spesialisering på natur- og byfilmopptak.",
    equipment: ["DJI Mavic 3 Cine", "DJI Inspire 2"],
  },
  {
    id: "jegSelgerUtstyr",
    name: "Utstyrsbasen",
    isCompany: true,
    city: "Drammen",
    profileImage: "/utstyr.png",
    experience:
      "Tilbyr utleie og salg av brukt filmutstyr til lave priser for bærekraftige produksjoner.",
    equipment: ["Kameraer", "Lysutstyr", "Griputstyr", "Audio-utstyr"],
  },
  {
    id: "kameraElsker",
    name: "Maja K.",
    isCompany: false,
    city: "Bergen",
    profileImage: "/kamera.png",
    experience: "Freelance kameraoperatør med fokus på dokumentar og kortfilm.",
    equipment: ["Blackmagic Pocket 6K", "Sigma Cine Lenses", "Zhiyun Gimbal"],
  },
];
