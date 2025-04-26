import { useState } from "react";
import SendIcon from "~/icons/SendIcon";
import ChatComponent from "./ChatComponent";
import type { Advertisement } from "./types/advertisement";

export function AdCard({ ad }: { ad: Advertisement }) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSend = () => {
    console.log("Melding sendt:", message);
    setIsOpen(false);
    setMessage("");
  };

  return (
    <a href={`/ads/${ad.id}`}>
      <div className="bg-white text-black p-6 rounded-lg shadow-md flex flex-col justify-between h-full">
        <div className="flex space-x-4 mb-4">
          <img
            src={ad.image}
            alt="Profilbilde"
            className="w-20 h-20 rounded-full object-contain border-2 border-gray-300"
          />
          <div className="flex flex-col justify-center">
            <h3 className="text-lg font-semibold">{ad.title}</h3>
            {ad.isCompany ? (
              <p className="text-sm text-gray-600">
                Dato: {ad.startDate} til {ad.endDate}
              </p>
            ) : (
              <p className="text-sm text-gray-600">Navn: {ad.userId}</p>
            )}
            <p className="text-sm text-gray-600">Sted: {ad.city}</p>
          </div>
        </div>

        <p className="text-gray-700 mb-4">{ad.description}</p>

        <div className="flex justify-end mt-auto">
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded bg-[#1767CE] text-white hover:bg-blue-600 transition cursor-pointer"
          >
            <span>Kontakt</span>
            <SendIcon />
          </button>
        </div>
      </div>

      {isOpen ? <ChatComponent name={ad.userId} image={ad.image} /> : ""}
    </a>
  );
}
