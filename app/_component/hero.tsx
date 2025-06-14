import React from "react";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://wallpaperbat.com/img/168147-open-banking-around-the-world-global-law-firm-norton-rose.jpg')",
      }}
    >
      <div className="bg-[#001F4D]/80 w-full h-full py-24 px-4 text-center flex flex-col items-center justify-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Simple and Safe Banking
        </h1>
        <p className="text-lg text-gray-200">
          Approved by millions of users worldwide
        </p>
        <div className="flex space-x-4 mt-4">
          <a
            href="#"
            className="flex items-center space-x-2 px-4 py-2 bg-white text-black rounded-lg shadow hover:scale-105 transition"
          >
            <img
              src="apple.png"
              alt="Apple"
              className="w-5 h-5"
            />
            <div className="text-sm text-left">
              <div className="text-[10px]">Download on the</div>
              <div className="font-semibold">App Store</div>
            </div>
          </a>

          <a
            href="#"
            className="flex items-center space-x-2 px-4 py-2 bg-white text-black rounded-lg shadow hover:scale-105 transition"
          >
            <img
              src="playstore.png"
              alt="Play"
              className="w-5 h-5"
            />
            <div className="text-sm text-left">
              <div className="text-[10px]">Get it on</div>
              <div className="font-semibold">Google Play</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
