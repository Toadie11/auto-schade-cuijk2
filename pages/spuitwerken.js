export default function Spuitwerken() {
  return (
    <div>
      <div className="bg-color-green">
        <div className="flex flex-wrap pt-10 pb-10 mx-4 md:mx-20">
          <div className="flex flex-col basis-1/2 pt-6">
            <img src="Images/spuitwerken/spuitwerken1.svg"></img>
          </div>
          <div className="flex flex-col justify-center basis-1/2 pl-4 md:pl-20">
            <div className="text-color-gray text-base leading-none font-semibold pb-2 md:text-4xl md:max-w-96 md:pb-4">
              PROFESSIONEEL<div>SPUITWERK</div>
            </div>
            <div className="text-color-beige text-[8px] leading-none md:text-base md:leading-5 text-justify md:max-w-96">
              Of het nu gaat om het bijwerken van kleine lakschades of een
              volledige overspuiting van je voertuig, wij leveren spuitwerk van
              topkwaliteit. Met oog voor detail, kleurprecisie en een strak
              eindresultaat zorgen we ervoor dat je auto er weer als nieuw
              uitziet. Alleen de beste lakken en technieken worden gebruikt voor
              een duurzaam en glanzend resultaat.
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
              src="Images/spuitwerken/spuitbussen.svg"
              className="w-90"
            ></img>
            <div className="bg-color-green text-xs font-semibold text-center text-color-beige pt-2 w-90 md:text-3xl">
              Perfecte Kleuren
            </div>
            <div className="text-[6px] px-2 text-center bg-color-green text-color-beige leading-none pb-2 w-90 md:text-sm md:leading-none md:pt-2 md:px-12 md:h-20">
              Wij mengen de lak exact op fabriekskleur, onzichtbaar herstel.
            </div>
          </div>
          <div className="flex flex-col w-1/3 px-1 md:px-16">
            <img
              src="Images/spuitwerken/spuitwerkMan.svg"
              className="w-90"
            ></img>
            <div className="bg-color-green text-xs font-semibold text-center text-color-beige pt-2 w-90 md:text-3xl">
              Stofvrij
            </div>
            <div className="text-[6px] px-2 text-center bg-color-green text-color-beige leading-none pb-2 w-90 md:text-sm md:leading-none md:pt-2 md:px-12 md:h-20">
              Onze moderne cabine garandeert een strak en stofvrij resultaat.
            </div>
          </div>
          <div className="flex flex-col w-1/3 px-1 md:px-16">
            <img
              src="Images/spuitwerken/spuitwerkAuto.svg"
              className="w-90"
            ></img>
            <div className="bg-color-green text-xs font-semibold text-center text-color-beige pt-2 w-90 md:text-3xl">
              Kwaliteitslakken
            </div>
            <div className="text-[6px] px-2 text-center bg-color-green text-color-beige leading-none pb-2 w-90 md:text-sm md:leading-none md:pt-2 md:px-12 md:h-20">
              We gebruiken alleen hoogwaardige lakken voor een langdurige glans.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
