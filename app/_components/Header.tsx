"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

function Header() {
  const navOptions = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Pricing",
      path: "/",
    },
    {
      name: "Contact Us",
      path: "/contact-us",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between py-2 px-4 items-center shadow-md rounded">
      <div className="flex items-center gap-2">
        <Image src={"/logo.png"} alt="logo" width={40} height={60} />
        <h2 className="text-2xl font-bold">
          Trip<span className="text-primary">Mind</span>
        </h2>
      </div>

      <div className="hidden md:flex gap-8">
        {navOptions.map((item, index) => (
          <Link href={item.path} key={index}>
            <h4 className="hover:scale-105 transition-all text-gray-700 font-medium hover:text-primary">
              {item.name}
            </h4>
          </Link>
        ))}
      </div>

      <div className="md:hidden z-50">
        {isOpen ? (
          <X
            className="w-7 h-7 cursor-pointer text-gray-700"
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <Menu
            className="w-7 h-7 cursor-pointer text-gray-700"
            onClick={() => setIsOpen(true)}
          />
        )}
      </div>

      {isOpen && (
        <div className="absolute top-0 left-0 w-full bg-white shadow-lg z-10 rounded-2xl">
          <div className="flex flex-col items-center gap-6 py-8">
            {navOptions.map((item, index) => (
              <Link
                href={item.path}
                key={index}
                onClick={() => setIsOpen(false)}
              >
                <h4 className="text-gray-700 font-medium text-lg hover:text-primary transition-all">
                  {item.name}
                </h4>
              </Link>
            ))}
            <Button className="cursor-pointer">Get Started</Button>
          </div>
        </div>
      )}
      <Button className="hidden md:flex cursor-pointer">Get Started</Button>
    </div>
  );
}

export default Header;
