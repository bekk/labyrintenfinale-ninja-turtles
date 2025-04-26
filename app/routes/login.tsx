import type { Route } from "./+types/home";
import Header from "~/components/Header";

export function meta({}: Route.MetaArgs) {
  return [{ title: "RIKSTEAM" }];
}

export default function Login() {
  return (
    <>
      <Header />
    </>
  );
}
