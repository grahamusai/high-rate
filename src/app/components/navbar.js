import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="  p-4 flex flex-col items-center">
      <div className="mb-4">
        {" "}
        {/* Container for logo */}
        <Link href="/">
          <h2 className="font-bold text-xl"></h2>
        </Link>
      </div>
      <ul className="flex space-x-6">
        <li>
          <Link href="/">
            <h2 className="bg-[#CDDFDD] px-3 py-2 rounded-full">Dashboard</h2>
          </Link>
        </li>
        <li>
          <Link href="/address">
            <h2 className="px-3 py-2">Contribute</h2>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <h2 className="px-3 py-2">History</h2>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <h2 className="px-3 py-2">Contact</h2>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
