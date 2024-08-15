"use client";
import CarList from "@/components/Home/CarList";
import CarsFiltersOptions from "@/components/Home/CarsFiltersOptions";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { getCarsList } from "@/services/index";
import { useEffect, useState } from "react";

export default function Home() {
  const [carsList, setCarsList] = useState<any>([]);
  const [carsOrgList, setCarsOrgList] = useState<any>([]);

  useEffect(() => {
    getCarList_();
  }, []);
  const getCarList_ = async () => {
    const res: any = await getCarsList();
    setCarsOrgList(res?.carLists);
    setCarsList(res?.carLists);
  };

  const filterCarList = (brand: string) => {
    const filterList = carsOrgList.filter((car: any) => {
      return car.carManufacturor == brand;
    });
    setCarsList(filterList);
  };

  const orderCarList = (order: string) => {
    const sortedData = [...carsList].sort((a, b) => {
      if (order === "Min to Max") {
        return a.price - b.price;
      } else if (order === "Max to Min") {
        return b.price - a.price;
      }
      return 0;
    });
    setCarsList(sortedData);
  };

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero />
      <SearchInput />
      <CarsFiltersOptions
        carsList={carsOrgList}
        orderCarList={(value: string) => orderCarList(value)}
        setBrand={(value: string) => filterCarList(value)}
      />

      <CarList carsList={carsList} />
    </div>
  );
}
