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

const DetailsPage = () => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [isAdultsInputVisible, setIsAdultsInputVisible] = useState(false);
  const [isChildrenInputVisible, setIsChildrenInputVisible] = useState(false);
  const [rate, setRate] = useState("");

  const [checkIn, setCheckIn] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [checkOut, setCheckOut] = useState(
    new Date().toISOString().split("T")[0]
  );

  const handleIncreaseAdults = () => setAdults((prev) => prev + 1);
  const handleDecreaseAdults = () => {
    if (adults > 1) setAdults((prev) => prev - 1); // Minimum value is 1
  };

  const handleIncreaseChildren = () => setChildren((prev) => prev + 1);
  const handleDecreaseChildren = () => {
    if (children > 0) setChildren((prev) => prev - 1); // Minimum value is 0
  };

  // custom field color
  const customColor = "w-full px-4 py-2 border border-[#80ff80] text-black";

  const customBtnColor =
    "w-16 text-center bg-transparent text-black border-transparent";

  const additionServiceCardDesign =
    "flex gap-6 items-center bg-[#FFF9EF] text-black py-5 px-4 rounded-lg";

  const today = new Date().toISOString().split("T")[0];

  const handleChange = (e) => {
    const rate1 = e.target.value;
    setRate(rate1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(rate);
    console.log(checkIn, checkOut, adults, children);
  };

  return (
    // <div className="w-full bg-[#151719]">
    <div className="flex flex-col lg:flex-row gap-6 w-[360px] md:w-[700px] lg:w-[1110px] mx-auto  text-black">
      {/* left part   */}
      <div className=" px-4 py-4">
        <h2 className="text-xl md:text-2xl lg:text-4xl font-medium md:font-bold py-6">
          Paharikha 6
        </h2>
        <p className="text-[#80ff80] text-xs pb-3 text-justify">
          1x Master Bed / Hill View Balcony / Wardrobe / Dressing Table /
          In-room Refrigerator / Hair Dryer / Luxurious Sofa / Cable TV / WiFi /
          Intercom Telephone / Rooftop Access
        </p>
        {/* details  */}
        <div className="grid grid-cols-3 gap-5 py-6 text-sm">
          <div className="flex justify-start items-center gap-3 px-4 w-32">
            <FcBusinessman className="text-2xl" /> 2 guest
          </div>
          <div className="flex justify-start items-center gap-3 px-4 w-32">
            <FaBed className="text-2xl" /> 1 bed
          </div>
          <div className="flex justify-start items-center gap-3 px-4 w-32">
            <FaBath className="text-2xl" />1 bathroom
          </div>
          <div className="flex justify-start items-center gap-3 px-4 w-32">
            <IoIosWifi className="text-2xl" />
            No wifi
          </div>
          <div className="flex justify-start items-center gap-3 px-4 w-32">
            <IoIosExpand className="text-2xl" />
            1000 ft<sup>2</sup>
          </div>
        </div>

        <p className="space-y-6 font-light py-6 text-justify">
          <span className="font-semibold text-xl">Our Paharikha</span> is a
          luxurious cottage designed to offer a serene and comfortable stay with
          modern amenities. Each cottage is carefully crafted to provide a
          stylish and cozy environment, ideal for relaxation. The cottage
          features one spacious master bedroom, complemented by a hill view
          balcony that offers breathtaking scenery. Every detail has been
          thoughtfully designed, from the luxurious sofa to the well-equipped
          in-room refrigerator, ensuring a delightful stay. Whether you’re
          enjoying the sunset from the rooftop access or unwinding in the
          elegant bedroom, Paharikha 1-6 promises a truly memorable experience.
        </p>

        {/* room amenities  */}
        <div>
          <h2 className="text-xl md:text-2xl lg:text-4xl font-medium md:font-bold py-6">
            Room Amenities
          </h2>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <div className="flex items-center gap-3">
              <MdOutlineBed className="text-lg md:text-3xl font-thin text-[#80ff80]" />
              1 Master Bed and 1 Bedroom
            </div>
            <div className="flex items-center gap-3 text-lg">
              <FaBath className="text-lg md:text-3xl font-thin text-[#80ff80]" />
              1 Washroom
            </div>
            <div className="flex items-center gap-3 text-lg">
              <ImTv className="text-lg md:text-3xl font-thin text-[#80ff80]" />
              Cable TV
            </div>
            <div className="flex items-center gap-3 text-lg">
              <IoIosWifi className="text-lg md:text-3xl font-thin text-[#80ff80]" />
              Wifi & Internet
            </div>
            <div className="flex items-center gap-3 text-lg">
              <PiHairDryerFill className="text-lg md:text-3xl font-thin text-[#80ff80]" />
              Hair Dryer
            </div>
            <div className="flex items-center gap-3 text-lg">
              <MdTableBar className="text-lg md:text-3xl font-thin text-[#80ff80]" />
              Dressing Table
            </div>
            <div className="flex items-center gap-3 text-lg">
              <CgSmartHomeRefrigerator className="text-lg md:text-3xl font-thin text-[#80ff80]" />
              In-room Refrigerator
            </div>
            <div className="flex items-center gap-3 text-lg">
              <MdOutlineLocalMovies className="text-lg md:text-3xl font-thin text-[#80ff80]" />
              1 Almirah
            </div>
            <div className="flex items-center gap-3 text-lg">
              <MdOutlineBalcony className="text-lg md:text-3xl font-thin text-[#80ff80]" />
              Hill View Balcony
            </div>
            <div className="flex items-center gap-3 text-lg">
              <LuSofa className="text-lg md:text-3xl font-thin text-[#80ff80]" />
              Luxurious Sofa
            </div>
            <div className="flex items-center gap-3 text-lg">
              <MdOutlineRoofing className="text-lg md:text-3xl font-thin text-[#80ff80]" />
              Rooftop Access
            </div>
          </div>
        </div>

        {/* addition service  */}
        <div>
          <h2 className="text-xl md:text-2xl lg:text-4xl font-medium md:font-bold py-6">
            Additional Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className={additionServiceCardDesign}>
              <FaPhoneAlt className="text-[#80ff80]" />
              <h1>Intercom Facility</h1>
            </div>

            <div className={additionServiceCardDesign}>
              <MdElectricBolt className="text-[#80ff80]" />
              <h1>Private Electricity System</h1>
            </div>

            <div className={additionServiceCardDesign}>
              <MdDining className="text-[#80ff80]" />
              <h1>Gourmet Dining</h1>
            </div>

            <div className={additionServiceCardDesign}>
              <GiTowel className="text-[#80ff80]" />
              <h1>Well-Stocked Toiletries</h1>
            </div>

            <div className={additionServiceCardDesign}>
              <PiBowlSteam className="text-[#80ff80]" />
              <h1>Bathroom Geysers</h1>
            </div>

            <div className={additionServiceCardDesign}>
              <FaHandHoldingMedical className="text-[#80ff80]" />
              <h1>24/7 Medical Care</h1>
            </div>

            <div className={additionServiceCardDesign}>
              <MdEmergency className="text-[#80ff80]" />
              <h1>Helipad on Emergency</h1>
            </div>

            <div className={additionServiceCardDesign}>
              <FaBed className="text-[#80ff80]" />
              <h1>Extra Bed Taking Facility Available</h1>
            </div>
          </div>
        </div>
      </div>

      {/* right part  */}
      {/* form item  */}
      <div className=" text-black p-6 w-full px-10 py-12 lg:w-[440px] mx-auto rounded-lg shadow-md flex-1">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold mb-4">RESERVE:</h2>
          <p className="text-lg font-semibold mb-6">
            From <span className="text-[#80ff80]">8,000৳</span> /night
          </p>
        </div>
        <form onSubmit={handleSubmit}>
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
              name="checkIn"
              className={customColor}
              defaultValue={today}
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
              name="checkOut"
              className={customColor}
              defaultValue={today}
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
              onClick={() => setIsChildrenInputVisible(!isChildrenInputVisible)}
              className={customColor}
            >
              Children: {children}
            </button>
            {isChildrenInputVisible && (
              <div className="relative mt-2 w-[250px] bg-[#F8F5F1] border border-collapse rounded-lg p-4">
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
            <select name="rate" className={customColor} onChange={handleChange}>
              <option
                className="bg-black hover:text-blue-500 text-white"
                value=""
              >
                Select one
              </option>
              <option
                className="bg-black hover:text-blue-500 text-white"
                value="regular price1"
              >
                Regular Price1
              </option>
              <option
                className="bg-black hover:text-blue-500 text-white"
                value="regular price2"
              >
                Regular Price2
              </option>
              <option
                className="bg-black hover:text-blue-500 text-white"
                value="regular price3"
              >
                Regular Price3
              </option>
              <option
                className="bg-black hover:text-blue-500 text-white"
                value="regular price4"
              >
                Regular Price4
              </option>
              <option
                className="bg-black hover:text-blue-500 text-white"
                value="regular price5"
              >
                Regular Price5
              </option>
              <option
                className="bg-black hover:text-blue-500 text-white"
                value="regular price6"
              >
                Regular Price6
              </option>
            </select>
          </div>

          {/* Total Cost */}
          <div className={customColor}>
            <p className="text-lg font-semibold">
              Total Cost{" "}
              <span className="text-yellow-500 font-bold float-right">
                8,000৳
              </span>
            </p>
          </div>

          <button
            type="submit"
            className="border border-[#80ff80] text-black mt-4 hover:bg-[#80ff80] w-full hover:text-white py-3 px-5 rounded-lg duration-500"
          >
            Book Your Stay Now
          </button>
        </form>
      </div>
    </div>
    // </div>
  );
};

export default DetailsPage;
