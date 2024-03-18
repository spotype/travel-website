"use client";
import { Bars3BottomRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [drop, setDrop] = useState(true);

  const [home, setHome] = useState(true);
  const [tours, setTours] = useState(false);
  const [hotel, setHotel] = useState(false);
  const [gallery, setGallery] = useState(false);
  const [pages, setPages] = useState(false);
  const [blog, setBlog] = useState(false);
  const [contact, setContact] = useState(false);
  const [login, setLogin] = useState(false);

  // active color function
  const activeColor = (type: string) => {
    setHome(type === "home");
    setTours(type === "tours");
    setHotel(type === "hotel");
    setGallery(type === "gallery");
    setPages(type === "pages");
    setBlog(type === "blog");
    setContact(type === "contact");
    setLogin(type === "login");
  };
  return (
    <div className="fixed w-full">
      <div className="h-20 w-full flex items-center justify-center z-50 bg-white shadows">
        <div className="mx-auto flex w-11/12 justify-between items-center 2xl:w-[1500px]">
          <div className="">
            <h1 className="font-bold text-2xl">Explore</h1>
          </div>

          <div className="hidden md:block md:flex md:items-center md:font-bold md:gap-3 xl:gap-6">
            <Link
              onClick={() => activeColor("home")}
              href={"/"}
              className={
                home
                  ? "text-yellow-600"
                  : " hover:text-yellow-400 transition-all duration-300 ease-in"
              }
            >
              Home
            </Link>
            <Link
              onClick={() => activeColor("tours")}
              href={"/tours"}
              className={
                tours
                  ? "text-yellow-400"
                  : " hover:text-yellow-400 transition-all duration-300 ease-in"
              }
            >
              Tours
            </Link>
            <Link
              onClick={() => activeColor("hotel")}
              href={"/hotel"}
              className={
                hotel
                  ? "text-yellow-400"
                  : " hover:text-yellow-400 transition-all duration-300 ease-in"
              }
            >
              Hotel
            </Link>
            <Link
              onClick={() => activeColor("gallery")}
              href={"/gallery"}
              className={
                gallery
                  ? "text-yellow-400"
                  : " hover:text-yellow-400 transition-all duration-300 ease-in"
              }
            >
              Gallery
            </Link>
            <Link
              onClick={() => activeColor("pages")}
              href={"/pages"}
              className={
                pages
                  ? "text-yellow-400"
                  : "hover:text-yellow-400 transition-all duration-300 ease-in"
              }
            >
              Pages
            </Link>
            <Link
              onClick={() => activeColor("blog")}
              href={"/blog"}
              className={
                blog
                  ? "text-yellow-400"
                  : "hover:text-yellow-400 transition-all duration-300 ease-in"
              }
            >
              Blog
            </Link>
            <Link
              onClick={() => activeColor("contact")}
              href={"/contact"}
              className={
                contact
                  ? "text-yellow-400"
                  : "hover:text-yellow-400 transition-all duration-300 ease-in"
              }
            >
              Contact
            </Link>
            <Link
              onClick={() => activeColor("login")}
              href={"/login"}
              className={
                login
                  ? "text-yellow-400"
                  : "hover:text-yellow-400 transition-all duration-300 ease-in"
              }
            >
              Login
            </Link>
            <Link
              onClick={() => activeColor("signup")}
              href={"/sign-up"}
              className={"bg-yellow-300 py-2 px-6 text-md font-bold rounded-xl"}
            >
              Sign UP
            </Link>
          </div>
          <div className="  md:hidden">
            <button
              onClick={() => setDrop(!drop)}
              className="flex items-center justify-center md:hidden"
            >
              <Bars3BottomRightIcon width={40} />
            </button>
          </div>
        </div>
      </div>

      <div
        className={
          drop
            ? `absolute w-full bg-white text-center py-10 rounded-2xl transition-all duration-500 top-28 -z-10 shadows md:hidden`
            : `absolute w-full bg-white text-center py-10 rounded-2xl transition-all duration-500 -top-[30rem] -z-10 md:hidden`
        }
      >
        <div className="flex flex-col gap-5 font-bold items-center">
          <Link
            onClick={() => activeColor("home")}
            href={"/"}
            className={home ? "text-yellow-400" : "text-black"}
          >
            Home
          </Link>
          <Link
            onClick={() => activeColor("tours")}
            href={"/tours"}
            className={tours ? "text-yellow-400" : "text-black"}
          >
            Tours
          </Link>
          <Link
            onClick={() => activeColor("hotel")}
            href={"/hotel"}
            className={hotel ? "text-yellow-400" : "text-black"}
          >
            Hotel
          </Link>
          <Link
            onClick={() => activeColor("gallery")}
            href={"/gallery"}
            className={gallery ? "text-yellow-400" : "text-black"}
          >
            Gallery
          </Link>
          <Link
            onClick={() => activeColor("pages")}
            href={"/pages"}
            className={pages ? "text-yellow-400" : "text-black"}
          >
            Pages
          </Link>
          <Link
            onClick={() => activeColor("blog")}
            href={"/blog"}
            className={blog ? "text-yellow-400" : "text-black"}
          >
            Blog
          </Link>
          <Link
            onClick={() => activeColor("contact")}
            href={"/contact"}
            className={contact ? "text-yellow-400" : "text-black"}
          >
            Contact
          </Link>
          <Link
            onClick={() => activeColor("login")}
            href={"/login"}
            className={login ? "text-yellow-400" : "text-black"}
          >
            Login
          </Link>
          <Link
            onClick={() => activeColor("signup")}
            href={"/sign-up"}
            className="bg-yellow-300 mt-2 py-3 px-10 text-md font-bold rounded-xl"
          >
            Sign UP
          </Link>
        </div>
      </div>
    </div>
  );
}
