"use client";
import { useState } from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-secondary">
      {/* Left side */}
      <div className="w-full md:w-1/2">
        <Image
          width={800}
          height={400}
          src="/assets/login5.jpg"
          className="w-full h-60 md:h-full object-cover"
          alt="Login Image"
        />
      </div>

      {/* Right side */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-6 md:px-10 py-16">
        <h1 className="text-2xl md:text-3xl font-bold mb-3 text-black">
          LamaHeaven
        </h1>
        <h2 className="text-lg md:text-xl mb-4 text-black font-bold">Log In</h2>
        {/* Form */}
        <form className="w-full max-w-xs md:max-w-sm">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-1 text-black"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg text-black"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-1 text-black"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg text-black"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1 text-black"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg text-black"
              placeholder="Your Password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-primary text-white rounded-lg font-bold hover:bg-secondary hover:text-white hover:border-white border-2 border-primary"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-black font-medium">You can also sign in with</p>
        <FcGoogle className="text-3xl" />
      </div>
    </div>
  );
};

export default SignUp;
