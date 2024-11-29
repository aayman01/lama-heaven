"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { logOut } from "../../app/actions/index";
import {useSession} from "next-auth/react"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const pathname = usePathname();
  const session = useSession();
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleProfileDropdown = () => setProfileDropdownOpen((prev) => !prev);

  // console.log("user",session?.data.user)
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-opacity-70 bg-transparent  z-50 shadow-lg ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-x-2">
            <Image
              className="w-auto h-auto"
              width={30}
              height={30}
              src="/logo2.png"
              alt="Lama Heaven"
            />
            <h1 className="text-lg sm:text-xl font-bold text-[#00b300] text-[#00b300]">
              Lama Heaven
            </h1>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link
              href="/"
              className={`relative text-sm font-medium text-gray-100  ${
                pathname === "/"
                  ? "after:w-full"
                  : "hover:after:w-full after:w-0"
              } after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-gray-100 after:transition-all after:duration-300`}
            >
              Home
            </Link>

            <Link
              href="/rooms"
              className={`relative text-sm font-medium text-gray-100  ${
                pathname === "/rooms"
                  ? "after:w-full"
                  : "hover:after:w-full after:w-0"
              } after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-gray-100 after:transition-all after:duration-300`}
            >
              Rooms
            </Link>

            <Link
              href="/about"
              className={`relative text-sm font-medium text-gray-100  ${
                pathname === "/about"
                  ? "after:w-full"
                  : "hover:after:w-full after:w-0"
              } after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-gray-100 after:transition-all after:duration-300`}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={`relative text-sm font-medium text-gray-100  ${
                pathname === "/contact"
                  ? "after:w-full"
                  : "hover:after:w-full after:w-0"
              } after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-gray-100 after:transition-all after:duration-300`}
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/book-room"
              className="px-4 py-2 bg-[#00b300] text-gray-100 text-sm font-medium rounded-md shadow hover:bg-[#00b300] transition duration-300 bg-[#00b300] hover:bg-[#00b300]"
            >
              Book Room
            </Link>

            <div className="relative">
              <button
                onClick={toggleProfileDropdown}
                className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0v7m0-7l-5-3m5 3l5-3"
                  />
                </svg>
              </button>

              {profileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-gray-100 bg-gray-800 shadow-lg rounded-md">
                  <Link
                    href="/dashboard"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-gray-200 hover:bg-gray-700"
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/login"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-gray-200 hover:bg-gray-700"
                  >
                    Sign In
                  </Link>
                  <div className="block px-4 py-2 text-sm text-red-500 font-medium">
                    <form action={logOut}>
                      <button type="submit">Log out</button>
                    </form>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={toggleMenu}
              className="block md:hidden  text-gray-100 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden  rounded-md shadow-lg p-4 mt-2">
            <div className="flex flex-col justify-center space-y-3 w-fit ">
              <Link
                href="/"
                className={`relative text-sm font-medium text-gray-100   ${
                  pathname === "/"
                    ? "after:w-full"
                    : "hover:after:w-full after:w-0"
                } after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-gray-100 after:transition-all after:duration-300`}
              >
                Home
              </Link>

              <Link
                href="/rooms"
                className={`relative text-sm font-medium text-gray-100  ${
                  pathname === "/rooms"
                    ? "after:w-full"
                    : "hover:after:w-full after:w-0"
                } after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-gray-100 after:transition-all after:duration-300`}
              >
                Rooms
              </Link>

              <Link
                href="/about"
                className={`relative text-sm font-medium text-gray-100  ${
                  pathname === "/about"
                    ? "after:w-full"
                    : "hover:after:w-full after:w-0"
                } after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-gray-100 after:transition-all after:duration-300`}
              >
                About
              </Link>

              <Link
                href="/contact"
                className={`relative text-sm font-medium text-gray-100  ${
                  pathname === "/contact"
                    ? "after:w-full"
                    : "hover:after:w-full after:w-0"
                } after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-gray-100 after:transition-all after:duration-300`}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
