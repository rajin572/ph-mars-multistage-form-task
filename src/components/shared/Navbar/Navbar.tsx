"use client";

import Container from "@/components/ui/Container";
import Link from "next/link";
import { useState } from "react";

const NavItems = [
  { id: "1", name: "Apply For Mars", route: "/" },
  { id: "2", name: "All Mars Visitors", route: "/all-mars-visitors" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="bg-[#273969] z-[999] text-white border-b border-[#DF0000]">
      <Container>
        <header className=" mx-auto py-3 flex justify-between items-center z-50 ">
          {/* //*Company name */}
          <div>
            <Link href="/" className="text-xl cursor-pointer">
              <span className="font-extrabold text-[#DCBF80] ">
                Mission_Mars
              </span>
            </Link>
          </div>
          {/* //*Nav links */}
          <nav
            className={
              mobileMenuOpen
                ? " w-full lg:static absolute top-[50px] left-0 lg:bg-none bg-[#273969] transition-all lg:z-0 -z-50 lg:border-none border-b-2 border-[#DF0000]"
                : " w-full lg:static absolute top-[-550px] left-0 transition-all lg:z-0 -z-50"
            }
          >
            {/* //* For Laptop or Desktop */}
            <div className="hidden lg:block">
              <ul className="flex justify-end items-center gap-8 lg:flex-row flex-col lg:py-0 py-10">
                {NavItems.map((navItem) => (
                  <li
                    key={navItem.id}
                    className="lg:mb-0 mb-5 cursor-pointer  group relative text-white hover:text-[#DCBF80]"
                  >
                    <Link
                      href={navItem.route}
                      className="after-underline-after"
                    >
                      {navItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* //*For Tab or Mobile */}
            <div className="block lg:hidden">
              <ul className="flex justify-end items-center gap-5 lg:flex-row flex-col lg:py-0 py-10">
                {NavItems.map((navItem) => (
                  <li
                    key={navItem.id}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="lg:mb-0 mb-5 cursor-pointer  group relative text-white"
                  >
                    <Link
                      href={navItem.route}
                      className="after-underline-after"
                    >
                      {navItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          {/* //*Icons */}
          <div className="lg:hidden">
            {mobileMenuOpen ? (
              <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
            ) : (
              <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </div>
            )}
          </div>
        </header>
      </Container>
    </div>
  );
};

export default Navbar;
