"use client";
import Link from "next/link";
import {
  FaGamepad,
  FaRocket,
  FaChartLine,
  FaDiscord,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTelegram,
  FaHome,
} from "react-icons/fa";
import Image from "next/image";

const mainMenu = [
  { name: "Home Page", icon: <FaHome />, href: "/" },
  { name: "Crash", icon: <FaRocket />, href: "/crash" },
  { name: "Mines", icon: <FaGamepad />, href: "/mines" },
  { name: "Roulette", icon: <FaChartLine />, href: "/roulette" },
];

const secondaryMenu = [
  { name: "VIP Club", href: "/vip" },
  { name: "Promotions", href: "/promotions" },
  { name: "Deposit Bonus", href: "/deposit-bonus" },
];

const terceraryMenu = [
  { name: "Loyalty", href: "/vip" },
  { name: "Terms of use", href: "/promotions" },
  { name: "Privacy Policy", href: "/deposit-bonus" },
];

export default function Sidebar() {
  return (
    <nav className="bg-sidemenu h-screen w-64 flex flex-col text-textLight rounded-br-md">
      {/* Imagen del Perfil */}
      <div className="flex justify-center">
        <Image
          src="/logo.svg"
          alt="Profile Image"
          width={200}
          height={200}
          className=" border-none"
        />
      </div>

      {/* Menú Principal */}
      <ul className=" p-4">
        {mainMenu.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="flex items-center space-x-4 p-3 hover:bg-secondary rounded-md transition"
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Línea Divisora */}
      <hr className="border-secondary my-2 mx-4" />

      {/* Menú Secundario */}
      <ul className="p-4">
        {secondaryMenu.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="flex items-center space-x-4 p-3 hover:bg-secondary rounded-md transition"
            >
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Línea Divisora */}
      <hr className="border-secondary my-2 mx-4" />

      {/* Menú Secundario */}
      <ul className="p-4">
        {terceraryMenu.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="flex items-center space-x-4 p-3 hover:bg-secondary rounded-md transition"
            >
              <span className="text-sm">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Botones de Redes Sociales */}
      <div className="flex justify-center space-x-4 mt-auto mb-6">
        <Link
          href="https://discord.com"
          target="_blank"
          className="text-highlight hover:text-white transition"
        >
          <FaDiscord size={24} />
        </Link>
        <Link
          href="https://instagram.com"
          target="_blank"
          className="text-highlight hover:text-white transition"
        >
          <FaInstagram size={24} />
        </Link>
        <Link
          href="https://facebook.com"
          target="_blank"
          className="text-highlight hover:text-white transition"
        >
          <FaFacebook size={24} />
        </Link>
        <Link
          href="https://youtube.com"
          target="_blank"
          className="text-highlight hover:text-white transition"
        >
          <FaYoutube size={24} />
        </Link>
        <Link
          href="https://youtube.com"
          target="_blank"
          className="text-highlight hover:text-white transition"
        >
          <FaTelegram size={24} />
        </Link>
      </div>
    </nav>
  );
}
