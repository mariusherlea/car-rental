import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-5">
      <div>
        <h2 className="text-[40px] md:text-[60px] font-bold">
          Car rental in your area
        </h2>
        <h2>
          Book the selected car effortlessly, Pay for driving only, Book the car
          now
        </h2>
        <h2 className="hover:bg-blue-500 p-2 rounded-full hover:text0=-white px-3 cursor-pointer w-fit bg-green-500 mt-4">
          Explore cars
        </h2>
      </div>
      <div>
        <Image src="car.svg" alt="car" width={400} height={500} />
      </div>
    </div>
  );
}

export default Hero;
