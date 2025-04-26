import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Vårt formål" }];
}

export default function ourGoals() {
  return (
    <div className="flex flex-col items-center justify-center h-full mt-8">
    <h1 className="text-4xl font-bold mb-4">Vårt formål</h1>
    <p className="text-lg mb-2">
      Vi ønsker å hjelpe TV-selskap og freelancere med å connecte med hverandre lokalt i Norge.
    </p>
  </div>
  );
}
