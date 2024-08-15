import { useState, useEffect } from "react";
import CarCard from "./CarCard";
import BookigModal from "../CarBooking/BookigModal";
function CarList(props: any) {
  const [selectedCar, setSelectedCar] = useState<any>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (props.carLists) {
      setIsLoaded(false);
    }
  }, [props.carLists]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
      {props.carsList.map((car: any) => {
        return (
          <div
            key={car.id}
            onClick={() => {
              {
                (window as any).my_modal_4.showModal();
                setSelectedCar(car);
              }
            }}
          >
            <CarCard car={car} />
          </div>
        );
      })}

      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_4" className="modal modal-bottom sm:modal-middle">
        <BookigModal car={selectedCar} />
      </dialog>
    </div>
  );
}

export default CarList;
