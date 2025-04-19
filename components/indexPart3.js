export default function IndexPart3() {
  return (
    <div className="bg-color-beige pb-10 md:pb-20">
      <div className="text-2xl text-color-green font-semibold max-w-40 ml-12 md:ml-20 pt-10 pb-6 leading-none md:text-4xl md:max-w-80 md:pt-20 md:pb-10">
        WAAROM KIEZEN VOOR ONS?
      </div>

      <div className="flex flex-wrap">
        <div className="flex flex-col items-center basis-1/2 md:basis-1/4 mb-6">
          <img src="Images/index/ervaringIcon.svg" className="w-1/2" />
          <div className="text-xs text-center text-color-green font-semibold max-w-32 md:text-base">
            Meer dan 40 jaar ervaring
          </div>
        </div>

        <div className="flex flex-col items-center basis-1/2 md:basis-1/4 mb-6">
          <img src="Images/index/autoIcon.svg" className="w-1/2" />
          <div className="text-xs text-center text-color-green font-semibold max-w-32 md:text-base">
            Gratis vervangend vervoer
          </div>
        </div>

        <div className="flex flex-col items-center basis-1/2 md:basis-1/4 mb-6">
          <img src="Images/index/prijsTagIcon.svg" className="w-1/2" />
          <div className="text-xs text-center text-color-green font-semibold max-w-32 md:text-base">
            Eerlijke & transparante prijzen
          </div>
        </div>

        <div className="flex flex-col items-center basis-1/2 md:basis-1/4 mb-6">
          <img src="Images/index/samenwerkingIcon.svg" className="w-1/2" />
          <div className="text-xs text-center text-color-green font-semibold max-w-32 md:text-base">
            Samenwerking met alle verzekeraars
          </div>
        </div>
      </div>
    </div>
  );
}
