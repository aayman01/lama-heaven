"use client";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import useAxiosPublic from "../../services/useAxiosPublic";

function Page() {
  const axiosPublic = useAxiosPublic();
  const {
    data: rooms = [],
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["roomData"],
    queryFn: async () => {
      const response = await axiosPublic.get('/api/get-room');
      return response.data;
    },
  });
  console.log("rooms" ,rooms)
  const [bedFilter, setBedFilter] = useState("");
  const [guestFilter, setGuestFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [acFilter, setAcFilter] = useState("");
  const [filteredRooms, setFilteredRooms] = useState(rooms);
  const [currentPage, setCurrentPage] = useState(1);
  const roomsPerPage = 6;

 

  const calculateFilteredRooms = () => {
    let filtered = rooms;

    if (bedFilter) {
      filtered = filtered.filter((room) => room.bed === parseInt(bedFilter));
    }
    if (guestFilter) {
      filtered = filtered.filter(
        (room) => room.guest === parseInt(guestFilter)
      );
    }
    if (priceFilter) {
      filtered = filtered.filter((room) => room.price <= parseInt(priceFilter));
    }
    if (acFilter) {
      const isAc = acFilter === "AC";
      filtered = filtered.filter((room) => room.air_con === isAc);
    }

    return filtered;
  };

  useEffect(() => {
    const updatedRooms = calculateFilteredRooms();
    setFilteredRooms(updatedRooms);
    setCurrentPage(1);
  }, [bedFilter, guestFilter, priceFilter, acFilter]);

  const handleResetFilters = () => {
    setBedFilter("");
    setGuestFilter("");
    setPriceFilter("");
    setAcFilter("");
  };

  const paginateRooms = () => {
    const startIndex = (currentPage - 1) * roomsPerPage;
    return filteredRooms.slice(startIndex, startIndex + roomsPerPage);
  };

  const totalPages = Math.ceil(filteredRooms.length / roomsPerPage);

  if (isLoading){
    <div className="min-h-screen flex items-center justify-center">
      Loading...
    </div>;
  }
    return (
      <div className="bg-black text-white min-h-screen">
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

        <div className="flex lg:flex-row flex-col pb-10">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4 w-full lg:sticky top-4 bg-[#111] text-white p-6 rounded-lg shadow-md">
            <h2 className="font-semibold text-2xl mb-6 text-center text-gray-300">
              Filter Rooms
            </h2>

            <div className="mb-6">
              <label className="block text-gray-400 text-sm mb-2">
                Number of Beds
              </label>
              <select
                value={bedFilter}
                onChange={(e) => setBedFilter(e.target.value)}
                className="w-full bg-[#222] text-white p-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#00b300]"
              >
                <option value="">Select Beds</option>
                <option value="1">1 Bed</option>
                <option value="2">2 Beds</option>
                <option value="3">3 Beds</option>
                <option value="4">4 Beds</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-gray-400 text-sm mb-2">
                Number of Guests
              </label>
              <select
                value={guestFilter}
                onChange={(e) => setGuestFilter(e.target.value)}
                className="w-full bg-[#222] text-white p-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#00b300]"
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
              <label className="block text-gray-400 text-sm mb-2">
                Price (Up to)
              </label>
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="w-full bg-[#222] text-white p-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#00b300]"
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
                className="w-full bg-[#222] text-white p-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#00b300]"
              >
                <option value="">Select</option>
                <option value="AC">AC</option>
                <option value="Non-AC">Non-AC</option>
              </select>
            </div>

            <button
              onClick={handleResetFilters}
              className="w-full bg-red-600 text-white p-3 rounded-md mt-4 font-semibold hover:bg-red-700"
            >
              Reset Filters
            </button>
          </div>

          {/* Room Cards */}
          <div className="lg:w-3/4 w-full p-6">
            {filteredRooms.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginateRooms().map((room) => (
                  <div
                    key={room.id}
                    className="bg-gradient-to-b from-[#111] to-[#222] shadow-lg rounded-3xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                  >
                    <div className="relative">
                      <Image
                        src={room.images[0]}
                        alt={room.name}
                        width={400}
                        height={280}
                        className="w-full h-[280px] object-cover rounded-t-3xl"
                      />
                      <div className="absolute top-4 left-4 bg-[#00b300] text-white px-4 py-1 rounded-lg font-bold text-lg">
                        ৳ {room.price}
                      </div>
                    </div>

                    <div className="p-6">
                      <h2 className="text-2xl font-bold">{room.name}</h2>
                      <p className="text-gray-400 mt-2">{room.description}</p>
                      <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-300">
                        <div>Guests: {room.guest}</div>
                        <div>Beds: {room.bed}</div>
                        <div>AC: {room.air_con ? "Yes" : "No"}</div>
                      </div>
                      <div className="mt-4 flex justify-between">
                        <button className="bg-[#00b300] px-4 py-2 text-white rounded-md hover:bg-[#008000]">
                          Book Now
                        </button>
                        <button className="bg-[#222] px-4 py-2 text-gray-400 rounded-md hover:text-white">
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-400 text-2xl mt-12">
                No rooms match your filters.
              </div>
            )}

            {/* Pagination */}
            <div className="flex justify-center items-center mt-8 gap-4">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
                className={`px-4 py-2 rounded-md text-white ${
                  currentPage === 1
                    ? "bg-[#222] opacity-50"
                    : "bg-[#00b300] hover:bg-[#008000]"
                }`}
              >
                Previous
              </button>
              <span className="text-white">
                Page {currentPage} of {totalPages}
              </span>
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className={`px-4 py-2 rounded-md text-white ${
                  currentPage === totalPages
                    ? "bg-[#222] opacity-50"
                    : "bg-[#00b300] hover:bg-[#008000]"
                }`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Page;
