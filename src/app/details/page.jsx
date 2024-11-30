"use client";

import { useEffect, useState } from "react";
import { CiWifiOff, CiWifiOn } from "react-icons/ci";
import { FaHandHoldingMedical, FaPhoneAlt } from "react-icons/fa";
import { FaBath, FaBed } from "react-icons/fa6";
import { FcBusinessman } from "react-icons/fc";
import { GiTowel } from "react-icons/gi";
import { IoIosExpand, IoIosWifi } from "react-icons/io";
import {
  TbAirConditioning,
  TbAirConditioningDisabled,
  TbPool,
  TbPoolOff,
} from "react-icons/tb";
import DetailsRightSide from "../../components/DetailsRightSide";

import { loadStripe } from "@stripe/stripe-js";
import {
  MdDining,
  MdElectricBolt,
  MdEmergency,
  MdOutlineBed,
  MdTableBar,
} from "react-icons/md";
import { PiBowlSteam } from "react-icons/pi";
import SwiperSection from "../../components/Swiper/SwiperSection";
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const DetailsPage = () => {
  const today = new Date().toISOString().split("T")[0];
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const formattedTomorrow = tomorrow.toISOString().split("T")[0];
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [isAdultsInputVisible, setIsAdultsInputVisible] = useState(false);
  const [isChildrenInputVisible, setIsChildrenInputVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(formattedTomorrow); // can not check out in the day of check in
  const [daysBetween, setDaysBetween] = useState(1); // Default to 1 day difference

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

  const handleCheckIn = (e) => {
    const selectedDate = e.target.value;
    // console.log(selectedDate);
    setCheckIn(selectedDate);

    // Automatically adjust check-out if it's earlier than the new check-in
    const nextDay = new Date(selectedDate);
    nextDay.setDate(nextDay.getDate() + 1);
    const formattedNextDay = nextDay.toISOString().split("T")[0];

    if (new Date(checkOut) <= new Date(selectedDate)) {
      setCheckOut(formattedNextDay); //by default set the date next of the arrival date
    }
  };

  // update the state before submitting the form
  useEffect(() => {
    calculateDays(checkIn, checkOut);
  }, [checkIn, checkOut]);

  const handleCheckOut = (e) => {
    const selectedDate = e.target.value;
    if (new Date(selectedDate) > new Date(checkIn)) {
      setCheckOut(selectedDate);
    } else {
      alert("Check-Out date must be after Check-In date.");
    }
  };

  const calculateDays = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    // console.log(start);
    // console.log(end);
    const differenceInTime = endDate - startDate; // Difference in milliseconds
    const differenceInDays = differenceInTime / (1000 * 60 * 60 * 24); // Convert to days
    setDaysBetween(differenceInDays);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    const stripe = await stripePromise;

    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price: fakeData.price,
        daysBetween,
      }),
    });
    const { id } = await response.json();

    const { error } = await stripe.redirectToCheckout({ sessionId: id });
    if (error) {
      console.error("Error redirecting to checkout:", error.message);
    }

    // const session = await response.json();
    // console.log(session);
    // if (session.payment_status === "paid") {
    //   console.log("successful");
    // }

    // if (session.id) {
    //   const { error } = await stripe.redirectToCheckout({
    //     sessionId: session.id,
    //   });
    //   if (error) console.error("Stripe Checkout Error:", error);
    // } else {
    //   console.error("Failed to create session:", session.error);
    // }

    setLoading(false);
  };

  const fakeData = {
    id: 1,
    name: "Paharika Deluxe",
    price: 8000,
    description:
      "A cozy room with mountain views, perfect for couples seeking comfort and relaxation.",
    images: [
      "https://res.cloudinary.com/dpomtzref/image/upload/v1732793699/6cd5da9a0b00f4f5c532427a7fc9e8b8_nhxghi.jpg",
      "https://res.cloudinary.com/dpomtzref/image/upload/v1732793694/c562bbb8819082037042eb6101750ad3_slqypi.jpg",
      "https://res.cloudinary.com/dpomtzref/image/upload/v1732793697/kumarakom-lake-resort_sndrzx.jpg",
    ],
    guest: 2,
    bed: 1,
    bathroom: 1,
    wifi: true,
    size: 352,
    pool: false,
    air_con: true,
  };

  return (
    <div className="w-full ">
      <SwiperSection fakeData={fakeData} />
      <div className="flex flex-col lg:flex-row gap-6 w-[360px] md:w-[700px] lg:w-[1110px] mx-auto  text-black">
        {/* left part   */}
        <div className=" px-4 py-4">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-medium md:font-bold py-6">
            {fakeData.name}
          </h2>
          <p className="text-[#80ff80] text-xs pb-3 text-justify">
            1x Master Bed / Hill View Balcony / Wardrobe / Dressing Table /
            In-room Refrigerator / Hair Dryer / Luxurious Sofa / Cable TV / WiFi
            / Intercom Telephone / Rooftop Access
          </p>
          {/* details  */}
          <div className="grid grid-cols-3 gap-5 py-6 text-sm">
            <div className="flex justify-start items-center gap-3 px-4 w-32">
              <FcBusinessman className="text-2xl" /> {fakeData.guest} guest
            </div>
            <div className="flex justify-start items-center gap-3 px-4 w-32">
              <FaBed className="text-2xl" /> {fakeData.bed} bed
            </div>
            <div className="flex justify-start items-center gap-3 px-4 w-32">
              <FaBath className="text-2xl" />
              {fakeData.bathroom} bath
            </div>
            <div className="flex justify-start items-center gap-3 px-4 w-32">
              <IoIosWifi className="text-2xl" />
              {fakeData.wifi ? "" : "No"} Wifi
            </div>
            <div className="flex justify-start items-center gap-3 px-4 w-32">
              <IoIosExpand className="text-2xl" />
              {fakeData.size} ft<sup>2</sup>
            </div>
          </div>

          <p className="space-y-6 font-light py-6 text-justify">
            <span className="font-semibold text-xl">{fakeData.name}</span>{" "}
            {fakeData.description}
          </p>

          {/* room amenities  */}
          <div>
            <h2 className="text-xl md:text-2xl lg:text-4xl font-medium md:font-bold py-6">
              Room Amenities
            </h2>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <div className="flex items-center gap-3">
                <MdOutlineBed className="text-lg md:text-3xl font-thin text-[#80ff80]" />
                {fakeData.bed} bed
              </div>
              <div className="flex items-center gap-3 text-lg">
                <FaBath className="text-lg md:text-3xl font-thin text-[#80ff80]" />
                {fakeData.bathroom} bathroom
              </div>
              <div className="flex items-center gap-3 text-lg">
                {fakeData.wifi ? (
                  <CiWifiOn className="text-lg md:text-3xl font-thin text-[#80ff80]" />
                ) : (
                  <CiWifiOff className="text-lg md:text-3xl font-thin text-red-500" />
                )}
                Wifi
              </div>
              <div className="flex items-center gap-3 text-lg">
                {fakeData.pool ? (
                  <TbPool className="text-lg md:text-3xl font-thin text-[#80ff80]" />
                ) : (
                  <TbPoolOff className="text-lg md:text-3xl font-thin text-red-500" />
                )}
                Hair Dryer
              </div>
              <div className="flex items-center gap-3 text-lg">
                <MdTableBar className="text-lg md:text-3xl font-thin text-[#80ff80]" />
                Dressing Table
              </div>

              <div className="flex items-center gap-3 text-lg">
                {fakeData.air_con ? (
                  <TbAirConditioning className="text-lg md:text-3xl font-thin text-[#80ff80]" />
                ) : (
                  <TbAirConditioningDisabled className="text-lg md:text-3xl font-thin text-red-500" />
                )}
                air condition
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
        <DetailsRightSide
          fakeData={fakeData}
          handleCheckIn={handleCheckIn}
          handleCheckOut={handleCheckOut}
          handleSubmit={handleSubmit}
          customBtnColor={customBtnColor}
          customColor={customColor}
          checkIn={checkIn}
          checkOut={checkOut}
          adults={adults}
          isAdultsInputVisible={isAdultsInputVisible}
          isChildrenInputVisible={isChildrenInputVisible}
          child={children}
          daysBetween={daysBetween}
        />
      </div>
    </div>
  );
};

export default DetailsPage;
