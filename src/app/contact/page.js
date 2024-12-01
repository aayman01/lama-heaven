"use client";

import Footer from "../../components/Footer";

const contact = () => {
    return (
        <div>
            <div>
                <div
                    className="relative w-full h-[500px] flex items-center justify-center text-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1500622944204-b135684e99fd?q=80&w=2061&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                    <div className="relative z-10 text-white p-6 sm:p-8 lg:p-10">
                        <h1 className="text-5xl sm:text-4xl lg:text-5xl font-extrabold mb-2">
                            Contact Us
                        </h1>
                        <p className="text-xl sm:text-lg lg:text-xl">
                            Get in touch with us for any inquiries.
                        </p>
                    </div>
                </div>
                <div className="absolute top-[420px] left-0 right-0 z-20 flex justify-center space-x-6">
                    <div className="rounded-lg text-center w-[260px] h-[150px] bg-white shadow-xl shadow-slate-500">
                        <h1 className="mt-12 text-blue-900 text-xl font-semibold">Email us</h1>
                        <h1 className="text-base font-normal">info@lamaheaven.com</h1>
                    </div>
                    <div className="rounded-lg text-center w-[260px] h-[150px] bg-white shadow-xl shadow-slate-500">
                        <h1 className="mt-12 text-blue-900 text-xl font-semibold">Our address</h1>
                        <h1 className="text-base font-normal">Dhaka, Bangladesh</h1>
                    </div>
                    <div className="rounded-lg text-center w-[260px] h-[150px] bg-white shadow-xl shadow-slate-500">
                        <h1 className="mt-12 text-blue-900 text-xl font-semibold">Opening Hours</h1>
                        <h1 className="text-base font-normal">Mon-Sun: 8 AM - 7 PM</h1>
                    </div>
                    <div className="rounded-lg text-center w-[260px] h-[150px] bg-white shadow-xl shadow-slate-500">
                        <h1 className="mt-12 text-blue-900 text-xl font-semibold">Contact Phone</h1>
                        <h1 className="text-base font-normal">+880 1234 567890</h1>
                    </div>
                </div>
            </div>
            <div className="bg-slate-100 pb-20 justify-center">
                <div>
                    <h1 className="text-4xl font-bold pt-40 text-center">Get In Touch</h1>
                </div>
                <div className="mt-16">
                    <div className="pt-10 pl-10 w-[615px] h-[500px] bg-white shadow-lg shadow-slate-400 rounded-lg ml-10">
                        <div className="flex mb-5 ">
                            <div className="mr-5  items-center gap-2 border border-gray-300 rounded-lg px-7 py-2">
                                <input
                                    type="text"
                                    className="grow p-2 border-none outline-none"
                                    placeholder="Your Name*"
                                />
                            </div>
                            <div className=" items-center gap-2 border border-gray-300 rounded-lg px-7 py-2">
                                <input
                                    type="email"
                                    className="grow p-2 border-none outline-none"
                                    placeholder="Your Email*"
                                />
                            </div>
                        </div>
                        <div className="flex mb-5">
                            <div className="mr-5 items-center gap-2 border border-gray-300 rounded-lg px-7 py-2">
                                <input
                                    type="number"
                                    className="grow p-2 border-none outline-none"
                                    placeholder="Your Phone Number*"
                                />
                            </div>
                            <div className=" items-center gap-2 border border-gray-300 rounded-lg px-7 py-2">
                                <input
                                    type="text"
                                    className="grow p-2 border-none outline-none"
                                    placeholder="Subject*"
                                />
                            </div>
                        </div>
                        <div className=" items-center gap-2 border border-gray-300 rounded-lg w-[530px]  py-16">
                            <input
                                type="text"
                                className="grow p-5 border-none outline-none"
                                placeholder="Message*"
                            />
                        </div>
                        <button className="px-4 py-2 mt-7 w-[530px] h-12 bg-gradient-to-r from-indigo-950 to-sky-600 text-white font-bold rounded-2xl shadow hover:bg-sky-500  focus:outline-none focus:ring-2 focus:ring-yellow-400">
                            Submit
                        </button>

                    </div>
                    <div>

                    </div>
                </div>
                <div className="ml-[350px] mt-[250px] w-[800px] h-[350px] bg-white rounded-xl  text-center">
                    <h1 className="pt-20 text-blue-900 text-xl font-medium">Rent Your Room</h1>
                    <h1 className="text-4xl font-semibold pt-5">Interested In Renting A Room?</h1>
                    <h1 className="pt-5">Don`t hesitate and send us a message.</h1>
                    <button className="px-4 mt-8 py-2  w-[170px] h-12 bg-gradient-to-r from-indigo-950 to-sky-600 text-white font-bold rounded-lg shadow hover:bg-sky-500  focus:outline-none focus:ring-2 focus:ring-yellow-400">
                            Chat With Us
                        </button>
                </div>
            </div>



            <Footer></Footer>
        </div>
    );
};

export default contact;
