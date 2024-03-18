"use client";
import { Car, Plane, School, Ship } from "lucide-react";
import { useState } from "react";

export default function Travelslide() {
  const [hotel, setHotel] = useState(false);
  const [plane, setPlane] = useState(false);
  const [car, setCar] = useState(false);
  const [ship, setShip] = useState(false);
  return (
    <div className="-mt-28">
      <div className="flex mx-auto w-11/12 flex-col">
        <div className="">
          <div className="text-white flex gap-4">
            <button
              onClick={() => setHotel(!hotel)}
              className={
                hotel
                  ? "bg-yellow-400 size-14 flex items-center justify-center rounded-xl"
                  : "bg-white size-14 flex items-center justify-center rounded-xl"
              }
            >
              <School size={40} color="black" />
            </button>
            <button
              onClick={() => setPlane(!plane)}
              className={
                plane
                  ? "bg-yellow-400 size-14 flex items-center justify-center rounded-xl"
                  : "bg-white size-14 flex items-center justify-center rounded-xl"
              }
            >
              <Plane size={40} color="black" />
            </button>
            <button
              onClick={() => setCar(!car)}
              className={
                car
                  ? "bg-yellow-400 size-14 flex items-center justify-center rounded-xl"
                  : "bg-white size-14 flex items-center justify-center rounded-xl"
              }
            >
              <Car size={40} color="black" />
            </button>
            <button
              onClick={() => setShip(!ship)}
              className={
                ship
                  ? "bg-yellow-400 size-14 flex items-center justify-center rounded-xl"
                  : "bg-white size-14 flex items-center justify-center rounded-xl"
              }
            >
              <Ship size={40} color="black" />
            </button>
          </div>
        </div>

        <div className="bg-white my-6 w-full flex shadow-xl p-5">
          <div className="w-full flex flex-col gap-5">
            <div className="flex flex-col w-full gap-2">
              <span className="text-lg font-bold">Your Destination</span>
              <select
                name=""
                id=""
                className="bg-white shadows text-lg py-2 px-3"
              >
                <option value="bangladesh">Afghanistan</option>
                <option value="bangladesh">Albania</option>
                <option value="bangladesh">Algeria</option>
                <option value="bangladesh">Andorra</option>
                <option value="bangladesh">Angola</option>
                <option value="bangladesh">Antigua and Barbuda</option>
                <option value="bangladesh">Argentina</option>
                <option value="bangladesh">Armenia</option>
                <option value="bangladesh">Australia</option>
                <option value="bangladesh">Austria</option>
              </select>
            </div>

            <div>
              <span className="font-bold">Check in</span>
              <p>01-26-22</p>
            </div>

            <div>
              <span className="font-bold">Check Out</span>
              <p>01-30-22</p>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="child" className="font-bold">
                Child
              </label>
              <select
                name="child"
                id="child"
                className="bg-white shadows text-lg py-2 px-3"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="adult" className="font-bold">
                Adult
              </label>
              <select
                name="adult"
                id="adult"
                className="bg-white shadows text-lg py-2 px-3"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            <div>
              <button>Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
