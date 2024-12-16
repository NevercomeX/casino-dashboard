"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// Datos de ejemplo
const players = [
  { rank: 1, name: "PlayerOne", score: 12056 },
  { rank: 2, name: "GamerPro", score: 11050 },
  { rank: 3, name: "TopG", score: 10032 },
  { rank: 4, name: "LuckyStar", score: 9050 },
  { rank: 5, name: "BigWinner", score: 8700 },
  { rank: 6, name: "FastPlayer", score: 8120 },
  { rank: 7, name: "ChampionX", score: 7890 },
  { rank: 8, name: "NightHawk", score: 7430 },
  { rank: 9, name: "MegaGamer", score: 6990 },
  { rank: 10, name: "FinalBoss", score: 6500 },
];

export default function Leaderboard() {
  const [highlightRank, setHighlightRank] = useState<number | null>(null);

  return (
    <div className="bg-primary text-textLight rounded-lg shadow-lg w-full p-6">
      {/* Tabla de jugadores */}
      <div className="divide-y divide-gray-700">
        {players.map((player) => (
          <motion.div
            key={player.rank}
            whileHover={{ scale: 1.02 }}
            onMouseEnter={() => setHighlightRank(player.rank)}
            onMouseLeave={() => setHighlightRank(null)}
            className={`flex justify-between items-center px-6 py-4 transition ${
              highlightRank === player.rank ? "bg-highlight" : "bg-primary"
            }`}
          >
            {/* Posición */}
            <span
              className={`font-bold text-lg ${
                player.rank <= 3 ? "text-yellow-400" : "text-textLight"
              }`}
            >
              #{player.rank}
            </span>

            {/* Nombre */}
            <span className="flex-1 text-textLight text-center font-semibold">
              {player.name}
            </span>

            {/* Puntuación */}
            <span className="text-textLight font-bold">{player.score}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
