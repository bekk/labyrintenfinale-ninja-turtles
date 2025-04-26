import LoginForm from "~/components/LoginForm";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "RIKSTEAM" }];
}

export default function Login() {
  return <LoginForm />;
}
