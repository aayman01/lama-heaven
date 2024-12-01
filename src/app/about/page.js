import { Divide } from "lucide-react";
import Footer from "../../components/Footer";
import Navbar from "../../components/shared/Navbar";

const about = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div
                className="relative w-full h-[550px] flex items-center justify-center text-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1500622944204-b135684e99fd?q=80&w=2061&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="relative z-10 text-white p-6 sm:p-8 lg:p-10">
                    <h1 className="text-5xl sm:text-4xl lg:text-5xl font-bold mb-2">
                        About Us
                    </h1>
                    <p className="text-xl sm:text-lg lg:text-xl">
                        Our mission is to be the go-to hotel booking platform, <br />
                        delivering exceptional service, ensuring comfort, and offering unparalleled <br />
                        convenience to our customers, making every stay a truly memorable experience.
                    </p>
                </div>

            </div>
            <div className="text-center w-full h-[350px] bg-slate-100  pt-12 lg:pt-28">
                <h1 className="text-5xl text-blue-900 font-bold">Our Vision</h1>
                <p className="text-2xl font-normal pt-5 text-neutral-600">To become the leading car rental company known for quality, innovation, and <br /> commitment to our customers and community.</p>
            </div>

            <div className="text-center w-full h-auto bg-white pt-20 pb-20">
                <h1 className="text-4xl lg:text-5xl text-blue-900 font-bold">Meet Our Team</h1>
                <div className="flex flex-wrap justify-center items-center gap-6 pt-14">
                    <div className="text-center">
                        <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                            <div className="w-22 h-22 sm:w-20 sm:h-20 lg:w-32 lg:h-32 rounded-full bg-white flex items-center justify-center">
                                <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px] rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
                                    Aayman
                                </div>
                            </div>
                        </div>
                        <h1 className="mt-5 text-sm lg:text-xl">Aayman</h1>
                        <h1 className="text-sm lg:text-xl">Leader</h1>
                    </div>

                    <div className="text-center">
                        <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                            <div className="w-22 h-22 sm:w-20 sm:h-20 lg:w-32 lg:h-32 rounded-full bg-white flex items-center justify-center">
                                <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px] rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
                                    Chandra Shekhor
                                </div>
                            </div>
                        </div>
                        <h1 className="mt-5 text-sm lg:text-xl">Chandra Shekhor</h1>
                        <h1 className="text-sm lg:text-xl">Member</h1>
                    </div>

                    <div className="text-center">
                        <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                            <div className="w-22 h-22 sm:w-20 sm:h-20 lg:w-32 lg:h-32 rounded-full bg-white flex items-center justify-center">
                                <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px] rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-xs sm:text-sm lg:text-lg">
                                    KAMRUL
                                </div>
                            </div>
                        </div>
                        <h1 className="mt-5 text-sm lg:text-xl">KAMRUL</h1>
                        <h1 className="text-sm lg:text-xl">Member</h1>
                    </div>

                    <div className="text-center">
                        <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                            <div className="w-22 h-22 sm:w-20 sm:h-20 lg:w-32 lg:h-32 rounded-full bg-white flex items-center justify-center">
                                <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px] rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
                                    Hashanuz Zaman
                                </div>
                            </div>
                        </div>
                        <h1 className="mt-5 text-sm lg:text-xl">Hashanuz Zaman</h1>
                        <h1 className="text-sm lg:text-xl">Member</h1>
                    </div>

                    <div className="text-center">
                        <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                            <div className="w-22 h-22 sm:w-20 sm:h-20 lg:w-32 lg:h-32 rounded-full bg-white flex items-center justify-center">
                                <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px] rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
                                    Ruhul Amin
                                </div>
                            </div>
                        </div>
                        <h1 className="mt-5 text-sm lg:text-xl">Ruhul Amin</h1>
                        <h1 className="text-sm lg:text-xl">Member</h1>
                    </div>
                </div>
            </div>



            <div className="text-center w-full h-auto lg:h-[550px] bg-slate-100 pt-28">
                <h1 className="text-4xl lg:text-5xl text-blue-900 font-bold">Our Core Values</h1>
                <div className="flex flex-col lg:flex-row justify-center pb-20 lg:pb-0 items-center pt-14 gap-6 lg:gap-5">
                    <div className="w-[300px] lg:w-[350px] h-[200px] text-blue-900 bg-white shadow-xl rounded-lg shadow-slate-200 flex flex-col items-center">
                        <div className="w-11 h-11 mt-6 lg:mt-10">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="#004080" d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8l0 378.1C394 378 431.1 230.1 432 141.4L256 66.8s0 0 0 0z" />
                            </svg>
                        </div>
                        <h1 className="pt-4 lg:pt-5 text-2xl font-semibold">Integrity</h1>
                        <p className="text-lg text-center px-4">We act with integrity in all that we do.</p>
                    </div>
                    <div className="w-[300px] lg:w-[350px] h-[200px] text-blue-900 bg-white shadow-xl rounded-lg shadow-slate-200 flex flex-col items-center">
                        <div className="w-11 h-11 mt-6 lg:mt-10">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="#004080" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                            </svg>
                        </div>
                        <h1 className="pt-4 lg:pt-5 text-2xl font-semibold">Trust</h1>
                        <p className="text-lg text-center px-4">We act with trust in all that we do.</p>
                    </div>
                    <div className="w-[300px] lg:w-[350px] h-[200px] text-blue-900 bg-white shadow-xl rounded-lg shadow-slate-200 flex flex-col items-center">
                        <div className="w-11 h-11 mt-6 lg:mt-10">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="#004080" d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                            </svg>
                        </div>
                        <h1 className="pt-4 lg:pt-5 text-2xl font-semibold">Honesty</h1>
                        <p className="text-lg text-center px-4">We act with honesty in all that we do.</p>
                    </div>
                </div>
            </div>


            <div className="text-center w-full h-[430px] lg:h-[400px] bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                <div className="w-16 h-16 ml-[150px] lg:ml-[725px] pt-5 lg:pt-16 ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#c0c0c0" d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" /></svg>
                </div>
                <h1 className="text-5xl pt-10 lg:pt-24 text-white font-bold">Our Story</h1>
                <p className="text-2xl font-normal pt-5 text-white">Founded in 2024, UrbanDrive has quickly grown
                    to become a trusted name in <br /> car rentals, known for our dedication to customer service and high-quality <br /> vehicles.</p>
            </div>

            <div className="text-center w-full h-[350px] bg-slate-100 pt-28">
                <h1 className="text-5xl text-blue-900 font-bold">Get in Touch</h1>
                <p className="text-xl lg:text-2xl font-normal pt-5 text-neutral-600">Have questions? Reach out to us at .</p>
                <button className="px-4 py-2 mt-7 w-32 h-16 bg-yellow-500 text-white font-bold rounded-lg shadow hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400">
                    <div className="flex">
                        <div className="w-7 h-7 mr-3 ml-2  ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
                        </div>
                        <div>
                            <h1 className="text-white">Send</h1>
                        </div>
                    </div>

                </button>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default about;
