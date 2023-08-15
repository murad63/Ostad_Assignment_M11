import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav className=" flex space-x-6 py-3 bg-gray-500 p-2 rounded-md justify-center">
        <Link href={"/"} className="text-lg font-bold text-white">
          Home
        </Link>
        <Link href={"/blog"} className="text-lg font-bold text-white">
          Blog 
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;