"use client";
import { useState } from "react";
import { FaUserCircle, FaSearch, FaPaperPlane } from "react-icons/fa";

interface Message {
  id: number;
  sender: string;
  text: string;
  time: string;
}

const messagesList: Message[] = [
  {
    id: 1,
    sender: "Wingwon",
    text: "Hey! Are you free for a game?",
    time: "10:30 AM",
  },
  {
    id: 2,
    sender: "Jacob Clark",
    text: "Let's team up later!",
    time: "11:15 AM",
  },
  {
    id: 3,
    sender: "Cyber Pilot",
    text: "Check out the new update.",
    time: "Yesterday",
  },
  {
    id: 4,
    sender: "Future Saturn",
    text: "Good luck with your games!",
    time: "2 days ago",
  },
];

export default function MessagesComponent() {
  const [search, setSearch] = useState("");

  const filteredMessages = messagesList.filter((message) =>
    message.sender.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="bg-sidemenu p-4 text-textLight flex flex-col h-full">
      {/* Buscador */}
      <div className="relative mb-4">
        <FaSearch className="absolute left-3 top-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search messages..."
          className="w-full p-2 pl-10 bg-secondary text-textLight rounded-md focus:outline-none focus:ring-2 focus:ring-highlight"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Lista de mensajes */}
      <div className="flex-1 overflow-auto space-y-4">
        {filteredMessages.map((message) => (
          <div
            key={message.id}
            className="flex items-center bg-primary p-3 rounded-lg hover:bg-highlight hover:text-white transition"
          >
            {/* Icono del remitente */}
            <FaUserCircle className="text-4xl text-highlight mr-4" />

            {/* Contenido del mensaje */}
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <span className="font-semibold">{message.sender}</span>
                <span className="text-sm text-gray-400">{message.time}</span>
              </div>
              <p className="text-sm text-gray-300">{message.text}</p>
            </div>
          </div>
        ))}

        {/* Mensaje si no hay resultados */}
        {filteredMessages.length === 0 && (
          <div className="text-center text-gray-400">No messages found</div>
        )}
      </div>

      {/* Área de enviar mensaje */}
      <div className="mt-4 flex items-center">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 p-2 bg-secondary text-textLight rounded-l-md focus:outline-none"
        />
        <button
          title="button"
          className="bg-highlight p-2 rounded-r-md hover:bg-blue-500 transition"
        >
          <FaPaperPlane className="text-white" />
        </button>
      </div>
    </div>
  );
}
