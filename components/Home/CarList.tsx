import React from "react";
import CarCard from "./CarCard";

function CarList(props: any) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
      {props.carsList.map((car: any) => {
        return (
          <div key={car.id}>
            <CarCard car={car} />
          </div>
        );
      })}
    </div>
  );
}

export default CarList;
