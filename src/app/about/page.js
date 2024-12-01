import { Divide } from "lucide-react";
import Footer from "../../components/Footer";

const about = () => {
    return (
        <div>
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
            <div className="text-center w-full h-[350px] bg-slate-100 pt-28">
                <h1 className="text-5xl text-blue-900 font-bold">Our Vision</h1>
                <p className="text-2xl font-normal pt-5 text-neutral-600">To become the leading car rental company known for quality, innovation, and <br /> commitment to our customers and community.</p>
            </div>

            <div className="text-center w-full h-[550px] bg-white pt-28">
                <h1 className="text-5xl text-blue-900  font-bold">Meet Our Team</h1>
                <div className="flex justify-center items-center pt-14 ">
                    <div className="mr-5">
                        <div className="w-36  h-36 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                            <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center">
                                <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
                                    Aayman
                                </div>
                            </div>
                        </div>
                        <h1 className="mt-5">Aayman</h1>
                        <h1>Leader</h1>
                    </div>
                    <div className="mr-5">
                        <div className="w-36  h-36 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                            <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center">
                                <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
                                    Chandra Shekhor
                                </div>
                            </div>
                        </div>
                        <h1 className="mt-5">Chandra Shekhor</h1>
                        <h1>Member</h1>
                    </div>
                    <div className="mr-5">
                        <div className="w-36  h-36 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                            <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center">
                                <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
                                    KAMRUL
                                </div>
                            </div>
                        </div>
                        <h1 className="mt-5">KAMRUL</h1>
                        <h1>Member</h1>
                    </div>
                    <div className="mr-5">
                        <div className="w-36  h-36 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                            <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center">
                                <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
                                    Hashanuz Zaman
                                </div>
                            </div>
                        </div>
                        <h1 className="mt-5">Hashanuz Zaman</h1>
                        <h1>Member</h1>
                    </div>
                    <div className="mr-5">
                        <div className="w-36  h-36 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                            <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center">
                                <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
                                    Ruhul Amin
                                </div>
                            </div>
                        </div>
                        <h1 className="mt-5">Ruhul Amin</h1>
                        <h1>Member</h1>
                    </div>
                </div>
            </div>


            <div className="text-center w-full h-[550px] bg-slate-100 pt-28">
                <h1 className="text-5xl text-blue-900  font-bold">Our Core Values</h1>
                <div className="flex justify-center pt-14">
                    <div className="w-[350px] mr-5 h-[200px] text-blue-900 bg-white shadow-xl rounded-lg shadow-slate-200">
                        <h1 className="pt-16 text-2xl font-semibold">Integrity</h1>
                        <p className="text-lg">We act with  in all that we do.</p>
                    </div>
                    <div className="w-[350px] mr-5 h-[200px] text-blue-900 bg-white shadow-xl rounded-lg shadow-slate-200">
                        <h1 className="pt-16 text-2xl font-semibold">Trust</h1>
                        <p className="text-lg">We act with  in all that we do.</p>
                    </div>
                    <div className="w-[350px] h-[200px] text-blue-900 bg-white shadow-xl rounded-lg shadow-slate-200">
                        <h1 className="pt-16 text-2xl font-semibold">Honesty</h1>
                        <p className="text-lg">We act with  in all that we do.</p>
                    </div>
                </div>
            </div>

            <div className="text-center w-full h-[350px] bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                <h1 className="text-5xl pt-24 text-white font-bold">Our Story</h1>
                <p className="text-2xl font-normal pt-5 text-white">Founded in 2024, UrbanDrive has quickly grown
                    to become a trusted name in <br /> car rentals, known for our dedication to customer service and high-quality <br /> vehicles.</p>
            </div>

            <div className="text-center w-full h-[350px] bg-slate-100 pt-28">
                <h1 className="text-5xl text-blue-900 font-bold">Get in Touch</h1>
                <p className="text-2xl font-normal pt-5 text-neutral-600">Have questions? Reach out to us at .</p>
                <button className="px-4 py-2 mt-7 w-32 h-16 bg-yellow-500 text-white font-bold rounded-lg shadow hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400">
                    Send
                </button>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default about;
