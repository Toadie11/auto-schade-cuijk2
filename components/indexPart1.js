export default function IndexPart1() {
  return (
    <div className="bg-color-green">
      <div className="flex flex-row md:pt-10 md:pb-10">
        <div className="flex flex-col w-1/2">
          <div>
            <img
              className="ml-4 my-8 md:ml-20 md:my-16 md:h-96"
              src="Images/index/asianManGarage.svg"
            ></img>
          </div>
        </div>
        <div className="flex flex-col w-1/2 pl-8 mt-16 md:mt-24 md:pl-0">
          <div className="text-sm leading-none font-semibold text-color-gray mr-10 text-justify md:text-4xl md:max-w-80 md:text-left">
            VAKKUNDIG HERSTEL VAN AUTOSCHADE SINDS 1985
          </div>
          <div className="text-[8px] text-color-beige leading-none mr-10 mt-2 text-justify md:text-sm md:leading-5 md:max-w-96 md:mt-8">
            Bij Autoschade Cuijk ben je aan het juiste adres voor professioneel
            schadeherstel. Van kleine krassen tot grote schades: wij zorgen dat
            je auto er weer als nieuw uitziet. Snel, vakkundig en met heldere
            communicatie.
          </div>
        </div>
      </div>
    </div>
  );
}
