import React from "react";
import CarCard from "../Home/CarCard";
import Form from "./Form";

function BookigModal({ car }: any) {
  return (
    <form method="dialog" className="modal-box w-11/12 max-w-5xl">
      <div>
        <h3 className="text-[30px] ">Rent a car</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <CarCard car={car} />
        </div>
        <div>
          <Form />
        </div>
      </div>
      <div className="modal-action">
        <button className="btn">Close</button>
      </div>
    </form>
  );
}

export default BookigModal;
