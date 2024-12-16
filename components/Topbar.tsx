import { FaGift, FaCoins, FaGem } from "react-icons/fa";

export default function Topbar() {
  const userName = "Paquito";
  const profileName = "MalditoxD";
  const profileImageUrl = "/ProfilePicture/1.jpg"; // Ruta de la imagen de perfil
  const coins = 1200; // Cantidad de monedas normales
  const gems = 300; // Cantidad de gemas

  return (
    <div className=" w-full p-4 flex justify-between items-center text-textLight">
      {/* Botones de Bonus y Deposit */}
      <div className="flex items-center space-x-4">
        <button className="bg-highlight text-white p-2 rounded-md flex items-center">
          <FaGift className="mr-2" /> FREE BONUS
        </button>
        <button className="bg-accent text-white p-2 rounded-md flex items-center">
          <FaCoins className="mr-2" /> DEPOSIT
        </button>
      </div>

      {/* Perfil del Usuario y Monedas */}
      <div className="flex items-center space-x-4">
        {/* Monedas y Gemas */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <FaCoins className="text-yellow-400" />
            <span className="text-lg font-semibold">{coins}</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaGem className="text-blue-400" />
            <span className="text-lg font-semibold">{gems}</span>
          </div>
        </div>

        {/* Imagen de Perfil y Nombre */}
        <div className="flex items-center space-x-2">
          <img
            src={profileImageUrl}
            alt="User Profile"
            className="w-10 h-10 rounded-md border-none"
          />
          <div className="flex flex-col">
            <span className="text-lg font-semibold">{` ${userName}`}</span>
            <span className="text-xs">{` ${profileName}!`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
