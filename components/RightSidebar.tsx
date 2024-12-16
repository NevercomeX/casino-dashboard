"use client";
import { useState } from "react";
import Image from "next/image";
import { FaUserFriends, FaEnvelope, FaComments } from "react-icons/fa";
import FriendsList from "@/components/FriendsList";
import MessagesComponent from "@/components/MessagesComponent";
import AnimatedButton from "@/components/AnimatedButton";
// import ChatComponent from "@/components/ChatComponent";
// import { div } from "framer-motion/client";

// Componentes para cada sección
function Chat() {
  return <div className="p-4 text-center">Chat Component</div>;
}

export default function RightSidebar() {
  const [activeTab, setActiveTab] = useState("Chat");

  const renderContent = () => {
    switch (activeTab) {
      case "Chat":
        // return <ChatComponent />;
        return (
          <div className="flex justify-center">
            <span>nothing here yet</span>
          </div>
        );
      case "Messages":
        return <MessagesComponent />;
      case "Friends":
        return <FriendsList />;
      default:
        return <Chat />;
    }
  };

  return (
    <aside className="bg-sidemenu h-screen w-72 flex flex-col text-textLight ">
      {/* Imagen superior */}
      <div className="p-6 flex justify-center">
        <Image
          src="/Games/free bonus.jpg"
          alt="Profile Image"
          width={250}
          height={175}
          className="border-4 border-none shadow-lg"
        />
      </div>

      {/* Botón grande */}
      <AnimatedButton />
      <div className="px-6 pb-4">
        <button className="w-full flex items-center justify-center space-x-3 p-4 bg-highlight text-white font-bold rounded-lg hover:bg-secondary transition">
          <FaUserFriends />
          <span>Get Bonus</span>
        </button>
      </div>

      {/* Menú Horizontal */}
      <nav className="flex justify-around border-b border-gray-700">
        <button
          onClick={() => setActiveTab("Chat")}
          className={`flex-1 text-center py-2 ${
            activeTab === "Chat"
              ? "text-highlight border-b-2 border-highlight"
              : "text-textLight"
          }`}
        >
          <FaComments className="inline-block mb-1 text-lg" />
          <div>Chat</div>
        </button>
        <button
          onClick={() => setActiveTab("Messages")}
          className={`flex-1 text-center py-2 ${
            activeTab === "Messages"
              ? "text-highlight border-b-2 border-highlight"
              : "text-textLight"
          }`}
        >
          <FaEnvelope className="inline-block mb-1 text-lg" />
          <div>Messages</div>
        </button>
        <button
          onClick={() => setActiveTab("Friends")}
          className={`flex-1 text-center py-2 ${
            activeTab === "Friends"
              ? "text-highlight border-b-2 border-highlight"
              : "text-textLight"
          }`}
        >
          <FaUserFriends className="inline-block mb-1 text-lg" />
          <div>Friends</div>
        </button>
      </nav>

      {/* Contenido dinámico */}
      <div className="flex-1 overflow-y-auto bg-secondary">
        {renderContent()}
      </div>
    </aside>
  );
}