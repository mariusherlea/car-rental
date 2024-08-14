"use client";
import CarsFiltersOptions from "@/components/Home/CarsFiltersOptions";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { getCarsList } from "@/services/index";
import { useEffect, useState } from "react";

export default function Home() {
  const [carsList, setCarsList] = useState<any>([]);

  useEffect(() => {
    getCarList_();
  }, []);
  const getCarList_ = async () => {
    const res: any = await getCarsList();
    setCarsList(res?.carLists);
  };
  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero />
      <SearchInput />
      <CarsFiltersOptions />
    </div>
  );
}
