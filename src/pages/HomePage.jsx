import OfferCard from '@/components/OfferCard'
import Banner from '@/components/shared/Banner'
import Image from 'next/image'
import React from 'react'

export default function HomePage() {
  return (
    <div>

        <Banner></Banner>

        <div className="w-[1110px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {[1, 2, 3].map((id) => (
          <OfferCard key={id} id={id} />
        ))}
      </div>

    </div>
  )
}