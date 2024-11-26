"use client";
import { useState } from "react";
import Image from "next/image";

const SignUp = () => {
  const[name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex min-h-screen">
      {/* Left side */}
      <div className="w-1/2">
        <Image
          width={800}
          height={400}
          src="/assets/login5.jpg"
          className="w-full h-full object-cover"
          alt="Login Image"
        ></Image>
      </div>

      <div className="w-1/2 flex flex-col items-center justify-center bg-white px-10">
        <h1 className="text-3xl font-bold mb-3 text-black">LamaHeaven</h1>
        <h2 className="text-xl mb-4 text-black font-bold">Log In</h2>

        {/* Form */}
        <form className="w-full max-w-sm">
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
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg font-bold hover:bg-white hover:text-blue-500 hover:border-blue-500 border-2"
          >
            Log In
          </button>
        </form>

        <p className="mt-4 text-gray-400">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-500">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
