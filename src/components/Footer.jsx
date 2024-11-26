import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="w-11/12 md:w-[700px] lg:w-[1110px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto p-14 md:py-36">
        {/* address  */}
        <div className="flex flex-col gap-6">
          <h2 className="text-xl mb-4">Address</h2>
          <div className="space-y-0 text-sm">
            <h2>200, Green road, Mongla,</h2>
            <h2>New Yor City USA</h2>
          </div>
          <Link
            className="text-slate-600 border-b-2 border-[#009DFF] hover:text-[#009DFF] w-28"
            href={"/"}
          >
            Get direction
          </Link>
        </div>
        {/* reservation  */}
        <div className="flex flex-col gap-6">
          <h2 className="text-xl mb-4">Reservation</h2>
          <div className="space-y-0 text-sm">
            <h2>+10 367 267 2678</h2>
            <h2>reservation@montana.com</h2>
          </div>
        </div>
        {/* navigation  */}
        <div className="flex flex-col gap-6">
          <h2 className="text-xl mb-4">Navigation</h2>
          <div className="flex flex-col gap-5">
            <Link className="text-gray-500 hover:text-[#009DFF]" href={"/"}>
              Home
            </Link>
            <Link className="text-gray-500 hover:text-[#009DFF]" href={"/"}>
              Rooms
            </Link>
            <Link className="text-gray-500 hover:text-[#009DFF]" href={"/"}>
              About
            </Link>
            <Link className="text-gray-500 hover:text-[#009DFF]" href={"/"}>
              News
            </Link>
          </div>
        </div>
        {/* newsletter  */}
        <div className="flex flex-col gap-6">
          <h2 className="text-xl mb-4">Newsletter</h2>
          <div className="flex justify-normal">
            <input
              className="py-2 px-2 placeholder:text-stone-600"
              type="text"
              placeholder="Enter your email"
            />
            <button className="py-2 text-white bg-[#009DFF] px-2 w-28">
              Sign up
            </button>
          </div>
          <p>Subscribe newsletter to get updates</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
