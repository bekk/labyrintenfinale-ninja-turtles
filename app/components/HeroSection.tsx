const backgroundVideo = "/tettstedet.mp4";

export function HeroSection() {
  return (
    <section
      className="h-[80vh] w-full flex items-center justify-center text-white text-center relative"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={backgroundVideo}
        autoPlay
        loop
        muted
      />

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
