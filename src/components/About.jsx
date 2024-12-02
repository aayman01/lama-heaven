import Image from 'next/image';
import React from 'react'

export default function AboutSection() {
  return (
    <div className="bg-white">
      <div className="flex items-center justify-center pt-28 pb-36 ">
        <div>
          <h3 className="text-[#00b300] font-light mb-5">About Us</h3>
          <h1 className="text-5xl font-thin text-black">
            A Luxuries Hotel <br />
            with Nature
          </h1>
          <p className="mt-5 text-gray-500 font-light">
            Suscipit libero pretium nullam potenti. Interdum, blandit <br />
            phasellus consectetuer dolor ornare dapibus enim ut <br />
            tincidunt rhoncus tellus sollicitudin pede nam maecenas,
            <br />
            dolor sem. Neque sollicitudin enim. Dapibus lorem feugiat <br />
            facilisi faucibus et. Rhoncus.
          </p>
          <h3 className="mt-10 underline text-gray-500">Learn More</h3>
        </div>
        <div className="ml-20">
          <Image
            width={200}
            height={150}
            src="https://themewagon.github.io/montana/img/about/about_1.png"
            alt=""
          />
        </div>

        <div className="mt-10 ml-3">
          <Image
            width={200}
            height={150}
            src="https://themewagon.github.io/montana/img/about/about_2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
