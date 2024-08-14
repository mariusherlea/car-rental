import React from "react";

function CarsFiltersOptions() {
  return (
    <div className="mt-10 flex items-center justify-between">
      <div>
        <h2 className="text-[30px]">Cars Catalog</h2>
        <h2>Explore our cars you might likes</h2>
      </div>
      <div className="flex gap-5 ml-auto">
        <select className="select select-bordered w-full max-w-xs hidden md:block">
          <option disabled selected>
            Price
          </option>
          <option>Min to Max</option>
          <option>Max to Min</option>
        </select>
        <select className="select select-bordered w-full max-w-xs hidden md:block">
          <option disabled selected>
            Manufactural
          </option>
          <option>Honda</option>
          <option>Bmw</option>
          <option>Ford</option>
        </select>
      </div>
    </div>
  );
}

export default CarsFiltersOptions;
