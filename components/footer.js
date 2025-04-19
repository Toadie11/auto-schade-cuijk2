export default function Footer() {
  return (
    <div className="bg-color-black text-color-beige">
      <div className="text-2xl font-bold pl-6 pt-10 pb-4 md:text-4xl md:pt-20 md:pb-10 md:pl-20">
        CONTACT
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col w-1/2 pt-4 pl-8 md:pl-20">
          <div className="font-semibold">ADRES</div>
          <div className="text-xs">Autoschade Cuijk</div>
          <div className="text-xs">Korte Beijerd 3b</div>
          <div className="text-xs">5431NP Cuijk</div>
        </div>
        <div className="flex flex-col pt-4 pl-4 md:pl-20">
          <div className="font-semibold">EMAIL</div>
          <div className="text-xs">info@autoschadecuijk.nl</div>
        </div>
      </div>
      <div className="flex flex-row pt-4">
        <div className="flex flex-col w-1/2 pt-4 pl-8 md:pl-20">
          <div className="font-semibold">TEL</div>
          <div className="text-xs">+31 6 1995 7296</div>
        </div>
        <div className="flex flex-col w-1/2 pt-4 pl-4 pb-10 md:pl-20">
          <div className="font-semibold">OPENINGSTIJDEN</div>
          <div className="text-xs">Ma t/m Za 08:00-17:00</div>
        </div>
      </div>
      <footer className="text-center text-xs opacity-60 pb-1">
        © {new Date().getFullYear()} Auto Schade Cuijk{" "}
        {/* <a
            href="https://devtoad.nl"
            className="underline hover:text-gray-700"
          >
            DevToad
          </a> */}
      </footer>
    </div>
  );
}
