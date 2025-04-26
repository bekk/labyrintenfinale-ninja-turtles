import { useState } from "react";
import { ButtonWithIcon } from "~/components/ButtonWithIcon/ButtonWithIcon";
import EditIcon from "~/icons/EditIcon";
import LogoutIcon from "~/icons/LogoutIcon";
import { useNavigate } from "react-router";

export default function Profile() {
  let navigate = useNavigate();

  const [bio, setBio] = useState(
    "Hei! Jeg heter Rikke og jobber i NRK. Jeg brenner for filmproduksjon, kreativt arbeid og å jobbe i team!"
  );

  function logout() {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("isLoggedIn");
      navigate("/");
    }
  }

  return (
    <section className="flex flex-col items-center px-6 py-16 min-h-[70vh] bg-deepblue text-offwhite">
      <div className="w-full max-w-4xl flex flex-col items-center text-center space-y-8">
        <div className="flex flex-col items-center space-y-4">
          <img
            src="/henrik.png"
            alt="Profilbilde"
            className="w-32 h-32 rounded-full object-cover"
          />
          <p className="text-3xl font-bold">Hei, Rikke!</p>
          <div className="space-y-1 text-sm">
            <p>E-post: Rikke@kompaniet.no</p>
            <p>Telefon: 12345678</p>
            <p>Bedrift: NRK</p>
          </div>
          <ButtonWithIcon
            text="Rediger profil"
            onClick={() => {}}
            icon={<EditIcon />}
            className="bg-[#1767CE] text-white hover:bg-blue-600"
          />
          <ButtonWithIcon
            text="Logg ut"
            onClick={() => {
              logout();
            }}
            icon={<LogoutIcon />}
            className="bg-[#1767CE] text-white hover:bg-blue-600"
          />
        </div>

        <div className="w-full bg-[#D9E9FF] text-[#0A2343] p-8 rounded-xl shadow-md space-y-4">
          <h2 className="text-2xl font-bold">Om meg</h2>
          <p>{bio}</p>
        </div>

        <div className="w-full bg-[#D9E9FF] text-[#0A2343] p-8 rounded-xl shadow-md space-y-6">
          <h2 className="text-2xl font-bold">Mine annonser</h2>

          <div className="border p-4 rounded-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">
              Søker lydtekniker til kortfilm
            </h3>
            <p className="text-sm mt-2 text-[#0A2343]/80">
              Vi trenger en lydtekniker for et spennende prosjekt i Bergen i
              juni. Ta kontakt!
            </p>
          </div>

          <div className="border p-4 rounded-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">
              Søker fotograf til musikkvideo
            </h3>
            <p className="text-sm mt-2 text-[#0A2343]/80">
              Vi lager en kreativ musikkvideo og trenger en engasjert fotograf.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
