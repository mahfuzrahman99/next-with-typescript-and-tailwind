"use client"

import Image from "next/image";
import { navLinks } from "../../../../../constant/constant";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";
import { useEffect, useState } from "react";

// props type
interface NavProps {
  openNav: () => void;
}

function Nav({ openNav }: NavProps) {
  const [navBG, setNavBG] = useState(false);

  console.log(navBG);

  useEffect(() => {
    const changeNavBG = () => {
        console.log(window.scrollY);

      if (window.scrollY >= 90) {
        setNavBG(true);
      } else {
        setNavBG(false);
      }
    };

    window.addEventListener("scroll", changeNavBG);

    return () => {
      window.removeEventListener("scroll", changeNavBG);
    };
  }, []);

  return (
    <div
      className={`${
        navBG && "bg-[#240b39]"
      } h-[12vh] z-[10] w-full fixed transition-all duration-300`}
    >
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[95%] xl:w-[80%] mx-auto">
        {/* LOGO */}
        <Image
          src={"/images/logo.png"}
          alt="LOGO"
          width={170}
          height={170}
          className="ml-[-1.5rem] sm:ml-0"
        />
        {/* NAV */}
        <div className="flex items-center space-x-10">
          <div className="hidden lg:flex space-x-6">
            {navLinks.map((navLink) => {
              return (
                <Link key={navLink.id} href={navLink.url}>
                  <p className="nav__link text-white font-medium mr-[-1.5rem] sm:mr-0">
                    {navLink.lebel}
                  </p>
                </Link>
              );
            })}
          </div>
          {/* Button */}
          <div>
            <button className="md:px-5 px-8 py-3 text-blue-800 font-semibold sm:text-base text-sm bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg">
              Hire Me
            </button>
          </div>
          {/* Burger menue */}
          <HiBars3BottomRight
            onClick={openNav}
            className="lg:hidden text-white w-8 h-8 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Nav;
