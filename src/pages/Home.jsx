import AboutSection from "@/components/About";
import DeliciousFood from "@/components/DeliciousFood";
import FeaturedRooms from "@/components/FeaturedRooms";
import OfferCard from "@/components/OfferCard";
import Banner from "@/components/shared/Banner";
import React from "react";
import Faq from "../components/Faq"


export default async function Home() {

  return (
    <div>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto sm:px-4">
        <AboutSection />
        <div className="text-3xl font-bold text-center mb-16">Offered Rooms</div>
        {/* <div className="w-[1110px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {[1, 2, 3].map((id) => (
            <OfferCard key={id} id={id} />
          ))}
        </div> */}
        <DeliciousFood />
        <FeaturedRooms></FeaturedRooms>
        <Faq></Faq>
      </div>
    </div>
  );
}

