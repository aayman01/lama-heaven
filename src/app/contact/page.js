import Image from 'next/image';
import Footer from "../../components/Footer";
import Navbar from "../../components/shared/Navbar";
const contact = () => {


    return (
        <div>
            <Navbar></Navbar>
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
                    <div className="rounded-lg text-center w-[280px] h-[150px] bg-white shadow-xl shadow-slate-500">
                        <div className="w-7 h-7 ml-[130px] pt-7 mb-12 ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#004080" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                        </div>
                        <h1 className=" text-blue-900 text-xl font-semibold">Email us</h1>
                        <h1 className="text-base font-normal">info@lamaheaven.com</h1>
                    </div>
                    <div className="rounded-lg text-center w-[280px] h-[150px] bg-white shadow-xl shadow-slate-500">
                        <div className="w-7 h-7 ml-[130px] pt-7 mb-12 ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#004080" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                        </div>
                        <h1 className=" text-blue-900 text-xl font-semibold">Our address</h1>
                        <h1 className="text-base font-normal">Dhaka, Bangladesh</h1>
                    </div>
                    <div className="rounded-lg text-center w-[280px] h-[150px] bg-white shadow-xl shadow-slate-500">
                        <div className="w-7 h-7 ml-[130px] pt-7 mb-12 ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#004080" d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
                        </div>
                        <h1 className=" text-blue-900 text-xl font-semibold">Opening Hours</h1>
                        <h1 className="text-base font-normal">Mon-Sun: 8 AM - 7 PM</h1>
                    </div>
                    <div className="rounded-lg text-center w-[280px] h-[150px] bg-white shadow-xl shadow-slate-500">
                        <div className="w-7 h-7 ml-[130px] pt-7 mb-12 ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#004080" d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"/></svg>
                        </div>
                        <h1 className=" text-blue-900 text-xl font-semibold">Contact Phone</h1>
                        <h1 className="text-base font-normal">+880 1234 567890</h1>
                    </div>
                </div>
            </div>
            <div className="bg-slate-100 pb-20 justify-center">
                <div>
                    <h1 className="text-4xl font-bold pt-40 text-center">Get In Touch</h1>
                </div>
                <div className="mt-16 ml-[250px] flex">
                    <div className="pt-10 pl-10 w-[870px] h-[500px] bg-white shadow-lg shadow-slate-400 rounded-lg ml-10">
                        <div className="flex mb-5 ">
                            <div className="mr-5  items-center gap-2 border border-gray-300 rounded-lg px-24 py-2">
                                <input
                                    type="text"
                                    className="grow p-2 border-none outline-none"
                                    placeholder="Your Name*"
                                />
                            </div>
                            <div className=" items-center gap-2 border border-gray-300 rounded-lg px-24 py-2">
                                <input
                                    type="email"
                                    className="grow p-2 border-none outline-none"
                                    placeholder="Your Email*"
                                />
                            </div>
                        </div>
                        <div className="flex mb-5">
                            <div className="mr-5 items-center gap-2 border border-gray-300 rounded-lg px-24 py-2">
                                <input
                                    type="number"
                                    className="grow p-2 border-none outline-none"
                                    placeholder="Your Phone Number*"
                                />
                            </div>
                            <div className=" items-center gap-2 border border-gray-300 rounded-lg px-24 py-2">
                                <input
                                    type="text"
                                    className="grow p-2 border-none outline-none"
                                    placeholder="Subject*"
                                />
                            </div>
                        </div>
                        <div className=" items-center gap-2 border border-gray-300 rounded-lg w-[800px]  py-16">
                            <input
                                type="text"
                                className="grow p-5 border-none outline-none"
                                placeholder="Message*"
                            />
                        </div>
                        <button className="px-4 py-2 mt-7 w-[800px] h-12 bg-gradient-to-r from-indigo-950 to-sky-600 text-white font-bold rounded-2xl shadow hover:bg-sky-500  focus:outline-none focus:ring-2 focus:ring-yellow-400">
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
