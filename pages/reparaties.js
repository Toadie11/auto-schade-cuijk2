export default function Reparaties() {
  return (
    <div>
      <div className="bg-color-green">
        <div className="flex flex-wrap pt-10 pb-10 mx-4 md:mx-20">
          <div className="flex flex-col basis-1/2">
            <img src="Images/reparaties/reparaties1.svg"></img>
          </div>
          <div className="flex flex-col justify-center items-center basis-1/2 pl-4 md:pl-20">
            <div className="text-color-gray text-xl leading-none font-semibold pb-2 md:text-4xl md:max-w-96 md:pb-4">
              ALLE REPARATIES ONDER ÉÉN DAK
            </div>
            <div className="text-color-beige text-[8px] leading-none md:text-base md:leading-5 text-justify md:max-w-96">
              Wij bieden een breed scala aan reparaties voor jouw voertuig! Of
              het nu gaat om het vervangen van koplampen, het uitvoeren van
              algemene onderhoudswerkzaamheden of zelfs het vervangen van
              motorblokken, wij staan klaar om te helpen. Geen klus is te groot
              of te klein voor ons vakbekwame team.
            </div>
          </div>
        </div>
      </div>
      <div className="bg-color-gray pb-10 md:pb-20">
        <div className="pt-10 pb-4 text-color-green ml-2 text-xl font-semibold md:ml-20 md:text-5xl md:pt-20 md:pb-20">
          WAT ONS
          <div>ONDERSCHEID</div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col w-1/3 px-1 md:px-16">
            <img
              src="Images/reparaties/kwaliteitTools.svg"
              className="w-90"
            ></img>
            <div className="bg-color-green text-xs font-semibold text-center text-color-beige pt-2 w-90 md:text-3xl">
              Kwaliteit
            </div>
            <div className="text-[6px] px-2 text-center bg-color-green text-color-beige leading-none pb-2 w-90 md:text-sm md:leading-none md:pt-2 md:px-12 md:h-20">
              Alle reparaties met originele onderdelen voor topkwaliteit.
            </div>
          </div>
          <div className="flex flex-col w-1/3 px-1 md:px-16">
            <img src="Images/reparaties/ervaringMan.svg" className="w-90"></img>
            <div className="bg-color-green text-xs font-semibold text-center text-color-beige pt-2 w-90 md:text-3xl">
              Ervaring
            </div>
            <div className="text-[6px] px-2 text-center bg-color-green text-color-beige leading-none pb-2 w-90 md:text-sm md:leading-none md:pt-2 md:px-12 md:h-20">
              Vakmensen met jarenlange ervaring en passie.
            </div>
          </div>
          <div className="flex flex-col w-1/3 px-1 md:px-16">
            <img
              src="Images/reparaties/klantgericht.svg"
              className="w-90"
            ></img>
            <div className="bg-color-green text-xs font-semibold text-center text-color-beige pt-2 w-90 md:text-3xl">
              Tevredenheid
            </div>
            <div className="text-[6px] px-2 text-center bg-color-green text-color-beige leading-none pb-2 w-90 md:text-sm md:leading-none md:pt-2 md:px-12 md:h-20">
              Jouw tevredenheid is onze hoogste prioriteit.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
