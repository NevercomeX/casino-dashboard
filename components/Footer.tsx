import BitcoinIcon from "@/public/icons/bitcoin.svg";
import EthereumIcon from "@/public/icons/ethereum.svg";
import BinanceIcon from "@/public/icons/binance.svg";
import TronIcon from "@/public/icons/tron.svg";
import DogeIcon from "@/public/icons/dogecoin.svg";
import SolanaIcon from "@/public/icons/solana.svg";
import TetherIcon from "@/public/icons/tether.svg";
import Image from "next/Image";

import UsdcIcon from "@/public/icons/usdc.svg";

export default function Footer() {
  const cryptoCurrencies = [
    { Icon: BitcoinIcon, color: "w-16 h-16 " },
    { Icon: EthereumIcon, color: "w-16 h-16 " },
    { Icon: BinanceIcon, color: "w-16 h-16 " },
    { Icon: TronIcon, color: "w-16 h-16 " },
    { Icon: TetherIcon, color: "w-16 h-16 " },
    { Icon: SolanaIcon, color: "w-16 h-16 " },
    { Icon: UsdcIcon, color: "w-16 h-16 " },
    { Icon: DogeIcon, color: "w-8 h-8" },
  ];

  return (
    <footer className="bg-[#1A1E3360] text-footerfond rounded-3xl font-boldpx-6">
      {/* Contenedor Principal */}
      <div className="max-w- xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Columna 1: Logo y Descripción */}
          <div className="space-y-2 pr-24 pl-12">
            <div className="flex justify-left items-start">
              <Image
                src="/logo.svg"
                alt="Profile Image"
                width={150}
                height={150}
                className="border-none"
              />
            </div>
            <p className="text-sm leading-relaxed">
              This website offers gaming with risk experience. To be a user of
              our site you must be over 18 y.o. We are not responsible for the
              violation of your local laws related to igaming.
            </p>
          </div>

          {/* Columna 2: Links */}
          <div className="grid grid-cols-3 gap-4  items-center">
            {/* PLATFORM */}
            <div>
              <h3 className="font-bold mb-3 text-white">PLATFORM</h3>
              <ul className="space-y-2 text-sm">
                <li>Casino</li>
                <li>Loyalty Program</li>
                <li>Refer a friend</li>
                <li>Partnership Program</li>
              </ul>
            </div>
            {/* ABOUT US */}
            <div>
              <h3 className="font-bold mb-3 text-white">ABOUT US</h3>
              <ul className="space-y-2 text-sm">
                <li>News</li>
                <li>Work with us</li>
                <li>Bonus Terms/program</li>
                <li>Gitbook / white-paper</li>
              </ul>
            </div>
            {/* SUPPORT / LEGAL */}
            <div>
              <h3 className="font-bold mb-3 text-white">SUPPORT / LEGAL</h3>
              <ul className="space-y-2 text-sm">
                <li>Live Support</li>
                <li>Privacy policy</li>
                <li>Responsible Gaming</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Línea Separadora */}
        <div className="mt-2 pt-2">
          {/* Criptomonedas */}
          <div className="flex ml-12 justify-left items-center  flex-wrap gap-8">
            <div className="flex items-center justify-center gap-2 text-[#4c4f71]">
              {" "}
              <p className="text-5xl font-bold"> 12</p>
              <p className="text-sm pt-2">
                Cryto
                <br /> Network
              </p>
            </div>{" "}
            <div className="border-l-2 border-[#4c4f71] h-10"></div>
            <div className="flex items-center justify-center gap-2 text-[#4c4f71]">
              <p className="text-5xl font-bold"> 18</p>
              <p className="text-sm pt-2">
                Crypto
                <br /> Currencies
              </p>
            </div>{" "}
            <div className="border-l-2 border-[#4c4f71] h-10"></div>
            {cryptoCurrencies.map((crypto, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <crypto.Icon className={`${crypto.color} fill-[#4c4f71]`} />
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-left text-sm mt-6 ml-12">
          <p className="text-footerfond">
            Copyright © <span className="text-accent">*****</span> All Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
