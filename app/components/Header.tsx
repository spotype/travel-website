"use client";
import { Bars3BottomRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [drop, setDrop] = useState(false);
  return (
    <div className="fixed w-full">
      <div className="h-20 w-full flex items-center justify-center z-50 bg-white shadows">
        <div className="mx-auto flex w-11/12 justify-between items-center">
          <div className="">
            <h1 className="font-bold text-2xl">Explore</h1>
          </div>
          <div>
            <button
              onClick={() => setDrop(!drop)}
              className="flex items-center justify-center"
            >
              <Bars3BottomRightIcon width={40} />
            </button>
          </div>
        </div>
      </div>

      <div
        className={
          drop
            ? `absolute w-full bg-white text-center py-10 rounded-2xl transition-all duration-500 top-28 -z-10 shadows`
            : `absolute w-full bg-white text-center py-10 rounded-2xl transition-all duration-500 -top-[30rem] -z-10`
        }
      >
        <div className="flex flex-col gap-5 font-bold items-center">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Tours</Link>
          <Link href={"/"}>Hotel</Link>
          <Link href={"/"}>Gallery</Link>
          <Link href={"/"}>Pages</Link>
          <Link href={"/"}>Blog</Link>
          <Link href={"/"}>Contact</Link>
          <Link href={"/"}>Login</Link>
          <Link
            href={"/"}
            className="bg-yellow-300 mt-2 py-3 px-10 text-md font-bold rounded-xl"
          >
            Sign UP
          </Link>
        </div>
      </div>
    </div>
  );
}
