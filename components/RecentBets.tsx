"use client";

import { FaUserCircle, FaClock, FaCoins } from "react-icons/fa";

// Datos de apuestas recientes
const recentBets = [
  {
    username: "PlayerOne",
    gameType: "Poker",
    avatar: "/ProfilePicture/1.jpg",
    time: "10 min ago",
    bet: 250,
    multiplier: "3.5x",
    payout: 150,
    profitPercent: 150,
  },
  {
    username: "LuckyStar",
    gameType: "Mines",
    avatar: "/ProfilePicture/2.jpg",
    time: "10 min ago",
    bet: 100,
    multiplier: "2.5x",
    payout: 250,
    profitPercent: 100,
  },
  {
    username: "GamerPro",
    gameType: "Poker",
    avatar: "/ProfilePicture/3.jpg",
    time: "5 min ago",
    bet: 250,
    multiplier: "2.5x",
    payout: 150,
    profitPercent: 250,
  },
  {
    username: "NightHawk",
    gameType: "Slots",
    avatar: "/ProfilePicture/4.jpg",
    time: "10 min ago",
    bet: 250,
    multiplier: "1.5x",
    payout: 300,
    profitPercent: 150,
  },
  {
    username: "MegaGamer",
    gameType: "Crash",
    avatar: "/ProfilePicture/5.jpg",
    time: "5 min ago",
    bet: 300,
    multiplier: "1.5x",
    payout: 150,
    profitPercent: 250,
  },
  {
    username: "ChampionX",
    gameType: "Crash",
    avatar: "/ProfilePicture/6.jpg",
    time: "10 min ago",
    bet: 250,
    multiplier: "3x",
    payout: 350,
    profitPercent: 50,
  },
  {
    username: "FastPlayer",
    gameType: "Crash",
    avatar: "/ProfilePicture/7.jpg",
    time: "5 min ago",
    bet: 300,
    multiplier: "2x",
    payout: 200,
    profitPercent: 200,
  },
  {
    username: "FinalBoss",
    gameType: "Poker",
    avatar: "/ProfilePicture/8.jpg",
    time: "10 min ago",
    bet: 250,
    multiplier: "2x",
    payout: 250,
    profitPercent: 100,
  },
  {
    username: "BigWinner",
    gameType: "Slots",
    avatar: "/ProfilePicture/9.jpg",
    time: "2 min ago",
    bet: 200,
    multiplier: "2.5x",
    payout: 350,
    profitPercent: 50,
  },
  {
    username: "SuperLucky",
    gameType: "Poker",
    avatar: "/ProfilePicture/10.jpg",
    time: "5 min ago",
    bet: 150,
    multiplier: "2.5x",
    payout: 150,
    profitPercent: 200,
  },
];

export default function RecentBets() {
  return (
    <div className=" text-textLight rounded-lg shadow-lg w-full p-6">
      {/* Contenedor de apuestas */}
      <div className="space-y-6">
        {recentBets.map((bet, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-secondary p-4 rounded-lg shadow hover:scale-105 transition-transform"
          >
            {/* Usuario e icono */}
            <div className="flex items-center space-x-4">
              {/* Icono de usuario */}
              <div className="w-12 h-12 bg-gray-700 rounded-md flex items-center justify-center">
                {bet.avatar ? (
                  <img
                    src={bet.avatar}
                    alt={bet.username}
                    className="w-full rounded-md h-full object-cover"
                  />
                ) : (
                  <FaUserCircle className="text-3xl text-highlight" />
                )}
              </div>

              {/* Nombre de usuario y tipo de juego */}
              <div>
                <p className="font-semibold">{bet.username}</p>
                <p className="text-sm text-gray-400">{bet.gameType}</p>
              </div>
            </div>
            •{/* Tiempo */}
            <div className="flex items-center space-x-2">
              <FaClock className="text-gray-400" />
              <span className="text-sm">{bet.time}</span>
            </div>
            •{/* Apuesta */}
            <div className="flex items-center space-x-2">
              <FaCoins className="text-highlight" />
              <span className="font-semibold">{bet.bet.toLocaleString()} </span>
            </div>
            •{/* Multiplicador */}
            <div className="font-bold text-highlight">{bet.multiplier}</div>
            {/* Pago */}•
            <div className="flex items-center space-x-2">
              <FaCoins className="text-highlight" />
              <span className="font-semibold">
                {bet.payout.toLocaleString()}
              </span>
            </div>
            {/* Porcentaje de beneficio */}
            <div className="bg-green-700 text-green-200 px-3 py-1 rounded-full text-sm font-bold">
              +{bet.profitPercent}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
