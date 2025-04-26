import { useEffect, useState } from "react";

const backgroundImages = [
  "/public/bergen.jpg",
  "/public/bergen2.jpg",
  "/public/lofoten.webp",
];

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentImage = backgroundImages[currentImageIndex];

  return (
    <section
      className="h-[80vh] w-full bg-cover bg-center flex items-center justify-center text-white text-center relative transition-all duration-1000"
      style={{ backgroundImage: `url(${currentImage})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 p-8">
        <h1 className="text-4xl md:text-6xl font-bold">
          Velkommen til RIKSTEAM
        </h1>
        <p className="mt-4 text-lg md:text-2xl">
          Sammen bygger vi fremtiden av lokal filmproduksjon
        </p>
      </div>
    </section>
  );
}
