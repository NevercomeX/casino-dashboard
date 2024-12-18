"use client";

import { useState, useRef, useEffect } from "react";
import { FaUserCircle, FaPaperPlane } from "react-icons/fa";

// Datos iniciales de mensajes (mock)
const initialMessages = [
  {
    id: 1,
    username: "PlayerOne",
    avatar: "/ProfilePicture/1.jpg",
    text: "Hey everyone! Good luck!",
    time: new Date(Date.now() - 5 * 60 * 1000), // 5 minutos atrás
  },
  {
    id: 2,
    username: "LuckyStar",
    avatar: "/ProfilePicture/2.jpg",
    text: "Feeling lucky today!",
    time: new Date(Date.now() - 10 * 60 * 1000), // 10 minutos atrás
  },
  {
    id: 3,
    username: "GamerPro",
    avatar: "/ProfilePicture/3.jpg",
    text: "Let's win big today!",
    time: new Date(Date.now() - 15 * 60 * 1000), // 15 minutos atrás
  },
  {
    id: 4,
    username: "NightHawk",
    avatar: "/ProfilePicture/4.jpg",
    text: "Ready to take on the challenge!",
    time: new Date(Date.now() - 20 * 60 * 1000), // 20 minutos atrás
  },
  {
    id: 5,
    username: "MegaGamer",
    avatar: "/ProfilePicture/5.jpg",
    text: "It's time to shine!",
    time: new Date(Date.now() - 25 * 60 * 1000), // 25 minutos atrás
  },
  {
    id: 6,
    username: "ChampionX",
    avatar: "/ProfilePicture/6.jpg",
    text: "Who's ready to lose? 😎",
    time: new Date(Date.now() - 30 * 60 * 1000), // 30 minutos atrás
  },
  {
    id: 7,
    username: "FastPlayer",
    avatar: "/ProfilePicture/7.jpg",
    text: "Speed is my middle name!",
    time: new Date(Date.now() - 35 * 60 * 1000), // 35 minutos atrás
  },
  {
    id: 8,
    username: "FinalBoss",
    avatar: "/ProfilePicture/8.jpg",
    text: "The boss has arrived!",
    time: new Date(Date.now() - 40 * 60 * 1000), // 40 minutos atrás
  },
  {
    id: 9,
    username: "BigWinner",
    avatar: "/ProfilePicture/9.jpg",
    text: "I'm here for the big wins!",
    time: new Date(Date.now() - 45 * 60 * 1000), // 45 minutos atrás
  },
  {
    id: 10,
    username: "SuperLucky",
    avatar: "/ProfilePicture/10.jpg",
    text: "Feeling super lucky today!",
    time: new Date(Date.now() - 50 * 60 * 1000), // 50 minutos atrás
  },
];

type Message = {
  id: number;
  username: string;
  avatar: string | null; // Permitir que sea string o null
  text: string;
  time: Date;
};

export default function GlobalChat() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll automático hacia el último mensaje
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Manejar el envío de mensajes
  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const message = {
      id: messages.length + 1,
      username: "You",
      avatar: "/ProfilePicture/main.jpg",
      text: newMessage.trim(),
      time: new Date(),
    };

    setMessages([...messages, message]);
    setNewMessage("");
  };

  return (
    <div className="flex flex-col h-full  text-textLight rounded-lg shadow-lg">
      {/* Lista de mensajes */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className=" bg-primary p-2 rounded-md flex items-start space-x-4"
          >
            {/* Avatar */}
            <div className="w-12 h-12">
              {message.avatar ? (
                <img
                  src={message.avatar}
                  alt={message.username}
                  className="w-full h-full rounded-md object-cover"
                />
              ) : (
                <FaUserCircle className="text-3xl text-highlight" />
              )}
            </div>

            {/* Contenido del mensaje */}
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <span className="font-semibold">{message.username}</span>
                <span className="text-sm text-gray-400">
                  {formatTime(message.time)}
                </span>
              </div>
              <p className="text-sm">{message.text}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Campo para enviar mensajes */}
      <div className="p-4  flex items-center border-t border-gray-700">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          className="flex-1 p-2 bg-secondary rounded-l-md text-textLight focus:outline-none focus:ring-2 focus:ring-highlight"
        />
        <button
          title="buttson"
          type="button"
          onClick={handleSendMessage}
          className="bg-highlight p-3 rounded-r-md hover:bg-blue-500 transition"
        >
          <FaPaperPlane className="text-white" />
        </button>
      </div>
    </div>
  );
}

// Formatear el tiempo relativo (ej.: "5 minutos atrás")
function formatTime(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMinutes = Math.floor(diffMs / (1000 * 60));

  if (diffMinutes < 1) return "Just now";
  if (diffMinutes < 60) return `${diffMinutes} min ago`;
  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) return `${diffHours} hr ago`;

  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
}
