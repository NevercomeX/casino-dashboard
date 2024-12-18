"use client";
import { useState } from "react";
import { FaCircle, FaUserPlus, FaSearch } from "react-icons/fa";

interface Friend {
  id: number;
  name: string;
  status: "online" | "offline" | "busy";
}

const friendsList: Friend[] = [
  { id: 1, name: "Wingwon", status: "online" },
  { id: 2, name: "Jacob Clark", status: "online" },
  { id: 3, name: "Cyber Pilot", status: "busy" },
  { id: 4, name: "Future Saturn", status: "offline" },
  { id: 5, name: "Woodworm", status: "online" },
  { id: 6, name: "Alan Frost", status: "offline" },
];

export default function Friends() {
  const [search, setSearch] = useState("");

  const filteredFriends = friendsList.filter((friend) =>
    friend.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="bg-sidemenu p-4 text-textLight">
      {/* Buscador */}
      <div className="relative mb-4">
        <FaSearch className="absolute left-3 top-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search friends..."
          className="w-full p-2 pl-10 bg-secondary text-textLight rounded-md focus:outline-none focus:ring-2 focus:ring-highlight"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Lista de amigos */}
      <ul className="space-y-3">
        {filteredFriends.map((friend) => (
          <li
            key={friend.id}
            className="flex justify-between items-center p-3 bg-primary rounded-lg hover:bg-highlight hover:text-white transition"
          >
            {/* Información del amigo */}
            <div className="flex items-center space-x-3">
              <div
                className={`w-3 h-3 rounded-full ${
                  friend.status === "online"
                    ? "bg-green-500"
                    : friend.status === "busy"
                      ? "bg-yellow-500"
                      : "bg-gray-500"
                }`}
              >
                <FaCircle className="text-transparent" />
              </div>
              <span>{friend.name}</span>
            </div>

            {/* Botón de agregar amigo */}
            <button
              title="button"
              className="text-highlight hover:text-white transition"
            >
              <FaUserPlus />
            </button>
          </li>
        ))}

        {/* Mensaje si no hay resultados */}
        {filteredFriends.length === 0 && (
          <li className="text-center text-gray-400">No friends found</li>
        )}
      </ul>
    </div>
  );
}
