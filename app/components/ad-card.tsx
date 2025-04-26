import { useState } from "react";
import SendIcon from "~/icons/SendIcon";
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
    <>
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

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-blue-900 text-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 space-y-4">
            <h2 className="text-xl font-bold">Send melding</h2>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full h-32 border rounded p-2 resize-none"
              placeholder="Skriv meldingen din her..."
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 transition"
              >
                Avbryt
              </button>
              <button
                onClick={handleSend}
                className="px-4 py-2 rounded bg-blue-700 text-white hover:bg-blue-800 transition"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
