import { HeroSection } from "~/components/HeroSection";
import type { Route } from "./+types/home";
import { Info } from "~/components/Info";

export function meta({}: Route.MetaArgs) {
  return [{ title: "RIKSTEAM" }];
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <Info />
    </>
  );
}
