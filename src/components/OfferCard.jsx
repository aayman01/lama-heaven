import Image from "next/image";
import Link from "next/link";
import image1 from "/public/1.png";
const OfferCard = () => {
  return (
    <div className="group text-black border-2 border-secondary p-3 rounded-lg">
      <div className="overflow-hidden">
        <Image
          src={image1}
          width={360}
          height={400}
          alt="room image"
          className=" transform transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <h2 className="mt-9 text-xl font-semibold">
        Up to 35% savings on Club rooms and Suites
      </h2>
      <ul className="my-6 space-y-2">
        <li>Luxaries condition</li>
        <li>3 Adults & 2 Children size</li>
        <li>Sea view side</li>
      </ul>
      <Link
        href={"/details"}
        className="w-full py-2 flex justify-center items-center border border-[#009DFF] hover:bg-[#009DFF] text-[#009DFF] hover:text-white"
      >
        Book Now
      </Link>
    </div>
  );
};

export default OfferCard;
