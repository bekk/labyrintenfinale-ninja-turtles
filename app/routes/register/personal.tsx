import { useState } from "react";
import { NavLink } from "react-router";
import { useNavigate } from "react-router";

export default function RegisterForm() {
  let navigate = useNavigate();

  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");

  function handleProfileImageChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];
    if (file) {
      setProfileImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  }

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

    navigate("/");
  }

  return (
    <div className="flex items-center justify-center my-12 flex-col">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 items-center w-72"
      >
        <h1 className="text-2xl font-bold mb-8">Registrer deg</h1>
        <label className="flex flex-col items-center gap-2 cursor-pointer">
          {previewUrl ? (
            <img
              src={previewUrl}
              alt="Profile Preview"
              className="w-32 h-32 rounded-full object-cover border-4 border-lightblue"
            />
          ) : (
            <div className="w-32 h-32 rounded-full flex items-center justify-center border-4 border-dashed border-lightblue text-lightblue">
              Velg bilde
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleProfileImageChange}
            className="hidden"
          />
        </label>
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
          placeholder="Ferdigheter"
        />
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Skriv litt om deg selv..."
          className="w-full max-w-md p-4 rounded-lg bg-[#F8FBFF] text-black resize-none h-40 shadow-md"
        />
        {error && <p className="text-red-500 text-center">{error}</p>}
        <button
          className="hover:bg-[#0A2343] bg-[#1767CE] text-white px-4 py-2 rounded w-full"
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
