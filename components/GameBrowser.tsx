"use client";

import { useState } from "react";
import { FaDice, FaGamepad, FaCar, FaRocket } from "react-icons/fa";

// Datos de juegos
const games = [
  {
    id: 1,
    name: "Roulette",
    category: "Casino",
    popularity: 95,
    plays: 1200,
    image: "/Games/1.gif",
  },
  {
    id: 2,
    name: "Crash",
    category: "Casino",
    popularity: 85,
    plays: 1100,
    image: "/crash.jpg",
  },
  {
    id: 3,
    name: "Towers",
    category: "Arcade",
    popularity: 78,
    plays: 980,
    image: "/towers.jpg",
  },
  {
    id: 4,
    name: "Mines",
    category: "Casino",
    popularity: 88,
    plays: 1050,
    image: "/mines.jpg",
  },
  {
    id: 5,
    name: "Slots",
    category: "Casino",
    popularity: 92,
    plays: 1500,
    image: "/slots.jpg",
  },
  {
    id: 6,
    name: "Poker",
    category: "Card",
    popularity: 90,
    plays: 1400,
    image: "/poker.jpg",
  },
  {
    id: 7,
    name: "Blackjack",
    category: "Card",
    popularity: 87,
    plays: 1000,
    image: "/blackjack.jpg",
  },
  {
    id: 8,
    name: "Crash Royale",
    category: "Arcade",
    popularity: 80,
    plays: 900,
    image: "/crash-royale.jpg",
  },
  {
    id: 9,
    name: "Baccarat",
    category: "Casino",
    popularity: 84,
    plays: 950,
    image: "/baccarat.jpg",
  },
  {
    id: 10,
    name: "Roulette Pro",
    category: "Casino",
    popularity: 96,
    plays: 1300,
    image: "/roulette-pro.jpg",
  },
  {
    id: 11,
    name: "Super Mines",
    category: "Arcade",
    popularity: 89,
    plays: 1020,
    image: "/super-mines.jpg",
  },
  {
    id: 12,
    name: "Mega Slots",
    category: "Casino",
    popularity: 94,
    plays: 1600,
    image: "/mega-slots.jpg",
  },
];

// Categorías con íconos y nombres
const categories = [
  { name: "All", icon: <FaGamepad />, value: "All" },
  { name: "Casino", icon: <FaDice />, value: "Casino" },
  { name: "Arcade", icon: <FaRocket />, value: "Arcade" },
  { name: "Card", icon: <FaCar />, value: "Card" },
];

const filters = ["Popular", "Most Played"];

export default function GameBrowser() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedFilter, setSelectedFilter] = useState("Popular");
  const [rowsToShow, setRowsToShow] = useState(2);

  const gamesPerRow = 6;

  // Filtrar juegos por búsqueda, categoría y filtro
  const filteredGames = games
    .filter((game) =>
      searchTerm === ""
        ? true
        : game.name.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .filter((game) =>
      selectedCategory === "All" ? true : game.category === selectedCategory,
    )
    .sort((a, b) => {
      if (selectedFilter === "Popular") return b.popularity - a.popularity;
      if (selectedFilter === "Most Played") return b.plays - a.plays;
      return 0;
    });

  // Calcular el número total de juegos a mostrar
  const totalGamesToShow = rowsToShow * gamesPerRow;

  return (
    <div className="p-6 text-textLight rounded-lg shadow-lg">
      {/* Barra superior */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
        {/* Barra de búsqueda */}
        <input
          type="text"
          placeholder="Search games..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 p-2 rounded-md bg-secondary text-textLight placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-highlight"
        />

        {/* Filtrado */}
        <select
          title="select"
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
          className="p-2 rounded-md bg-secondary text-textLight focus:outline-none focus:ring-2 focus:ring-highlight"
        >
          {filters.map((filter) => (
            <option key={filter} value={filter}>
              {filter}
            </option>
          ))}
        </select>
      </div>

      {/* Categorías */}
      <div className="flex overflow-x-auto gap-4 mb-6 scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => setSelectedCategory(category.value)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm ${
              selectedCategory === category.value
                ? "bg-highlight text-white"
                : "bg-secondary text-textLight hover:bg-highlight hover:text-white"
            }`}
          >
            <span className="text-lg">{category.icon}</span>
            <span>{category.name}</span>
          </button>
        ))}
      </div>

      {/* Grid de juegos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {filteredGames.slice(0, totalGamesToShow).map((game) => (
          <div
            key={game.id}
            className="bg-secondary p-4 rounded-lg shadow-lg hover:scale-105 transition cursor-pointer"
          >
            <img
              src={game.image}
              alt={game.name}
              className="w-full h-32 object-cover rounded-md mb-4"
            />
            <h3 className="font-bold text-lg">{game.name}</h3>
            <p className="text-sm text-gray-400">{game.category}</p>
          </div>
        ))}
      </div>

      {/* Botón para mostrar más */}
      <div className="mt-6 flex justify-center">
        {totalGamesToShow < filteredGames.length && (
          <button
            onClick={() => setRowsToShow(rowsToShow + 1)}
            className="px-6 py-2 bg-highlight text-white rounded-md hover:bg-blue-500 transition"
          >
            Show More Games
          </button>
        )}
      </div>
    </div>
  );
}
