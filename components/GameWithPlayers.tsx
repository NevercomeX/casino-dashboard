"use client";

import { FaUserCircle, FaCoins } from "react-icons/fa";

// Datos simulados
const players = [
  { id: 1, name: "PlayerOne", coins: 150, avatar: "/ProfilePicture/1.jpg" },
  { id: 2, name: "LuckyStar", coins: 200, avatar: "/ProfilePicture/2.jpg" },
  { id: 3, name: "GamerPro", coins: 300, avatar: "/ProfilePicture/3.jpg" },
  { id: 4, name: "NightHawk", coins: 250, avatar: "/ProfilePicture/4.jpg" },
  { id: 5, name: "MegaGamer", coins: 400, avatar: "/ProfilePicture/5.jpg" },
  { id: 6, name: "ChampionX", coins: 350, avatar: "/ProfilePicture/6.jpg" },
  { id: 7, name: "FastPlayer", coins: 180, avatar: "/ProfilePicture/7.jpg" },
  { id: 8, name: "FinalBoss", coins: 500, avatar: "/ProfilePicture/8.jpg" },
  { id: 9, name: "BigWinner", coins: 450, avatar: "/ProfilePicture/9.jpg" },
  { id: 10, name: "SuperLucky", coins: 220, avatar: "/ProfilePicture/10.jpg" },
];

// Juego simulado
const game = {
  name: "Roulette",
  image: "/Games/2.jpg",
};

export default function GameWithPlayers() {
  return (
    <div className=" text-textLight w-full p-6">
      {/* Imagen del Juego */}
      <div className="w-full h-64 rounded-lg overflow-hidden mb-6 abs">
        <img
          src={game.image}
          alt={game.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Lista Horizontal de Jugadores */}
      <div className="flex justify-center overflow-x-auto gap-6 scrollbar-hide">
        {players.map((player) => (
          <div
            key={player.id}
            className="flex flex-col items-center p-4 shadow "
          >
            {/* Avatar del Jugador */}
            <div className="w-16 h-16 rounded-lg bg-gray-700 flex items-center justify-center overflow-hidden mb-4 abs">
              {player.avatar ? (
                <img
                  src={player.avatar}
                  alt={player.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <FaUserCircle className="text-3xl text-highlight" />
              )}
            </div>

            {/* Nombre del Jugador */}
            <p className="font-semibold text-center text-sm mb-2">
              {player.name}
            </p>

            {/* Monedas Apostadas */}
            <div className="flex items-center space-x-1 text-highlight">
              <FaCoins />
              <span>{player.coins.toLocaleString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
