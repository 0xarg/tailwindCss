"use client";
import { IconMenu2 } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/",
    },
    {
      title: "Projects",
      link: "/",
    },
    {
      title: "Contact",
      link: "/",
    },
  ];

  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <div className="flex justify-between items-center md:mt-4 md:shadow-aceternity  max-w-4xl md:rounded-full mx-auto border border-neutral-200 px-3 py-3 bg-white">
        <Image
          src={"https://ui.aceternity.com/logo.png"}
          alt="logo"
          height={30}
          width={30}
          className="rounded-full"
        />
        <div className=" hidden md:flex items-center text-sm mr-10 text-neutral-500 gap-4">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              className="hover:text-neutral-900 transition duration-200"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <IconMenu2 />{" "}
        </button>
        {open && (
          <div className="absolute  md:hidden inset-x-0 top-16 mx-auto max-w-[90%] bg-white rounded-md shadow-aceternity ">
            <div className=" flex p-4 flex-col items-start text-sm mr-10 text-neutral-500 gap-4">
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.link}
                  className="hover:text-neutral-900  transition duration-200"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
