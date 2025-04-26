export type Advertisement = {
  id: string;
  title: string;
  description: string;
  city: string;
  location: string;
  createdAt: string;
  startDate: string;
  endDate: string;
  userId: string;
  isCompany: boolean;
  image: string;
};

export const advertisements: Advertisement[] = [
  {
    id: "1",
    title: "Skuespillere søkes til dramaserie",
    description:
      "Vi søker kvinnelige og mannlige skuespillere i alderen 20-40 år for kommende dramaserie på TV2.",
    city: "Oslo",
    location: "Filmparken Jar",
    createdAt: "2024-04-01",
    startDate: "2024-05-15",
    endDate: "2024-07-30",
    userId: "user123",
    isCompany: true,
    image: "app/components/images/nrk.png",
  },
  {
    id: "2",
    title: "Statister til Netflix-produksjon",
    description:
      "Vi trenger 50 statister til opptak av ny Netflix-serie, opptak foregår i Bergen sentrum.",
    city: "Bergen",
    location: "Bryggen, Bergen sentrum",
    createdAt: "2024-03-28",
    startDate: "2024-06-10",
    endDate: "2024-06-25",
    userId: "user456",
    isCompany: true,
    image: "app/components/images/nrk.png",
  },
  {
    id: "3",
    title: "Location Manager ledig for nye prosjekter",
    description:
      "Erfaren location manager med gode referanser fra NRK-produksjoner tilgjengelig fra august 2024.",
    city: "Trondheim",
    location: "Sentrum",
    createdAt: "2024-04-05",
    startDate: "2024-08-01",
    endDate: "2024-12-31",
    userId: "user789",
    isCompany: false,
    image: "app/components/images/johanne.jpg",
  },
  {
    id: "4",
    title: "Produksjonsassistent ønskes",
    description:
      "Vi søker en produksjonsassistent til dokumentarfilm, oppstart snarest.",
    city: "Stavanger",
    location: "Filmkraft Rogaland",
    createdAt: "2024-04-10",
    startDate: "2024-05-01",
    endDate: "2024-09-15",
    userId: "user321",
    isCompany: true,
    image: "app/components/images/nrk.png",
  },
  {
    id: "5",
    title: "Filmfotograf tilbyr tjenester",
    description:
      "Freelance filmfotograf med erfaring fra reklamefilmer og musikkvideoer tilbyr sine tjenester.",
    city: "Oslo",
    location: "Majorstuen",
    createdAt: "2024-04-02",
    startDate: "2024-04-15",
    endDate: "2024-12-31",
    userId: "user654",
    isCompany: false,
    image: "app/components/images/henrik.png",
  },
];
