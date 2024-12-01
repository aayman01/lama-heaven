import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <section className="bg-secondary h-screen flex">
      <div className="flex flex-col gap-3 text-center md:text-start">
        <h1 className="md:text-5xl text-3xl font-black uppercase text-white">
          Opps! Page Not found
        </h1>
        <p className=" text-gray-400 text-lg">
          Please try again with actual route or refresh the page
        </p>

        <Link href="/">
          <button className="w-fit">
            Back home
          </button>
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
