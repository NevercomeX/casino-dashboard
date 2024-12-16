import {
  FaGamepad,
  FaChess,
  FaDice,
  FaUserFriends,
  FaPlusCircle,
} from "react-icons/fa";

export default function TwoSidebarsLayout() {
  const friendsList = [
    { name: "Wingwon", status: "Online" },
    { name: "Jacob Clark", status: "Online" },
    { name: "Cyber Pilot", status: "Playing Tetris" },
    { name: "Future Saturn", status: "Offline" },
  ];

  return (
    <div className="flex h-screen bg-secondary text-textLight">
      {/* Sidebar Izquierda */}
      <aside className="w-60 bg-primary-dark p-4 flex flex-col space-y-4">
        <h2 className="text-2xl font-bold text-primary-accent mb-4">Juegos</h2>
        <nav className="flex flex-col space-y-4">
          <button className="flex items-center space-x-2 hover:text-primary-accent transition">
            <FaGamepad /> <span>Arcade</span>
          </button>
          <button className="flex items-center space-x-2 hover:text-primary-accent transition">
            <FaChess /> <span>Estrategia</span>
          </button>
          <button className="flex items-center space-x-2 hover:text-primary-accent transition">
            <FaDice /> <span>Casino</span>
          </button>
          <button className="flex items-center space-x-2 hover:text-primary-accent transition">
            <FaGamepad /> <span>Aventura</span>
          </button>
          <button className="flex items-center space-x-2 hover:text-primary-accent transition">
            <FaGamepad /> <span>Deportes</span>
          </button>
        </nav>
      </aside>

      {/* Contenido Principal */}
      <main className="flex-1 flex justify-center items-center">
        <h1 className="text-4xl font-bold">Bienvenido a Moowin Casino</h1>
      </main>

      {/* Sidebar Derecha */}
      <aside className="w-72 bg-primary-dark p-4 flex flex-col">
        {/* Imagen con Botón */}
        <div className="flex flex-col items-center mb-6">
          <img
            src="/images/special-offer.png" // Reemplázalo con tu imagen
            alt="Special Offer"
            className="w-60 h-32 object-cover rounded-lg mb-4"
          />
          <button className="bg-highlight text-white py-2 px-6 text-lg rounded-lg hover:bg-opacity-80 transition">
            ¡Únete Ahora!
          </button>
        </div>

        {/* Lista de Amigos */}
        <h2 className="text-2xl font-bold text-primary-accent mb-4 flex items-center">
          <FaUserFriends className="mr-2" /> Lista de Amigos
        </h2>
        <div className="flex-1 overflow-y-auto space-y-4">
          {friendsList.map((friend, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-primary-medium p-3 rounded-md"
            >
              <div>
                <p className="font-semibold">{friend.name}</p>
                <p
                  className={`text-sm ${friend.status === "Online" ? "text-green-400" : "text-gray-400"}`}
                >
                  {friend.status}
                </p>
              </div>
              <FaPlusCircle className="text-highlight cursor-pointer hover:scale-110 transition-transform" />
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
