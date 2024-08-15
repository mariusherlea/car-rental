import React from "react";

function Form() {
  return (
    <div>
      <div className="flex flex-col w-full mb-5">
        <label htmlFor="name">Pickup Location</label>
        <select className="select select-bordered w-full max-w-full">
          <option disabled defaultValue={"Pickup Location ?"}>
            Pickup Location ?
          </option>
          <option>New York</option>
          <option>London</option>
        </select>
      </div>
      <div className="flex flex-col gap-5 mb-5">
        <div className="flex flex-col w-full">
          <label htmlFor="name">Pickup Date</label>
          <input
            type="date"
            placeholder="Type here"
            className="input input-bordered w-full max-w-hull"
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="name">Drop off Date</label>
          <input
            type="date"
            placeholder="Type here"
            className="input input-bordered w-full max-w-hull"
          />
        </div>
      </div>
      <div className="flex flex-col gap-5 mb-5">
        <div className="flex flex-col w-full">
          <label htmlFor="name">Pickup Time</label>
          <input
            type="time"
            placeholder="Type here"
            className="input input-bordered w-full max-w-hull"
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="name">Drop off Time</label>
          <input
            type="time"
            placeholder="Type here"
            className="input input-bordered w-full max-w-hull"
          />
        </div>
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="name">Contact phone</label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-hull"
        />
      </div>
    </div>
  );
}

export default Form;
