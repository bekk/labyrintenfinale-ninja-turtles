import type { Route } from "./+types/home";
import { useNavigate } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [{ title: "RIKSTEAM" }];
}

export default function Register() {
  let navigate = useNavigate();

  return (
    <div className="min-h-full flex flex-col items-center justify-center gap-6 p-12">
      <h1 className="text-xl">Velg påloggingstype</h1>
      <div className="flex flex-row gap-6">
        {" "}
        <button
          className="hover:bg-[#0A2343] bg-[#1767CE] text-[#F8FBFF] font-semibold py-8 px-12 rounded"
          onClick={() => navigate("/register/company")}
        >
          For Produksjonsteam
        </button>
        <button
          className="hover:bg-[#0A2343] bg-[#1767CE] text-[#F8FBFF] font-semibold  py-8 px-12 rounded"
          onClick={() => navigate("/register/personal")}
        >
          For Enkeltpersoner
        </button>
      </div>
    </div>
  );
}
