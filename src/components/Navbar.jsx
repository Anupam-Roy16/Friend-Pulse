"use client";
import React from "react";
import { CiHome } from "react-icons/ci";
import { RiTimeLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="navbar bg-base-100 shadow-sm pl-14 pr-14">
      <div className="flex-1">
        <a className="text-xl">Keenkeeper</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className={pathname === "/" ? "text-blue-400" : ""} href="/">
              <CiHome /> Home
            </Link>
          </li>
          <li>
            <Link
              className={pathname === "/timeline" ? "text-blue-400" : ""}
              href="/timeline"
            >
              <RiTimeLine /> Timeline
            </Link>
          </li>
          <li>
            <Link
              className={pathname === "/stats" ? "text-blue-400" : ""}
              href="/stats"
            >
              <ImStatsDots /> Stats
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
