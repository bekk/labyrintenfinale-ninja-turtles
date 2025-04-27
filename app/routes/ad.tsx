import { useState } from "react";
import { useParams, Link } from "react-router";
import { getAdFromId, advertisements } from "~/components/types/advertisement";
import { getUserFromId } from "~/components/types/user";
import SendIcon from "~/icons/SendIcon";
import ChatComponent from "~/components/ChatComponent";

export default function Ad() {
  const { id } = useParams();
  const ad = getAdFromId(id || "");
  const userId = ad?.userId;
  const user = getUserFromId(userId || "");

  const [view, setView] = useState<"profile" | "ads">("profile");
  const [isOpen, setIsOpen] = useState(false);

  if (!ad || !user) {
    return <div className="p-6 text-center">Fant ikke annonsen.</div>;
  }

  const userAds = advertisements.filter(
    (otherAd) => otherAd.userId === user.id
  );

  return (
    <div className="bg-white text-black p-6 rounded-lg shadow-md max-w-3xl mx-auto my-8 space-y-12">
      <div className="flex justify-center mb-8 space-x-4">
        <button
          onClick={() => setView("profile")}
          className={`px-4 py-2 rounded ${
            view === "profile"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-black"
          } transition`}
        >
          Profil
        </button>
        {user.isCompany && (
          <button
            onClick={() => setView("ads")}
            className={`px-4 py-2 rounded ${
              view === "ads"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-black"
            } transition`}
          >
            Andre annonser
          </button>
        )}
      </div>

      {view === "profile" && (
        <section>
          <div className="flex items-center space-x-4 mb-6">
            <img
              src={user.profileImage}
              alt={user.name}
              className="w-20 h-20 rounded-full object-cover border-2 border-gray-300"
            />
            <div>
              <h3 className="text-2xl font-bold">{user.name}</h3>
              <p className="text-gray-600 text-sm">{user.city}</p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Erfaring</h4>
            <p className="text-gray-700">{user.experience}</p>
          </div>

          {user.equipment && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">Utstyr</h4>
              <ul className="list-disc list-inside text-gray-700">
                {user.equipment.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}

      {view === "ads" && user.isCompany && (
        <section>
          {userAds.length > 0 ? (
            <>
              <h3 className="text-xl font-bold mb-6">
                Annonser fra {user.name}
              </h3>
              <div className="grid gap-6">
                {userAds.map((otherAd) => (
                  <Link
                    to={`/ads/${otherAd.id}`}
                    key={otherAd.id}
                    className="block bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition"
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={otherAd.image}
                        alt={otherAd.title}
                        className="w-16 h-16 rounded object-cover"
                      />
                      <div>
                        <h4 className="text-lg font-semibold">
                          {otherAd.title}
                        </h4>
                        <p className="text-gray-600 text-sm">{otherAd.city}</p>
                        <p className="text-gray-500 text-xs">
                          {otherAd.startDate} – {otherAd.endDate}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <p className="text-center text-gray-600">
              Ingen annonser fra {user.name}.
            </p>
          )}
        </section>
      )}

      <section>
        <hr className="my-8" />
        <h2 className="text-2xl font-bold mb-4">{ad.title}</h2>

        <div className="flex flex-col md:flex-row space-x-0 md:space-x-6 mb-6">
          <img
            src={ad.image}
            alt={ad.title}
            className="w-full md:w-60 h-60 rounded-lg object-contain border-2 border-gray-300"
          />
          <div className="flex flex-col justify-center mt-4 md:mt-0">
            <p className="text-gray-600 text-sm mb-1">
              {ad.isCompany ? (
                <>
                  Dato: {ad.startDate} til {ad.endDate}
                </>
              ) : (
                <>Navn: {user.name}</>
              )}
            </p>
            <p className="text-gray-600 text-sm mb-1">Sted: {ad.city}</p>
            <p className="text-gray-600 text-sm">Publisert: {ad.createdAt}</p>
          </div>
        </div>

        <p className="text-gray-700">{ad.description}</p>
      </section>
      <div>
        <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
        <p className="text-gray-700 mb-4">
          Ta kontakt med {user.name} for mer informasjon.
        </p>
        <button
          className="flex items-center gap-2 px-4 py-2 rounded bg-[#1767CE] text-white hover:bg-blue-600 transition cursor-pointer"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? (
            "Lukk chat"
          ) : (
            <p className="flex items-center gap-2">
              <SendIcon /> Send melding
            </p>
          )}
        </button>
      </div>
      {isOpen ? <ChatComponent name={ad.userId} image={ad.image} /> : null}
    </div>
  );
}
