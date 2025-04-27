import RegisterButton from "~/components/ButtonWithIcon/RegisterButton";
const backgroundVideo = "/tettstedet.mp4";

export function HeroSection() {
  const loggedIn =
    typeof window !== "undefined" &&
    localStorage.getItem("isLoggedIn") === "true";
  return (
    <section className="h-[104.7vh] w-full flex items-center justify-center text-white text-center relative">
      <video
        className="absolute inset-0 w-full h-[104.7vh] object-cover"
        src={backgroundVideo}
        autoPlay
        loop
        muted
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 p-8">
        <p className="text-6xl md:text-7xl font-bold">Velkommen til RIKSTEAM</p>
        <p className="mt-6 text-lg md:text-2xl">
          Sammen bygger vi fremtiden av lokal filmproduksjon
        </p>
        <div className="mt-4">{loggedIn ? null : <RegisterButton />}</div>
      </div>
    </section>
  );
}
