import React, { useState } from "react";
import { useRouter } from "next/router";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div className="flex justify-between pt-2 bg-color-beige">
      <a href="/">
        <div className="flex items-center hover:opacity-60 w-20">
          <img src="Images/Logo/Logo2AutoSchade.png" alt="Your Logo" />
        </div>
      </a>
      <div className="font-semibold mt-5 hidden lg:block">
        <a
          href="/reparaties"
          className={`p-2 xl:p-4 mx-2 sm:mx-4 xl:mx-6 text-xs md:text-lg xl:text-2xl hover:opacity-60 ${
            pathname === "/reparaties" ? "underline underline-offset-4" : ""
          }`}
        >
          Reparaties
        </a>
        <a
          href="/spuitwerken"
          className={`p-2 xl:p-4 mx-2 sm:mx-4 xl:mx-6 text-xs md:text-lg xl:text-2xl hover:opacity-60 ${
            pathname === "/spuitwerken" ? "underline underline-offset-4" : ""
          }`}
        >
          Spuitwerken
        </a>
        <a
          href="/occasions"
          className={`p-2 xl:p-4 mx-2 sm:mx-4 xl:mx-6 text-xs md:text-lg xl:text-2xl hover:opacity-60 ${
            pathname === "/occasions" ? "underline underline-offset-4" : ""
          }`}
        >
          Occasions
        </a>
      </div>

      <div className="block lg:hidden">
        <img
          src="/Images/Header/menuLogoGray.png"
          alt="Menu Icon"
          onClick={toggleMenu}
          className="cursor-pointer mt-4 mr-2 sm:mt-4 w-10 sm:w-12"
        />
        {menuOpen && (
          <div className="absolute top-20 sm:top-32 right-0 bg-color-beige text-color-gray w-full text-center my-4 shadow-md z-10">
            <a
              href="/reparaties"
              className="block p-2 border-b border-gray-200 hover:opacity-60"
            >
              Reparaties
            </a>
            <a
              href="/spuitwerken"
              className="block p-2 border-b border-gray-200 hover:opacity-60"
            >
              Spuitwerken
            </a>
            <a
              href="/occasions"
              className="block p-2 border-b border-gray-200 hover:opacity-60"
            >
              Occasions
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
