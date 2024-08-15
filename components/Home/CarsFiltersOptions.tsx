import { useEffect, useState } from "react";

function CarsFiltersOptions({ carsList, setBrand, orderCarList }: any) {
  const [brandList, setBrandList] = useState<any>();
  const BrandSet = new Set();

  useEffect(() => {
    if (carsList) {
      filterCarList();
    }
  }, [carsList]);

  const filterCarList = () => {
    carsList.forEach((element: any) => {
      BrandSet.add(element.carManufacturor);
    });

    setBrandList(Array.from(BrandSet));
  };
  return (
    <div className="mt-10 flex items-center justify-between">
      <div>
        <h2 className="text-[30px]">Cars Catalog</h2>
        <h2>Explore our cars you might likes</h2>
      </div>
      <div className="flex gap-5 ml-auto">
        <select
          className="select select-bordered w-full max-w-xs hidden md:block"
          onChange={(e) => orderCarList(e.target.value)}
        >
          <option disabled>Price</option>
          <option>Min to Max</option>
          <option>Max to Min</option>
        </select>
        <select
          className="select select-bordered w-full max-w-xs hidden md:block"
          onChange={(e) => {
            setBrand(e.target.value);
          }}
        >
          <option disabled>Manufactural</option>
          {brandList?.map((brand: string, index: number) => {
            return <option key={index}>{brand}</option>;
          })}
        </select>
      </div>
    </div>
  );
}

export default CarsFiltersOptions;
