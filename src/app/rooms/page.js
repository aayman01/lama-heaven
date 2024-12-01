"use client";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

function Page() {
  const [bedFilter, setBedFilter] = useState("");
  const [guestFilter, setGuestFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [acFilter, setAcFilter] = useState("");

  const fetchRooms = async () => {
    const params = {
      bedFilter,
      guestFilter,
      priceFilter,
      acFilter,
    };

    const queryString = new URLSearchParams(params).toString();
    const response = await axios.get(`/api/get-room?${queryString}`);
    return response.data;
  };

  const { data: rooms = [], isLoading } = useQuery({
    queryKey: ["roomData", bedFilter, guestFilter, priceFilter, acFilter],
    queryFn: fetchRooms,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const roomsPerPage = 6;

  const paginateRooms = () => {
    const startIndex = (currentPage - 1) * roomsPerPage;
    return rooms.slice(startIndex, startIndex + roomsPerPage);
  };

  // const totalPages = Math.ceil(rooms.length / roomsPerPage);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-white text-white min-h-screen">
      <div className="relative">
        <Image
          className="w-full h-[60vh] object-cover"
          src="/akashlina-the-resort_enhanced.jpg"
          height={500}
          width={1200}
          alt="Banner"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-5xl font-semibold text-center">
            Explore Our Premium Rooms
          </h1>
          <p className="text-lg mt-2">
            Experience luxury and comfort like never before
          </p>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col pb-10 mt-5 px-2">
        {/* Sidebar Filters */}
        <div className="lg:w-1/4 w-full lg:sticky top-4 bg-gray-200 text-white p-6 rounded-lg shadow-lg">
          <h2 className="font-semibold text-2xl mb-6 text-center text-black">
            Filter Rooms
          </h2>

          <div className="mb-6">
            <label className="block text-gray-500 text-sm mb-2">
              Number of Beds
            </label>
            <select
              value={bedFilter}
              onChange={(e) => setBedFilter(e.target.value)}
              className="w-full bg-gray-300 text-black p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b300]"
            >
              <option value="">Select Beds</option>
              <option value="1">1 Bed</option>
              <option value="2">2 Beds</option>
              <option value="3">3 Beds</option>
              <option value="4">4 Beds</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-gray-500 text-sm mb-2">
              Number of Guests
            </label>
            <select
              value={guestFilter}
              onChange={(e) => setGuestFilter(e.target.value)}
              className="w-full bg-gray-300 text-black p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b300]"
            >
              <option value="">Select Guests</option>
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="6">6 Guests</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-gray-500 text-sm mb-2">
              Price (Up to)
            </label>
            <select
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
              className="w-full bg-gray-300 text-black p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b300]"
            >
              <option value="">Select Price</option>
              <option value="5000">৳ 5000</option>
              <option value="6000">৳ 6000</option>
              <option value="7000">৳ 7000</option>
              <option value="8000">৳ 8000</option>
              <option value="9000">৳ 9000</option>
              <option value="10000">৳ 10000</option>
              <option value="11000">৳ 11000</option>
              <option value="12000">৳ 12000</option>
              <option value="13000">৳ 13000</option>
              <option value="14000">৳ 14000</option>
              <option value="15000">৳ 15000</option>
              <option value="16000">৳ 16000</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-gray-400 text-sm mb-2">
              Air Conditioning
            </label>
            <select
              value={acFilter}
              onChange={(e) => setAcFilter(e.target.value)}
              className="w-full bg-gray-300 text-black p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b300]"
            >
              <option value="">Select</option>
              <option value="AC">AC</option>
              <option value="Non-AC">Non-AC</option>
            </select>
          </div>

          <button
            onClick={() => {
              setBedFilter("");
              setGuestFilter("");
              setPriceFilter("");
              setAcFilter("");
            }}
            className="w-full bg-[#00b300] px-4 py-2 text-white rounded-md hover:bg-[#008000]"
          >
            Reset Filters
          </button>
        </div>

        {/* Room Cards */}
        <div className="lg:w-3/4 w-full p-6">
          {rooms.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginateRooms().map((room) => (
                  <div
                    key={room._id}
                    className="bg-white shadow-lg rounded-3xl overflow-hidden"
                  >
                    <Image
                      src={room.images[0]}
                      alt={room.name}
                      width={400}
                      height={280}
                      className="w-full h-[280px] object-cover"
                    />
                    <div className="p-6">
                      <h2 className="text-2xl font-bold text-black">
                        {room.name}
                      </h2>
                      <p className="text-gray-400 mt-2">{room.description.slice(0,80)}...</p>
                      <div className="mt-4 flex gap-4 text-sm text-gray-500">
                        <div>Guests: {room.guest}</div>
                        <div>Beds: {room.bed}</div>
                        <div>AC: {room.air_con ? "Yes" : "No"}</div>
                      </div>
                      <div className="mt-4 flex justify-end">
                        {/* <button className="bg-[#00b300] px-4 py-2 text-white rounded-md hover:bg-[#008000]">
                          Book Now
                        </button> */}
                        <Link href={`/details/${room._id}}`}>
                          <button className="bg-[#00b300] px-4 py-2 text-white rounded-md hover:bg-[#008000]">
                            Details
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center items-center mt-6">
                {Array.from(
                  { length: Math.ceil(rooms.length / roomsPerPage) },
                  (_, index) => (
                    <button
                      key={index}
                      className={`px-4 py-2 mx-1 ${
                        currentPage === index + 1
                          ? "bg-green-500 text-white"
                          : "bg-gray-300 text-black"
                      } rounded`}
                      onClick={() => setCurrentPage(index + 1)}
                    >
                      {index + 1}
                    </button>
                  )
                )}
              </div>
            </>
          ) : (
            <div className="text-black">No rooms found</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
