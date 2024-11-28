"use client";
import Image from "next/image";
import SocialLogin from "../../components/shared/SocialLogin";
// import { doCredentialLogin } from "../actions";
import { useRouter } from "next/navigation";
import {doCredentialLogin} from "../actions/index"
import { useState } from "react";


const LoginPage = () => {
  const router = useRouter();
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      const response = await doCredentialLogin(formData)
      if(response?.error){
        setError(response?.error.message)
      }else{
        router.push('/')
      }
    } catch (error) {
      console.error(error);
      setError("Check your credentials")
    }
  };

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
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-6 md:px-10 py-10">
        <h1 className="text-2xl md:text-3xl font-bold mb-3 text-black">
          LamaHeaven
        </h1>
        <h2 className="text-lg md:text-xl mb-4 text-black font-bold">Log in</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-xs md:max-w-sm">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-1 text-black"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-3 py-2 border rounded-lg text-black"
              placeholder="Your Email"
              required
            />
            <p className="text-sm text-red-500">{error}</p>
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
              name="password"
              className="w-full px-3 py-2 border rounded-lg text-black"
              placeholder="Your Password"
              required
            />
            <p className="text-sm text-red-500">{error}</p>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-primary text-white rounded-lg font-bold hover:bg-secondary hover:text-white hover:border-white border-2 border-primary"
          >
            Log In
          </button>
        </form>

        <p className="mt-4 text-gray-400">
          Don’t have an account?{" "}
          <a href="/sign-up" className="text-primary font-medium">
            Sign up
          </a>
        </p>
        <p>- or -</p>
        <SocialLogin />
      </div>
    </div>
  );
};

export default LoginPage;
