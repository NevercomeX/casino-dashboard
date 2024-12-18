"use client";

import { useState } from "react";
import { FaDice, FaGamepad, FaCar, FaRocket } from "react-icons/fa";
import { games } from "./data";

// Categorías con íconos y nombres
const categories = [
  { name: "All", icon: <FaGamepad />, value: "All" },
  { name: "New", icon: <FaDice />, value: "New" },
  { name: "Hot", icon: <FaRocket />, value: "Hot" },
  { name: "Megaways", icon: <FaCar />, value: "Megaways" },
  { name: "JackPot", icon: <FaCar />, value: "JackPot" },
  { name: "Buy Bonus", icon: <FaCar />, value: "BuyBonus" },
  { name: "Recent Games", icon: <FaCar />, value: "RecentGames" },
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
