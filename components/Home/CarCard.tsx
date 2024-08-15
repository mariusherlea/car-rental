import Image from "next/image";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { FaGasPump } from "react-icons/fa";
import { TbManualGearbox } from "react-icons/tb";

interface Car {
  carManufacturor: string;
  name: string;
  price: number;
  image?: {
    url: string;
  };
  seats: number;
  carAvg: number;
  carType: string;
}

interface CarCardProps {
  car: Car;
}

function CarCard({ car }: CarCardProps) {
  return (
    <div className="group hover:text-green-400 transition-all duration-300 ease-in-out cursor-pointer">
      <div className="flex gap-2">
        <h2 className="text-[20px] font-medium mb-2 uppercase">
          {car.carManufacturor}
        </h2>
        <h2 className="text-[20px] font-medium mb-2 capitalize">{car.name}</h2>
      </div>

      <h2 className="text-[28px] font-bold mb-2">
        <span>$ {car.price} </span>
        <span className="text-[20px] font-light">/ day </span>
      </h2>
      {car.image?.url ? (
        <Image
          src={car.image.url}
          alt={car.name}
          width={200}
          height={200}
          className="mb-2 object-cover rounded-lg"
        />
      ) : (
        <div className="w-[200px] h-[200px] mb-2 bg-gray-300 rounded-lg flex items-center justify-center">
          <span>No Image Available</span>
        </div>
      )}
      <div className="flex gap-6">
        <div className="text-center">
          <MdAirlineSeatReclineNormal className="w-full text-[20px] mb-2" />
          <h2 className="line-clamp-5 text-[14px] font-light">
            {car.seats} seat{car.seats > 1 ? "s" : ""}
          </h2>
        </div>
        <div className="text-center">
          <FaGasPump className="w-full text-[22px] mb-2" />
          <h2 className="line-clamp-5 text-[14px] font-light">
            {car.carAvg} MPG
          </h2>
        </div>
        <div className="text-center">
          <TbManualGearbox className="w-full text-[22px] mb-2" />
          <h2 className="line-clamp-5 text-[14px] font-light">{car.carType}</h2>
        </div>
      </div>
      <button className="bg-green-400 text-white px-4 py-2 rounded-lg mt-2">
        Rent now
      </button>
    </div>
  );
}

export default CarCard;
