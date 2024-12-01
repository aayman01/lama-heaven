import AboutSection from "@/components/About";
import DeliciousFood from "@/components/DeliciousFood";
import FeaturedRooms from "@/components/FeaturedRooms";
import Faq from "@/components/Faq";
import OfferCard from "@/components/OfferCard";
import Banner from "@/components/shared/Banner";
import React from "react";


export default async function HomePage() {

  return (
    <div>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto sm:px-4">
        <AboutSection />
        <div className="w-[1110px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {[1, 2, 3].map((id) => (
            <OfferCard key={id} id={id} />
          ))}
        </div>
        <DeliciousFood />

        <FeaturedRooms></FeaturedRooms>
        <Faq></Faq>
      </div>
    </div>
  );
}

