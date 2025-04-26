import { NavLink } from "react-router";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Login() {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !password) {
      setError("Vennligst fyll ut alle felt");
      return;
    }

    if (!email.includes("@")) {
      setError("Vennligst skriv inn en gyldig e-postadresse");
      return;
    }

    if (email === "test@uib.no" && password === "test") {
      setError("");
      navigate("/");
    } else {
      setError("Feil e-post eller passord");
    }
  }

  return (
    <div className="flex items-center justify-center mt-12 flex-col">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 items-center w-72"
      >
        <h1 className="text-2xl font-bold mb-8">Logg inn</h1>
        <input
          className="border p-2 rounded w-full"
          type="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-post"
        />
        <input
          className="border p-2 rounded w-full"
          type="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Passord"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          className="hover:bg-[#0A2343] bg-[#1767CE] text-white px-4 py-2 rounded w-full"
          type="submit"
        >
          Logg inn
        </button>
      </form>
      <p className="mt-4">
        Ikke profil? {""}
        <NavLink to="/register">Registrer deg</NavLink>
      </p>
    </div>
  );
}
