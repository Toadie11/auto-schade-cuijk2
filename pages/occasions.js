import cars from "@/data/cars";

export default function Occasions() {
  return (
    <div className="px-8 py-8 md:py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 bg-color-green">
      {cars.map((car) => (
        <div key={car.id} className="bg-color-beige shadow-md overflow-hidden">
          <img
            src={car.image}
            alt={car.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-center">
            <div className="text-base md:text-lg font-semibold text-color-green">
              {car.title}
            </div>
            <div className="text-sm md:text-base text-color-black mt-1">
              {car.price}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
