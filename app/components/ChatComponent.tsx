import { useState } from "react";

type Message = {
  id: number;
  sender: "me" | "other";
  text: string;
};

type ChatProps = {
  name: string;
  image: string;
};

export default function ChatComponent({ name, image }: ChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: "me", text: "Hei! Kan jeg få jobb?" },
    {
      id: 2,
      sender: "other",
      text: "Nei. Vi søker etter folk med MINST 50 års erfaring.",
    },
    {
      id: 3,
      sender: "me",
      text: "Det er ikke mulig. Jeg har ikke levd så lenge.",
    },
  ]);
  const [input, setInput] = useState("");

  function sendMessage() {
    if (input.trim() === "") return;

    const newMessage: Message = {
      id: Date.now(),
      sender: "me",
      text: input,
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");
  }

  return (
    <div className="flex flex-col h-[70vh] max-w-3xl mx-auto overflow-hidden">
      <h1>Chat med {name}</h1>
      <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-center gap-2 ${
              msg.sender === "me" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.sender != "me" ? (
              <img
                src={image}
                alt="Avatar"
                className="w-8 h-8 rounded-full mb-2 flex items-center"
              />
            ) : (
              ""
            )}
            <div
              className={`rounded-2xl p-3 max-w-xs ${
                msg.sender === "me"
                  ? "bg-[#1767CE] text-white"
                  : "bg-[#E5E5EA] text-[#0A2343]"
              }`}
            >
              {msg.text}
            </div>
            {msg.sender === "me" ? (
              <img
                src="/henrik.png"
                alt="Avatar"
                className="w-8 h-8 rounded-full mb-2 flex items-center"
              />
            ) : (
              ""
            )}
          </div>
        ))}
      </div>

      <div className="p-4 flex gap-4 items-center">
        <input
          type="text"
          placeholder="Skriv en melding..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded-full px-4 py-2 text-[#0A2343] bg-white"
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
        />
        <button
          onClick={sendMessage}
          className="hover:bg-[#1766cee1] bg-[#1767CE] text-white px-6 py-2 rounded-full font-semibold"
        >
          Send
        </button>
      </div>
    </div>
  );
}
