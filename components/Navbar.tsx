"use client";
import { NAV_LINKS } from "@/Constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav className="flexBetween max-container padding-container relative z-30 py-2">


      <Link href="/">
        <Image src="/nexthotellogo.png" alt="logo" width={170} height={80} />
      </Link>

      {/* Toggle button visible only on mobile */}
      <div className="lg:hidden">
        <Image
          src="/menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer"
          onClick={() => setMenuOpen(true)}
        />
      </div>



      {/* Menu for large screens */}
      <ul className="hidden lg:flex lg:gap-12 lg:items-center">
        {NAV_LINKS.map((link) => (
          <li key={link.key} className="text-white">
            <Link
              href={link.href}
              className="regular-15 text-white cursor-pointer transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col lg:hidden ${menuOpen ? "block" : "hidden"
          }`}
        style={{ height: "100vh" }}
      >
        {/* Overlay */}
        <div
          className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
          onClick={() => setMenuOpen(false)}
        ></div>

        {/* Drawer */}
        <div className="relative w-full max-w-xs bg-white shadow-xl p-6 h-full flex flex-col">
          {/* Close button */}
          <div className="flex justify-between">
            <h2 className="text-lg font-bold">Menu</h2>

          </div>

          {/* Menu items */}
          <ul className="mt-4 flex-grow">
            {NAV_LINKS.map((link) => (
              <li key={link.key} className="p-4 text-center">
                <Link
                  href={link.href}
                  className="regular-15 text-gray-900 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
                  onClick={() => setMenuOpen(false)} // Close the menu after clicking a link
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Button at the bottom of the drawer */}
          <div className="text-center mt-4">
            <Button type="button" title="Book Now" variant="" />
          </div>
        </div>
      </div>

      {/* Book Now button always visible on large screens */}
      <div className="hidden lg:flexCenter">
        <Button type="button" title="Book Now" variant="" />
      </div>

    </nav>


  );
};

export default Navbar;
