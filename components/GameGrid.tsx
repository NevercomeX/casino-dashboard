"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const games = [
  {
    title: "Roulette",
    image: "/Games/roulette.jpg",
    description: "Spin and win big prizes!",
  },
  {
    title: "Crash",
    image: "/Games/crash.jpg",
    description: "Multiply your winnings!",
  },
  {
    title: "Towers",
    image: "/Games/towers.jpg",
    description: "Climb the towers and win!",
  },
  {
    title: "Mines",
    image: "/Games/mines.webp",
    description: "Avoid the bombs and win!",
  },
  {
    title: "Slots",
    image: "/slots.jpg",
    description: "Match and hit the jackpot!",
  },
  {
    title: "Cards",
    image: "/cards.jpg",
    description: "Test your luck with cards!",
  },
  {
    title: "Poker",
    image: "/poker.jpg",
    description: "Master your poker skills!",
  },
];

// Configuración del número de cartas por página
const CARDS_PER_PAGE = 3;

export default function GameCarousel() {
  const [currentPage, setCurrentPage] = useState(0);

  // Determinar las cartas a mostrar en la página actual
  const startIndex = currentPage * CARDS_PER_PAGE;
  const visibleGames = games.slice(startIndex, startIndex + CARDS_PER_PAGE);

  // Control de navegación
  const nextPage = () => {
    if (startIndex + CARDS_PER_PAGE < games.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Carrusel */}
      <div className="relative w-full max-w-6xl overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ x: "15%", opacity: 1 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: "-15%", opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {visibleGames.map((game, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.1 }}
                className="bg-secondary rounded-lg shadow-lg overflow-hidden cursor-pointer"
              >
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 text-textLight">
                  <h3 className="font-bold text-lg">{game.title}</h3>
                  <p className="text-sm">{game.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Paginación */}
      <div className="flex justify-center space-x-4 mt-6">
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className="bg-highlight px-4 py-2 rounded text-white disabled:opacity-50"
        >
          Anterior
        </button>
        <span className="text-textLight font-bold">
          Página {currentPage + 1} de {Math.ceil(games.length / CARDS_PER_PAGE)}
        </span>
        <button
          onClick={nextPage}
          disabled={startIndex + CARDS_PER_PAGE >= games.length}
          className="bg-highlight px-4 py-2 rounded text-white disabled:opacity-50"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
