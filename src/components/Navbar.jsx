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
    <div>
      
      <div className="navbar bg-base-100 shadow-sm pl-14 pr-14">
        <div className="flex-1">
          <a className="text-xl">Keenkeeper</a>
        </div>
        <div className="flex-none hidden min-[604px]:block">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                className={pathname === "/" ? "text-blue-400" : ""}
                href="/"
              >
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

        <div className="dropdown block min-[604px]:hidden ">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />{" "}
            </svg>
          </div>

          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link
                className={pathname === "/" ? "text-blue-400" : ""}
                href="/"
              >
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
    </div>
  );
};

export default Navbar;
