import { useState } from "react";
import { ButtonWithIcon } from "~/components/ButtonWithIcon/ButtonWithIcon";
import EditIcon from "~/icons/EditIcon";
import LogoutIcon from "~/icons/LogoutIcon";
import { useNavigate } from "react-router";
import ProfileAdsCard from "~/components/ProfileAdsCard";

export default function Profile() {
  let navigate = useNavigate();

  const [bio, setBio] = useState(
    "Hei! Jeg heter Rikke. Jeg brenner for filmproduksjon, kreativt arbeid og å jobbe i team!"
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
            src="/happy_rikke.jpg"
            alt="Profilbilde"
            className="w-32 h-32 rounded-full object-cover"
          />
          <p className="text-3xl font-bold">Hei, Rikke!</p>
          <div className="space-y-1 text-sm">
            <p>E-post: rikke@gmail.com</p>
            <p>Telefon: 12345678</p>
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
        <div className="flex flex-row  gap-4 p-8 rounded-xl shadow-md">
          <ProfileAdsCard
            title="Mine annonser"
            ads={[
              {
                title: "Film fotograf tilgjengelig",
                description:
                  "Hei! Jeg heter Rikke. Jeg brenner for filmproduksjon, kreativt arbeid og å jobbe i team!",
              },
              {
                title: "Redigerer tilgjengelig",
                description:
                  "Hei! Jeg heter Rikke. Jeg brenner for redigering, kreativt arbeid og å jobbe i team!",
              },
            ]}
          />
          <ProfileAdsCard
            title="Mine utstyrte annonser"
            ads={[
              {
                title: "Tilgjengelig utstyr for leie",
                description:
                  "Jeg har tilgjengelig kamera, lys og lydutstyr for leie. Ta kontakt for mer info.",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
