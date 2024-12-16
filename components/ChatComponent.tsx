"use client";
import { useState } from "react";
import { FaUserCircle, FaPaperPlane } from "react-icons/fa";

interface ChatMessage {
  id: number;
  sender: string;
  text: string;
  time: string;
}

interface Conversation {
  id: number;
  name: string;
  messages: ChatMessage[];
}

const conversations: Conversation[] = [
  {
    id: 1,
    name: "Wingwon",
    messages: [
      {
        id: 1,
        sender: "Wingwon",
        text: "Hey! How's it going?",
        time: "10:20 AM",
      },
      { id: 2, sender: "You", text: "All good! You?", time: "10:22 AM" },
    ],
  },
  {
    id: 2,
    name: "Cyber Pilot",
    messages: [
      {
        id: 1,
        sender: "Cyber Pilot",
        text: "Are you playing tonight?",
        time: "Yesterday",
      },
      {
        id: 2,
        sender: "You",
        text: "Yeah, I'll be online!",
        time: "Yesterday",
      },
    ],
  },
  {
    id: 3,
    name: "Jacob Clark",
    messages: [
      {
        id: 1,
        sender: "Jacob Clark",
        text: "Let's catch up later!",
        time: "2 days ago",
      },
    ],
  },
];

export default function ChatComponent() {
  const [activeConversation, setActiveConversation] =
    useState<Conversation | null>(null);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (inputMessage.trim() === "" || !activeConversation) return;

    const newMessage: ChatMessage = {
      id: Date.now(),
      sender: "You",
      text: inputMessage,
      time: new Date().toLocaleTimeString(),
    };

    activeConversation.messages.push(newMessage);
    setInputMessage("");
  };

  return (
    <div className="flex h-full text-textLight">
      {/* Lista de Conversaciones */}
      <div className="w-1/3 bg-secondary p-4 overflow-y-auto">
        <h2 className="text-lg font-bold mb-4">Chats</h2>
        <ul className="space-y-3">
          {conversations.map((conversation) => (
            <li
              key={conversation.id}
              onClick={() => setActiveConversation(conversation)}
              className={`flex items-center p-3 rounded-md cursor-pointer transition ${
                activeConversation?.id === conversation.id
                  ? "bg-highlight"
                  : "hover:bg-primary"
              }`}
            >
              <FaUserCircle className="text-3xl mr-3" />
              <span className="font-medium">{conversation.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Ventana de Chat */}
      <div className="flex-1 bg-primary flex flex-col">
        {activeConversation ? (
          <>
            {/* Encabezado del Chat */}
            <div className="bg-secondary p-4">
              <h3 className="text-lg font-bold">{activeConversation.name}</h3>
            </div>

            {/* Mensajes */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {activeConversation.messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === "You" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`p-3 rounded-lg max-w-xs ${
                      msg.sender === "You"
                        ? "bg-highlight text-white"
                        : "bg-secondary text-textLight"
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <span className="text-xs text-gray-400 block text-right mt-1">
                      {msg.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Input para Enviar Mensaje */}
            <div className="p-4 bg-secondary flex items-center">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 p-2 bg-primary text-textLight rounded-l-md focus:outline-none"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <button
                title="button"
                onClick={handleSendMessage}
                className="bg-highlight p-2 rounded-r-md hover:bg-blue-500 transition"
              >
                <FaPaperPlane className="text-white" />
              </button>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            <p>Select a conversation to start chatting</p>
          </div>
        )}
      </div>
    </div>
  );
}
