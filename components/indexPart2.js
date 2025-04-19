export default function IndexPart2() {
  return (
    <div className="bg-color-gray pb-10 md:pb-20">
      <div className="pt-10 pb-4 text-color-beige ml-2 text-xl font-semibold md:ml-20 md:text-5xl md:pt-20 md:pb-20">
        SERVICES
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col w-1/3 px-1 md:px-16">
          <img src="Images/index/reparatie.svg" className="w-90"></img>
          <div className="bg-color-green text-xs font-semibold text-center text-color-beige pt-2 w-90 md:text-3xl">
            Reparaties
          </div>
          <div className="text-[6px] text-center bg-color-green text-color-beige leading-none pb-2 w-90 md:text-sm md:leading-none md:pt-2 md:px-12 md:h-20">
            Snelle en betrouwbare auto reparaties, voor elk merk.
          </div>
        </div>
        <div className="flex flex-col w-1/3 px-1 md:px-16">
          <img src="Images/index/spuitwerk.svg" className="w-90"></img>
          <div className="bg-color-green text-xs font-semibold text-center text-color-beige pt-2 w-90 md:text-3xl">
            Spuitwerk
          </div>
          <div className="text-[6px] text-center bg-color-green text-color-beige leading-none pb-2 w-90 md:text-sm md:leading-none md:pt-2 md:px-12 md:h-20">
            Professioneel spuitwerk voor schadeherstel of make-over.
          </div>
        </div>
        <div className="flex flex-col w-1/3 px-1 md:px-16">
          <img src="Images/index/occasion.svg" className="w-90"></img>
          <div className="bg-color-green text-xs font-semibold text-center text-color-beige pt-2 w-90 md:text-3xl">
            Occasions
          </div>
          <div className="text-[6px] text-center bg-color-green text-color-beige leading-none pb-2 w-90 md:text-sm md:leading-none md:pt-2 md:px-12 md:h-20">
            Betrouwbare occasions met garantie.
          </div>
        </div>
      </div>
    </div>
  );
}
