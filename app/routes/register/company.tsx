import { useState } from "react";
import { NavLink } from "react-router";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (password !== repeatPassword) {
      setError("Passordene må være like");
      return;
    }

    if (!email || !name || !password || !repeatPassword) {
      setError("Vennligst fyll ut alle felt");
      return;
    }

    if (!email.includes("@")) {
      setError("Vennligst skriv inn en gyldig e-postadresse");
      return;
    }

    if (password.length < 6) {
      setError("Passordet må være minst 6 tegn langt");
      return;
    }
  }

  return (
    <div className="flex items-center justify-center my-12 flex-col">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 items-center w-72"
      >
        <h1 className="text-2xl font-bold mb-8">Registrer deg</h1>
        <input
          className="border p-2 rounded w-full"
          type="Navn"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Navn"
        />
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
        <input
          className="border p-2 rounded w-full"
          type="Password"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          placeholder="Gjenta passord"
        />
        <input
          type="text"
          className="border p-2 rounded w-full"
          placeholder="Bedriftsnavn"
        />
        <input
          type="text"
          className="border p-2 rounded w-full"
          placeholder="Oppdrag"
        />

        {error && <p className="text-red-500 text-center">{error}</p>}
        <button
          className="bg-black text-white px-4 py-2 rounded w-full"
          type="submit"
        >
          Register deg
        </button>
      </form>
      <p className="mt-4">
        Har du en profil fra før? {""}
        <NavLink to="/login">Logg inn</NavLink>
      </p>
    </div>
  );
}
