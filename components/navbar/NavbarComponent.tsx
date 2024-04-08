"use client";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
} from "flowbite-react";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { MenuList } from "./menu";
import Image from "next/image";

export default function HeaderComponent() {
  const [menu, setMenu] = useState(MenuList);
  const pathname = usePathname();

  return (
    <Navbar
      fluid
      rounded
      className="text-[#253C95] shadow-lg sticky top-0"
    >
      <div className="container mx-auto flex items-center justify-between">
        <NavbarBrand href="https://istad.co/">
          <Image
              width={40}
              height={40}
            className="mr-3"
            src="https://istad.co/resources/img/logo_md.png"
            alt="Cstad Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-bold dark:text-[#253C95]">
            CSTAD
          </span>
        </NavbarBrand>
        <NavbarCollapse>
          {menu.map((menu) => (
            <NavbarLink
              key={menu.name}
              className="text-[#253C95]"
              href={menu.path}
              active={menu.path === pathname}
              as={Link} 
            >
              {menu.name}
            </NavbarLink>
          ))}
        </NavbarCollapse>
        <NavbarCollapse>
        <NavbarLink
              className="text-[#253C95]"
              href="/login"
              as={Link} 
            >
              <button className="bg-[#253C95] px-5 py-2 rounded-lg hover:bg-blue-800 text-gray-50 duration-300">Login</button>
            </NavbarLink>
        </NavbarCollapse>
      </div>
    </Navbar>
  );
}
