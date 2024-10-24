"use client";
import React, { useState } from "react";
import Image from "next/image";
import icons from "@/constants/icons";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="absolute top-5 left-0 w-full">
      <div className="flex items-center justify-between md:justify-start z-10 gap-36 mt-3 container mx-auto px-4">
        <div className="flex items-center">
          <Image
            src={icons.footerLogo}
            alt="navLogo"
            width={57.01}
            height={17.49}
          />
          <p className="text-primary font-semibold ml-2">Sleepstiq</p>
        </div>

        <div className="hidden md:flex items-center gap-14">
          <Link href="/" className="nav-link font-bold hover:text-primary">
            Home
          </Link>
          <Link
            href="/about"
            className="nav-link font-normal hover:text-primary"
          >
            About
          </Link>
          <Link
            href="/shop"
            className="nav-link font-normal hover:text-primary"
          >
            Shop
          </Link>
          <Link
            href="/faqs"
            className="nav-link font-normal hover:text-primary"
          >
            FAQs
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <FontAwesomeIcon
              icon={menuOpen ? faTimes : faBars}
              className="text-primary text-2xl"
            />
          </button>
        </div>
      </div>

     <div
  className={`md:hidden flex flex-col items-center bg-cardBg text-primary text-lg space-y-4 mt-2 p-4 shadow-md w-full max-w-[300px] ml-auto mobile-menu overflow-hidden ${
    menuOpen ? "open" : "opacity-0"
  }`}
>

        <Link
          href="/"
          onClick={toggleMenu}
          className="nav-link hover:text-primary"
        >
          Home
        </Link>
        <Link
          href="/about"
          onClick={toggleMenu}
          className="nav-link hover:text-primary"
        >
          About
        </Link>
        <Link
          href="/shop"
          onClick={toggleMenu}
          className="nav-link hover:text-primary"
        >
          Shop
        </Link>
        <Link
          href="/faqs"
          onClick={toggleMenu}
          className="nav-link hover:text-primary"
        >
          FAQs
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
