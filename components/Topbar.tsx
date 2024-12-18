import { FaCoins, FaGem } from "react-icons/fa";
import DepositGift from "@/public/icons/depositgif.svg";

export default function Topbar() {
  const userName = "Neomodeon";
  const profileTag = "#222";
  const profileImageUrl = "/ProfilePicture/main.jpg"; // Ruta de la imagen de perfil
  const coins = "2.202,00"; // Monedas normales
  const gems = "350.00 / 15000"; // Progreso de gemas

  return (
    <div className="w-full bg-[#0d1026] p-4 flex justify-between items-center text-white shadow-md">
      {/* Sección Izquierda: Botones */}
      <div className="flex items-center space-x-4">
        {/* VIP Club */}
        <button className="bg-gradient-to-r from-[#533fb7] to-[#6b5ab6] text-white py-2 px-4 rounded-md flex items-center font-semibold relative overflow-hidden">
          <FaGem className="mr-2 text-blue-300" />
          <span className="text-sm">VIP Club</span>
        </button>

        {/* Deposit */}
        <div className="relative">
          <button className="bg-gradient-to-r from-[#e48f28] to-[#fdb750] hover:bg-[#e42513] text-white py-2 px-4 rounded-md flex items-center font-semibold">
            <span className="text-sm ml-6">DEPOSIT</span>
          </button>
          <div className="absolute -top-4 -left-2 -rotate-[25deg] transform scale-110">
            <DepositGift className="w-12 h-12" />
          </div>
        </div>
      </div>

      {/* Sección Central: Gemas */}
      <div className="flex items-center space-x-4">
        <div className="bg-[#2e3156] rounded-full px-4 py-1 flex items-center space-x-2">
          <FaGem className="text-blue-400" />
          <span className="font-semibold text-sm">{gems}</span>
        </div>
      </div>

      {/* Sección Derecha: Monedas y Perfil */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 bg-[#2e3156] rounded-full px-4 py-1">
          <FaCoins className="text-yellow-400" />
          <span className="font-semibold text-sm">{coins}</span>
        </div>

        {/* Perfil */}
        <div className="flex items-center space-x-2">
          <img
            src={profileImageUrl}
            alt="User Profile"
            className="w-10 h-10 rounded-full border-2 border-green-400"
          />
          <div className="flex flex-col">
            <span className="font-semibold text-sm">
              {userName}
              <span className="text-green-400 ml-1">●</span>
            </span>
            <span className="text-xs text-gray-400">{profileTag}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
