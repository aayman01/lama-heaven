'use client'
import React from 'react';
import Image  from "next/image";
import useAxiosPublic from "../../services/useAxiosPublic"
import { useSession } from 'next-auth/react';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import Navbar from '../../components/shared/Navbar';


const UserProfile = () => {
  const axiosPublic = useAxiosPublic();
  const session = useSession();
  const userEmail = session?.data?.user?.email;
  // console.log("email",userEmail)


  const {
    data: userdata, 
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["userdata",userEmail],
    queryFn: async () => {
      const response = await axiosPublic.get(`/api/specific-user/${userEmail}`);
      return response.data;
    },
  });

  // console.log(userdata)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value
        const email = form.email.value;
        const address = form.address.value;

        const updatedData = {
          name,
          email,
          address,
        };
        console.log(updatedData)
        await axiosPublic.patch(`/api/update-user/${userdata?._id}`,updatedData)
        .then((res) => {
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              title: "Success!",
              text: "User Info Updated Successfully",
              icon: "success",
            });
            refetch();
          }
        })
        .catch(err => {
          // console.log(err)
        })

    }
    if (isFetching) {
      <div className="min-h-screen flex items-center justify-center">
        ...Loading
      </div>;
    }
    if(isLoading){
      <div className="min-h-screen flex items-center justify-center">...Loading</div>;
    }

    return (
      <div>
        <Navbar/>
        <div className="min-h-screen bg-gray-100 flex flex-col items-center mt-9">
          <div className="w-full max-w-3xl bg-white rounded-lg shadow-md mt-10">
            {/* Header Section */}
            <div className="relative bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 h-32 rounded-t-lg">
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
                <Image
                  width={100}
                  height={100}
                  src="https://via.placeholder.com/100"
                  alt="Profile"
                  className="w-20 h-20 rounded-full border-4 border-blue-400"
                />
              </div>
            </div>

            {/* Profile Form */}
            <div className="px-6 py-10">
              <h2 className="text-xl font-semibold text-gray-800 text-center">
                Profile
              </h2>
              <p className="text-center text-gray-500 mb-6">
                Update your photo and personal details
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Your Name:
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder={userdata?.name}
                    defaultValue={userdata?.name}
                    className="p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Your Email:
                  </label>
                  <input
                    name="email"
                    type="text"
                    placeholder={userdata?.email}
                    defaultValue={userdata?.email}
                    className="p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                {/* Profile Photo */}
                {/* <div>
                <label className="block text-sm font-medium text-gray-700">
                  Your Photo
                </label>
                <div className="mt-2 flex items-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <button
                    type="button"
                    className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Update
                  </button>
                </div>
              </div> */}

                {/* Bio */}
                <div>
                  <label
                    htmlFor="bio"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Address:
                  </label>
                  <textarea
                    id="bio"
                    rows="3"
                    name="address"
                    value={userdata?.address}
                    placeholder="Write your address"
                    className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 sm:text-sm"
                  ></textarea>
                </div>

                {/* Save Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-white focus:outline-none focus:ring-2 hover:text-green-500 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default UserProfile;