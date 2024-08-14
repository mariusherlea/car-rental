import Image from "next/image";
import React from "react";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

function NavBar() {
  return (
    <div className="flex items-center justify-between px-10 py-5">
      <Link href="/">
        <Image src="logo.svg" alt="logo" width={50} height={50} />
      </Link>

      <div className="hidden md:flex gap-5">
        <h2 className="hover:bg-blue-500 p-2 rounded-full hover:text0=-white px-3 cursor-pointer bg-green-500">
          History
        </h2>
        <h2 className="hover:bg-blue-500 p-2 rounded-full hover:text0=-white px-3 cursor-pointer bg-green-500">
          Contact us
        </h2>
      </div>
      <UserButton />
    </div>
  );
}

export default NavBar;
