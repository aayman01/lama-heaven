import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="w-11/12 mx-auto p-8 lg:p-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Address */}
          <div className="flex flex-col gap-4">
            <h2 className="text-lg lg:text-xl font-semibold mb-2">Address</h2>
            <div className="text-sm space-y-1">
              <p>200, Green road, Mongla,</p>
              <p>New York City, USA</p>
            </div>
            <Link
              className="text-slate-400 border-b-2 border-[#009DFF] hover:text-[#009DFF] transition-colors duration-200"
              href="/"
            >
              Get direction
            </Link>
          </div>

          {/* Reservation */}
          <div className="flex flex-col gap-4">
            <h2 className="text-lg lg:text-xl font-semibold mb-2">Reservation</h2>
            <div className="text-sm space-y-1">
              <p>+10 367 267 2678</p>
              <p>reservation@montana.com</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h2 className="text-lg lg:text-xl font-semibold mb-2">Navigation</h2>
            <div className="flex flex-col gap-3">
              <Link className="text-gray-400 hover:text-[#009DFF] transition-colors duration-200" href="/">
                Home
              </Link>
              <Link className="text-gray-400 hover:text-[#009DFF] transition-colors duration-200" href="/">
                Rooms
              </Link>
              <Link className="text-gray-400 hover:text-[#009DFF] transition-colors duration-200" href="/">
                About
              </Link>
              <Link className="text-gray-400 hover:text-[#009DFF] transition-colors duration-200" href="/">
                News
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4">
            <h2 className="text-lg lg:text-xl font-semibold mb-2">Newsletter</h2>
            <div className="flex flex-col sm:flex-row items-stretch gap-3">
              <input
                className="flex-1 py-2 px-3 text-sm placeholder:text-stone-400 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#009DFF] rounded"
                type="email"
                placeholder="Enter your email"
              />
              <button className="py-2 px-4 text-sm bg-[#009DFF] text-white rounded hover:bg-[#007ACC] transition-all duration-200">
                Sign up
              </button>
            </div>
            <p className="text-sm text-gray-400">Subscribe to our newsletter to get updates</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
