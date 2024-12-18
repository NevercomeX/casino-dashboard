import { FaCoins, FaGem } from "react-icons/fa";
import DepositGift from "@/public/icons/depositgif.svg";
import CubeVipClub from "@/public/icons/cubevipclub.svg";

export default function Topbar() {
  const userName = "Neomodeon";
  const profileTag = "#222";
  const profileImageUrl = "/ProfilePicture/main.jpg"; // Ruta de la imagen de perfil
  const coins = "2.202,00"; // Monedas normales
  const gems = "350.00 / 15000"; // Progreso de gemas

  return (
    <div className=" p-4 flex justify-between items-center text-white shadow-md  px-12">
      {/* Sección Izquierda: Botones */}
      <div className="flex items-center space-x-4">
        {/* VIP Club */}
        <div className="relative">
          <button className="bg-gradient-to-r from-[#533fb7] to-[#6b5ab6] hover:bg-[#e42513] text-white py-2 px-8 rounded-md flex items-center font-semibold">
            <span className="text-sm ml-6">VIP Club</span>
          </button>
          <div className="absolute -top-3 -left-1 -rotate-[25deg] transform scale-110">
            <CubeVipClub className="w-10 h-10" />
          </div>
        </div>

        {/* Deposit */}
        <div className="relative">
          <button className="bg-gradient-to-r from-[#e48f28] to-[#fdb750] hover:bg-[#e42513] text-white py-2 px-8 rounded-br-3xl flex items-center font-semibold">
            <span className="text-sm ml-6">DEPOSIT</span>
          </button>
          <div className="absolute -top-4 -left-2 -rotate-[25deg] transform scale-110">
            <DepositGift className="w-12 h-12" />
          </div>
        </div>
      </div>

      {/* Sección Central: Gemas */}

      {/* Sección Derecha: Monedas y Perfil */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-4">
          <div className="bg-[#2e3156] rounded-full px-4 py-2 flex items-center space-x-2">
            <FaGem className="text-blue-400" />
            <span className="font-semibold text-sm">{gems}</span>
          </div>
        </div>
        <div className="flex items-center space-x-2 bg-[#2e3156] rounded-full px-4 py-2">
          <FaCoins className="text-yellow-400" />
          <span className="font-semibold text-sm">{coins}</span>
        </div>

        {/* Perfil */}
        <div className="flex items-center space-x-2">
          <img
            src={profileImageUrl}
            alt="User Profile"
            className="w-10 h-10 rounded-md border-2 border-green-400"
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
