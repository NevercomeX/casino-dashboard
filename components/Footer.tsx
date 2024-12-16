export default function Footer() {
  return (
    <footer className="bg-[#1A1E3360] rounded-3xl text-textLight py-12 px-6">
      {/* Contenedor Principal */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Columna 1: Logo y Descripción */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-highlight">MOOWIN CASINO</h2>
            <p className="text-sm leading-relaxed">
              This website offers gaming with risk experience. To be a user of
              our site you must be over 18 y.o. We are not responsible for the
              violation of your local laws related to igaming.
            </p>
          </div>

          {/* Columna 2: Links */}
          <div className="grid grid-cols-3 gap-4">
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
        <div className=" mt-8 pt-6">
          {/* Criptomonedas */}
          <div className="flex justify-center flex-wrap gap-8">
            <div className="flex flex-col items-center">
              <img
                src="/icons/bitcoin.svg"
                alt="Bitcoin"
                className="w-8 h-8 mb-2"
              />
              <span className="text-sm">Bitcoin</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/icons/ethereum.svg"
                alt="Ethereum"
                className="w-8 h-8 mb-2"
              />
              <span className="text-sm">Ethereum</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/icons/binance.svg"
                alt="Binance Smart Chain"
                className="w-8 h-8 mb-2"
              />
              <span className="text-sm">Binance</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/icons/tron.svg" alt="Tron" className="w-8 h-8 mb-2" />
              <span className="text-sm">Tron</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/icons/tether.svg"
                alt="Tether"
                className="w-8 h-8 mb-2"
              />
              <span className="text-sm">Tether</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/icons/solana.svg"
                alt="Solana"
                className="w-8 h-8 mb-2"
              />
              <span className="text-sm">Solana</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/icons/usdcoin.svg"
                alt="USD Coin"
                className="w-8 h-8 mb-2"
              />
              <span className="text-sm">USD Coin</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/icons/dogecoin.svg"
                alt="Dogecoin"
                className="w-8 h-8 mb-2"
              />
              <span className="text-sm">Dogecoin</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm mt-6">
          <p>
            Copyright © <span className="text-highlight">*****</span> All
            Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
