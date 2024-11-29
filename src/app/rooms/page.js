"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

function Page() {
  const rooms = [
    {
      id: 1,
      name: "Paharika Deluxe",
      price: 8000,
      description: "A cozy room with mountain views, perfect for couples seeking comfort and relaxation.",
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
    },
    {
      id: 2,
      name: "Seaview Suite",
      price: 12000,
      description: "Luxury suite with a private balcony, offering breathtaking views of the ocean and modern amenities.",
      images: [
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793699/6cd5da9a0b00f4f5c532427a7fc9e8b8_nhxghi.jpg",
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793694/c562bbb8819082037042eb6101750ad3_slqypi.jpg",
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793697/kumarakom-lake-resort_sndrzx.jpg",
      ],
      guest: 4,
      bed: 2,
      bathroom: 2,
      wifi: true,
      size: 500,
      pool: true,
      air_con: true,
    },
    {
      id: 3,
      name: "Urban Retreat",
      price: 9000,
      description: "Modern city-view room with sleek interiors and facilities for business or leisure travelers.",
      images: [
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793699/6cd5da9a0b00f4f5c532427a7fc9e8b8_nhxghi.jpg",
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793694/c562bbb8819082037042eb6101750ad3_slqypi.jpg",
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793697/kumarakom-lake-resort_sndrzx.jpg",
      ],
      guest: 2,
      bed: 1,
      bathroom: 1,
      wifi: true,
      size: 400,
      pool: false,
      air_con: true,
    },
    {
      id: 4,
      name: "Family Haven",
      price: 15000,
      description: "Spacious room for families, equipped with extra beds and kid-friendly amenities for a perfect stay.",
      images: [
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793699/6cd5da9a0b00f4f5c532427a7fc9e8b8_nhxghi.jpg",
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793694/c562bbb8819082037042eb6101750ad3_slqypi.jpg",
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793697/kumarakom-lake-resort_sndrzx.jpg",
      ],
      guest: 6,
      bed: 3,
      bathroom: 2,
      wifi: true,
      size: 600,
      pool: true,
      air_con: true,
    },
    {
      id: 5,
      name: "Garden Escape",
      price: 10000,
      description: "Serene garden-facing room with a private patio and luxurious interiors for ultimate tranquility.",
      images: [
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793699/6cd5da9a0b00f4f5c532427a7fc9e8b8_nhxghi.jpg",
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793694/c562bbb8819082037042eb6101750ad3_slqypi.jpg",
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793697/kumarakom-lake-resort_sndrzx.jpg",
      ],
      guest: 3,
      bed: 1,
      bathroom: 1,
      wifi: true,
      size: 420,
      pool: true,
      air_con: true,
    },
    {
      id: 6,
      name: "Royal Suite",
      price: 20000,
      description: "Top-tier suite with premium facilities, king-size bed, jacuzzi, and personalized services for guests.",
      images: [
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793699/6cd5da9a0b00f4f5c532427a7fc9e8b8_nhxghi.jpg",
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793694/c562bbb8819082037042eb6101750ad3_slqypi.jpg",
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793697/kumarakom-lake-resort_sndrzx.jpg",
      ],
      guest: 4,
      bed: 2,
      bathroom: 2,
      wifi: true,
      size: 700,
      pool: true,
      air_con: true,
    },
    {
      id: 7,
      name: "Sunset Loft",
      price: 11000,
      description: "Loft-style room with panoramic sunset views, high ceilings, and modern minimalist decor.",
      images: [
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793699/6cd5da9a0b00f4f5c532427a7fc9e8b8_nhxghi.jpg",
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793694/c562bbb8819082037042eb6101750ad3_slqypi.jpg",
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793697/kumarakom-lake-resort_sndrzx.jpg",
      ],
      guest: 2,
      bed: 1,
      bathroom: 1,
      wifi: true,
      size: 450,
      pool: false,
      air_con: true,
    },
    {
      id: 8,
      name: "Countryside Cabin",
      price: 8500,
      description: "Rustic cabin room offering peaceful countryside views, ideal for nature lovers and adventurers.",
      images: [
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793699/6cd5da9a0b00f4f5c532427a7fc9e8b8_nhxghi.jpg",
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793694/c562bbb8819082037042eb6101750ad3_slqypi.jpg",
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793697/kumarakom-lake-resort_sndrzx.jpg",
      ],
      guest: 2,
      bed: 1,
      bathroom: 1,
      wifi: false,
      size: 350,
      pool: false,
      air_con: false,
    },
    {
      id: 9,
      name: "Skyline Suite",
      price: 14000,
      description: "Luxurious room on the top floor with city skyline views, private lounge, and exclusive services.",
      images: [
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793699/6cd5da9a0b00f4f5c532427a7fc9e8b8_nhxghi.jpg",
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793694/c562bbb8819082037042eb6101750ad3_slqypi.jpg",
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793697/kumarakom-lake-resort_sndrzx.jpg",
      ],
      guest: 4,
      bed: 2,
      bathroom: 2,
      wifi: true,
      size: 600,
      pool: true,
      air_con: true,
    },
    {
      id: 10,
      name: "Budget Stay",
      price: 5000,
      description: "Affordable yet comfortable room with basic amenities for budget-conscious travelers.",
      images: [
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793699/6cd5da9a0b00f4f5c532427a7fc9e8b8_nhxghi.jpg",
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793694/c562bbb8819082037042eb6101750ad3_slqypi.jpg",
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793697/kumarakom-lake-resort_sndrzx.jpg",
      ],
      guest: 2,
      bed: 1,
      bathroom: 1,
      wifi: true,
      size: 300,
      pool: false,
      air_con: false,
    },
    {
      id: 11,
      name: "Tropical Paradise",
      price: 10500,
      description: "Tropical-themed room with vibrant decor, private terrace, and ocean breeze.",
      images: [
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793699/6cd5da9a0b00f4f5c532427a7fc9e8b8_nhxghi.jpg",
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793694/c562bbb8819082037042eb6101750ad3_slqypi.jpg",
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793697/kumarakom-lake-resort_sndrzx.jpg",
      ],
      guest: 3,
      bed: 1,
      bathroom: 1,
      wifi: true,
      size: 450,
      pool: true,
      air_con: true,
    },
    {
      id: 12,
      name: "Luxury Loft",
      price: 13500,
      description: "Elegant loft room with panoramic views, high ceilings, and premium furnishings.",
      images: [
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793699/6cd5da9a0b00f4f5c532427a7fc9e8b8_nhxghi.jpg",
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793694/c562bbb8819082037042eb6101750ad3_slqypi.jpg",
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793697/kumarakom-lake-resort_sndrzx.jpg",
      ],
      guest: 2,
      bed: 1,
      bathroom: 1,
      wifi: true,
      size: 520,
      pool: true,
      air_con: true,
    },
    {
      id: 13,
      name: "Mountain View Cottage",
      price: 9500,
      description: "Charming cottage with a view of the mountains, ideal for nature lovers seeking serenity.",
      images: [
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793699/6cd5da9a0b00f4f5c532427a7fc9e8b8_nhxghi.jpg",
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793694/c562bbb8819082037042eb6101750ad3_slqypi.jpg",
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793697/kumarakom-lake-resort_sndrzx.jpg",
      ],
      guest: 2,
      bed: 1,
      bathroom: 1,
      wifi: true,
      size: 380,
      pool: false,
      air_con: true,
    },
    {
      id: 14,
      name: "City Escape",
      price: 11500,
      description: "Modern city-center room with stunning views, perfect for business or leisure stays.",
      images: [
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793699/6cd5da9a0b00f4f5c532427a7fc9e8b8_nhxghi.jpg",
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793694/c562bbb8819082037042eb6101750ad3_slqypi.jpg",
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793697/kumarakom-lake-resort_sndrzx.jpg",
      ],
      guest: 3,
      bed: 1,
      bathroom: 1,
      wifi: true,
      size: 460,
      pool: false,
      air_con: true,
    },
    {
      id: 15,
      name: "Woodland Retreat",
      price: 9500,
      description: "Cozy woodland retreat with rustic interiors, perfect for a quiet getaway in nature.",
      images: [
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793699/6cd5da9a0b00f4f5c532427a7fc9e8b8_nhxghi.jpg",
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793694/c562bbb8819082037042eb6101750ad3_slqypi.jpg",
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793697/kumarakom-lake-resort_sndrzx.jpg",
      ],
      guest: 2,
      bed: 1,
      bathroom: 1,
      wifi: true,
      size: 370,
      pool: false,
      air_con: false,
    },
    {
      id: 16,
      name: "Exclusive Penthouse",
      price: 25000,
      description: "Top-floor penthouse with a private terrace, jacuzzi, and unparalleled views of the skyline.",
      images: [
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793699/6cd5da9a0b00f4f5c532427a7fc9e8b8_nhxghi.jpg",
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793694/c562bbb8819082037042eb6101750ad3_slqypi.jpg",
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793697/kumarakom-lake-resort_sndrzx.jpg",
      ],
      guest: 4,
      bed: 2,
      bathroom: 2,
      wifi: true,
      size: 750,
      pool: true,
      air_con: true,
    },
    {
      id: 17,
      name: "Oceanfront Haven",
      price: 16000,
      description: "Oceanfront room with breathtaking views and luxurious amenities for a relaxing stay.",
      images: [
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793699/6cd5da9a0b00f4f5c532427a7fc9e8b8_nhxghi.jpg",
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793694/c562bbb8819082037042eb6101750ad3_slqypi.jpg",
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793697/kumarakom-lake-resort_sndrzx.jpg",
      ],
      guest: 3,
      bed: 2,
      bathroom: 2,
      wifi: true,
      size: 600,
      pool: true,
      air_con: true,
    },
    {
      id: 18,
      name: "Lakeview Suite",
      price: 13000,
      description: "Serene suite with beautiful lake views, ideal for those seeking peace and luxury.",
      images: [
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793699/6cd5da9a0b00f4f5c532427a7fc9e8b8_nhxghi.jpg",
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793694/c562bbb8819082037042eb6101750ad3_slqypi.jpg",
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793697/kumarakom-lake-resort_sndrzx.jpg",
      ],
      guest: 4,
      bed: 2,
      bathroom: 2,
      wifi: true,
      size: 650,
      pool: true,
      air_con: true,
    },
    {
      id: 19,
      name: "Desert Oasis",
      price: 12500,
      description: "Desert-inspired room with earthy tones, offering a tranquil environment and stunning views.",
      images: [
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793699/6cd5da9a0b00f4f5c532427a7fc9e8b8_nhxghi.jpg",
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793694/c562bbb8819082037042eb6101750ad3_slqypi.jpg",
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793697/kumarakom-lake-resort_sndrzx.jpg",
      ],
      guest: 2,
      bed: 1,
      bathroom: 1,
      wifi: true,
      size: 380,
      pool: false,
      air_con: true,
    },
    {
      id: 20,
      name: "Cottage by the Sea",
      price: 14000,
      description: "Charming seaside cottage with a private balcony, perfect for a peaceful retreat.",
      images: [
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793699/6cd5da9a0b00f4f5c532427a7fc9e8b8_nhxghi.jpg",
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793694/c562bbb8819082037042eb6101750ad3_slqypi.jpg",
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793697/kumarakom-lake-resort_sndrzx.jpg",
      ],
      guest: 2,
      bed: 1,
      bathroom: 1,
      wifi: true,
      size: 400,
      pool: false,
      air_con: true,
    },
    {
      id: 21,
      name: "Ocean Breeze Suite",
      price: 13000,
      description: "A luxurious suite with stunning ocean views, perfect for a romantic getaway.",
      images: [
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793699/6cd5da9a0b00f4f5c532427a7fc9e8b8_nhxghi.jpg",
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793694/c562bbb8819082037042eb6101750ad3_slqypi.jpg",
      ],
      guest: 2,
      bed: 1,
      bathroom: 1,
      wifi: true,
      size: 450,
      pool: true,
      air_con: true,
    },
    {
      id: 22,
      name: "City Skyline Retreat",
      price: 12000,
      description: "Stylish urban room with breathtaking skyline views and modern amenities.",
      images: [
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793699/6cd5da9a0b00f4f5c532427a7fc9e8b8_nhxghi.jpg",
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793694/c562bbb8819082037042eb6101750ad3_slqypi.jpg",
      ],
      guest: 3,
      bed: 2,
      bathroom: 1,
      wifi: true,
      size: 500,
      pool: false,
      air_con: true,
    },
    {
      id: 23,
      name: "Forest Escape",
      price: 8500,
      description: "A secluded room surrounded by nature, offering peace and tranquility for nature lovers.",
      images: [
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793699/6cd5da9a0b00f4f5c532427a7fc9e8b8_nhxghi.jpg",
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793694/c562bbb8819082037042eb6101750ad3_slqypi.jpg",
      ],
      guest: 2,
      bed: 1,
      bathroom: 1,
      wifi: false,
      size: 350,
      pool: true,
      air_con: false,
    },
    {
      id: 24,
      name: "Luxury Villa",
      price: 20000,
      description: "An exclusive villa with private amenities, including a pool and garden, ideal for a luxury experience.",
      images: [
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793699/6cd5da9a0b00f4f5c532427a7fc9e8b8_nhxghi.jpg",
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793694/c562bbb8819082037042eb6101750ad3_slqypi.jpg",
      ],
      guest: 6,
      bed: 3,
      bathroom: 3,
      wifi: true,
      size: 700,
      pool: true,
      air_con: true,
    },
    {
      id: 25,
      name: "Countryside Retreat",
      price: 9500,
      description: "A peaceful countryside retreat with charming rustic interiors and access to nature trails.",
      images: [
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793699/6cd5da9a0b00f4f5c532427a7fc9e8b8_nhxghi.jpg",
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793694/c562bbb8819082037042eb6101750ad3_slqypi.jpg",
      ],
      guest: 4,
      bed: 2,
      bathroom: 2,
      wifi: true,
      size: 500,
      pool: false,
      air_con: true,
    },
    {
      id: 26,
      name: "Royal Garden Suite",
      price: 15000,
      description: "A lavish suite surrounded by lush gardens, offering supreme luxury and relaxation.",
      images: [
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793699/6cd5da9a0b00f4f5c532427a7fc9e8b8_nhxghi.jpg",
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793694/c562bbb8819082037042eb6101750ad3_slqypi.jpg",
      ],
      guest: 4,
      bed: 2,
      bathroom: 2,
      wifi: true,
      size: 600,
      pool: true,
      air_con: true,
    },
    {
      id: 27,
      name: "Skyline Penthouse",
      price: 22000,
      description: "A penthouse suite with panoramic views of the city skyline, offering unparalleled luxury.",
      images: [
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793699/6cd5da9a0b00f4f5c532427a7fc9e8b8_nhxghi.jpg",
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793694/c562bbb8819082037042eb6101750ad3_slqypi.jpg",
      ],
      guest: 5,
      bed: 3,
      bathroom: 2,
      wifi: true,
      size: 750,
      pool: true,
      air_con: true,
    },
    {
      id: 28,
      name: "Secluded Chalet",
      price: 11000,
      description: "A charming, remote chalet ideal for those looking to escape the hustle and bustle.",
      images: [
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793699/6cd5da9a0b00f4f5c532427a7fc9e8b8_nhxghi.jpg",
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793694/c562bbb8819082037042eb6101750ad3_slqypi.jpg",
      ],
      guest: 2,
      bed: 1,
      bathroom: 1,
      wifi: false,
      size: 350,
      pool: false,
      air_con: false,
    },
    {
      id: 29,
      name: "Urban Loft",
      price: 13500,
      description: "Modern loft-style room with high ceilings and a spacious feel, ideal for city explorers.",
      images: [
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793699/6cd5da9a0b00f4f5c532427a7fc9e8b8_nhxghi.jpg",
        "https://res.cloudinary.com/dpomtzref/image/upload/v1732793694/c562bbb8819082037042eb6101750ad3_slqypi.jpg",
      ],
      guest: 2,
      bed: 1,
      bathroom: 1,
      wifi: true,
      size: 400,
      pool: false,
      air_con: true,
    }
  ];
  

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
      filtered = filtered.filter((room) => room.guest === parseInt(guestFilter));
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
          <h1 className="text-5xl font-semibold text-center">Explore Our Premium Rooms</h1>
          <p className="text-lg mt-2">Experience luxury and comfort like never before</p>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col pb-10">
        {/* Sidebar Filters */}
        <div className="lg:w-1/4 w-full lg:sticky top-4 bg-[#111] text-white p-6 rounded-lg shadow-md">
          <h2 className="font-semibold text-2xl mb-6 text-center text-gray-300">Filter Rooms</h2>

          <div className="mb-6">
            <label className="block text-gray-400 text-sm mb-2">Number of Beds</label>
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
            <label className="block text-gray-400 text-sm mb-2">Number of Guests</label>
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
            <label className="block text-gray-400 text-sm mb-2">Price (Up to)</label>
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
            <label className="block text-gray-400 text-sm mb-2">Air Conditioning</label>
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
