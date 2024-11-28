// import "react-date-range/dist/styles.css"; // main style file
// import "react-date-range/dist/theme/default.css";
"use client";

import { useState } from "react";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { FaHandHoldingMedical, FaPhoneAlt } from "react-icons/fa";
import { FaBath, FaBed } from "react-icons/fa6";
import { FcBusinessman } from "react-icons/fc";
import { GiTowel } from "react-icons/gi";
import { ImTv } from "react-icons/im";
import { IoIosExpand, IoIosWifi } from "react-icons/io";
import { LuSofa } from "react-icons/lu";
import {
  MdDining,
  MdElectricBolt,
  MdEmergency,
  MdOutlineBalcony,
  MdOutlineBed,
  MdOutlineLocalMovies,
  MdOutlineRoofing,
  MdTableBar,
} from "react-icons/md";
import { PiBowlSteam, PiHairDryerFill } from "react-icons/pi";

const detailsPage = () => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [isAdultsInputVisible, setIsAdultsInputVisible] = useState(false);
  const [isChildrenInputVisible, setIsChildrenInputVisible] = useState(false);

  const handleIncreaseAdults = () => setAdults((prev) => prev + 1);
  const handleDecreaseAdults = () => {
    if (adults > 1) setAdults((prev) => prev - 1); // Minimum value is 1
  };

  const handleIncreaseChildren = () => setChildren((prev) => prev + 1);
  const handleDecreaseChildren = () => {
    if (children > 0) setChildren((prev) => prev - 1); // Minimum value is 0
  };

  // custom field color
  const customColor =
    "w-full px-4 py-2 bg-[#1A1C1E] border border-[#80ff80] text-white";

  const customBtnColor =
    "w-16 text-center bg-transparent text-black border-transparent";

  return (
    <div>
      {/* left part   */}
      <div className="w-[870px]">
        <h2>Paharikha 6</h2>
        <p className="text-[#80ff80]">
          1x Master Bed / Hill View Balcony / Wardrobe / Dressing Table /
          In-room Refrigerator / Hair Dryer / Luxurious Sofa / Cable TV / WiFi /
          Intercom Telephone / Rooftop Access
        </p>

        <div className="flex gap-5">
          <div className="flex items-center gap-3">
            <FcBusinessman /> 2 guest
          </div>
          <div className="flex items-center gap-3">
            <FaBed /> 1 bed
          </div>
          <div className="flex items-center gap-3">
            <FaBath />1 bathroom
          </div>
          <div className="flex items-center gap-3">
            <IoIosWifi />
            No wifi
          </div>
          <div className="flex items-center gap-3">
            <IoIosExpand />
            1000 ft<sup>2</sup>
          </div>
        </div>

        <p>
          Our Paharikha is a luxurious cottage designed to offer a serene and
          comfortable stay with modern amenities. Each cottage is carefully
          crafted to provide a stylish and cozy environment, ideal for
          relaxation. The cottage features one spacious master bedroom,
          complemented by a hill view balcony that offers breathtaking scenery.
          Every detail has been thoughtfully designed, from the luxurious sofa
          to the well-equipped in-room refrigerator, ensuring a delightful stay.
          Whether you’re enjoying the sunset from the rooftop access or
          unwinding in the elegant bedroom, Paharikha 1-6 promises a truly
          memorable experience.
        </p>

        {/* room amenities  */}
        <div>
          <h2>Room Amenities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex items-center gap-3">
              <MdOutlineBed />1 Master Bed and 1 Bedroom
            </div>
            <div className="flex items-center gap-3">
              <FaBath />1 Washroom
            </div>
            <div className="flex items-center gap-3">
              <ImTv />
              Cable TV
            </div>
            <div className="flex items-center gap-3">
              <IoIosWifi />
              Wifi & Internet
            </div>
            <div className="flex items-center gap-3">
              <PiHairDryerFill />
              Hair Dryer
            </div>
            <div className="flex items-center gap-3">
              <MdTableBar />
              Dressing Table
            </div>
            <div className="flex items-center gap-3">
              <CgSmartHomeRefrigerator />
              In-room Refrigerator
            </div>
            <div className="flex items-center gap-3">
              <MdOutlineLocalMovies />1 Almirah
            </div>
            <div className="flex items-center gap-3">
              <MdOutlineBalcony />
              Hill View Balcony
            </div>
            <div className="flex items-center gap-3">
              <LuSofa />
              Luxurious Sofa
            </div>
            <div className="flex items-center gap-3">
              <MdOutlineRoofing />
              Rooftop Access
            </div>
          </div>
        </div>

        {/* addition service  */}
        <div>
          <h2>Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex gap-6 items-center bg-[#1E2022] text-white py-5 px-4 rounded-lg">
              <FaPhoneAlt className="text-[#80ff80]" />
              <h1>Intercom Facility</h1>
            </div>

            <div className="flex gap-6 items-center bg-[#1E2022] text-white py-5 px-4 rounded-lg">
              <MdElectricBolt className="text-[#80ff80]" />
              <h1>Private Electricity System</h1>
            </div>

            <div className="flex gap-6 items-center bg-[#1E2022] text-white py-5 px-4 rounded-lg">
              <MdDining className="text-[#80ff80]" />
              <h1>Gourmet Dining</h1>
            </div>

            <div className="flex gap-6 items-center bg-[#1E2022] text-white py-5 px-4 rounded-lg">
              <GiTowel className="text-[#80ff80]" />
              <h1>Well-Stocked Toiletries</h1>
            </div>

            <div className="flex gap-6 items-center bg-[#1E2022] text-white py-5 px-4 rounded-lg">
              <PiBowlSteam className="text-[#80ff80]" />
              <h1>Bathroom Geysers</h1>
            </div>

            <div className="flex gap-6 items-center bg-[#1E2022] text-white py-5 px-4 rounded-lg">
              <FaHandHoldingMedical className="text-[#80ff80]" />
              <h1>24/7 Medical Care</h1>
            </div>

            <div className="flex gap-6 items-center bg-[#1E2022] text-white py-5 px-4 rounded-lg">
              <MdEmergency className="text-[#80ff80]" />
              <h1>Helipad on Emergency</h1>
            </div>

            <div className="flex gap-6 items-center bg-[#1E2022] text-white py-5 px-4 rounded-lg">
              <FaBed className="text-[#80ff80]" />
              <h1>Extra Bed Taking Facility Available</h1>
            </div>
          </div>
        </div>
      </div>

      {/* right part  */}
      <div>
        <div className="flex justify-between items-center ">
          <h1 className="text-xl md:text-2xl lg:text-3xl">Reserve: </h1>
          <h2>From 8,000৳ /night</h2>
        </div>

        {/* form item  */}
        <div className="bg-gray-900 text-white p-6 max-w-sm mx-auto rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">RESERVE:</h2>
          <p className="text-lg font-semibold mb-6">
            From <span className="text-yellow-500">8,000৳</span> /night
          </p>
          <form>
            {/* Check-In */}
            <div className="mb-4 ">
              <label
                htmlFor="check-in"
                className="block text-sm font-medium mb-1"
              >
                Check In
              </label>
              <input
                type="date"
                id="check-in"
                className={customColor}
                defaultValue="2024-11-28"
              />
            </div>

            {/* Check-Out */}
            <div className="mb-4">
              <label
                htmlFor="check-out"
                className="block text-sm font-medium mb-1"
              >
                Check Out
              </label>
              <input
                type="date"
                id="check-out"
                className={customColor}
                defaultValue="2024-11-29"
              />
            </div>

            {/* Adults */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Adults</label>
              <button
                type="button"
                onClick={() => setIsAdultsInputVisible(!isAdultsInputVisible)}
                className={customColor}
              >
                Adults: {adults}
              </button>
              {isAdultsInputVisible && (
                <div className="relative mt-2 bg-[#F8F5F1] border border-collapse rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <button
                      type="button"
                      onClick={handleDecreaseAdults}
                      className={customBtnColor}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={adults}
                      readOnly
                      className={customBtnColor}
                    />
                    <button
                      type="button"
                      onClick={handleIncreaseAdults}
                      className={customBtnColor}
                    >
                      +
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Children */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Children</label>
              <button
                type="button"
                aria-expanded={isChildrenInputVisible}
                onClick={() =>
                  setIsChildrenInputVisible(!isChildrenInputVisible)
                }
                className={customColor}
              >
                Children: {children}
              </button>
              {isChildrenInputVisible && (
                <div className="relative mt-2 bg-[#F8F5F1] border border-collapse rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <button
                      type="button"
                      onClick={handleDecreaseChildren}
                      className={customBtnColor}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={children}
                      readOnly
                      className={customBtnColor}
                    />
                    <button
                      type="button"
                      onClick={handleIncreaseChildren}
                      className={customBtnColor}
                    >
                      +
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Rate */}
            <div className="mb-4">
              <label htmlFor="rate" className="block text-sm font-medium mb-1">
                Selected Rate
              </label>
              <select id="rate" className={customColor}>
                <option>Regular Price</option>
                <option>Discounted Price</option>
              </select>
            </div>

            {/* Total Cost */}
            <div className="mt-6 border-t border-gray-700 pt-4">
              <p className="text-lg font-semibold">
                Total Cost{" "}
                <span className="text-yellow-500 font-bold float-right">
                  8,000৳
                </span>
              </p>
            </div>
          </form>
        </div>

        <input type="" name="number" placeholder="number" id="" />
      </div>
    </div>
  );
};

export default detailsPage;
