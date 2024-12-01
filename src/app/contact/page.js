"use client";
import Image from 'next/image';
import { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/shared/Navbar";
import Swal from "sweetalert2";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (response.ok) {
                setStatus("success");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: "",
                });
                Swal.fire({
                    title: "Success!",
                    text: "Your message has been sent successfully.",
                    icon: "success",
                    confirmButtonText: "OK",
                });
            } else {
                setStatus("error");
                Swal.fire({
                    title: "Error!",
                    text: "Something went wrong, please try again.",
                    icon: "error",
                    confirmButtonText: "OK",
                });
            }
        } catch (error) {
            setStatus("error");
            Swal.fire({
                title: "Error!",
                text: "Something went wrong, please try again.",
                icon: "error",
                confirmButtonText: "OK",
            });
        }
    };

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
                    <div className="relative z-10 text-white px-4 py-6 sm:px-8 sm:py-10">
                        <h1 className="text-4xl sm:text-5xl font-extrabold mb-2">
                            Contact Us
                        </h1>
                        <p className="text-lg sm:text-xl">
                            Get in touch with us for any inquiries.
                        </p>
                    </div>
                </div>


                <div className="absolute top-[420px] left-0 right-0 z-20 flex flex-col sm:flex-row sm:justify-center space-y-6 sm:space-y-0 sm:space-x-6 px-4">

                    <div className="rounded-lg text-center w-full sm:w-[280px] h-[150px] bg-white shadow-xl shadow-slate-500">
                        <div className="w-7 h-7 mx-auto mt-7 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#004080" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
                        </div>
                        <h1 className="text-blue-900 text-lg sm:text-xl font-semibold">
                            Email us
                        </h1>
                        <p className="text-base font-normal">info@lamaheaven.com</p>
                    </div>


                    <div className="rounded-lg text-center w-full sm:w-[280px] h-[150px] bg-white shadow-xl shadow-slate-500">
                        <div className="w-7 h-7 mx-auto mt-7 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#004080" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                        </div>
                        <h1 className="text-blue-900 text-lg sm:text-xl font-semibold">
                            Our address
                        </h1>
                        <p className="text-base font-normal">Dhaka, Bangladesh</p>
                    </div>


                    <div className="rounded-lg text-center w-full sm:w-[280px] h-[150px] bg-white shadow-xl shadow-slate-500">
                        <div className="w-7 h-7 mx-auto mt-7 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#004080" d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg>
                        </div>
                        <h1 className="text-blue-900 text-lg sm:text-xl font-semibold">
                            Opening Hours
                        </h1>
                        <p className="text-base font-normal">Mon-Sun: 8 AM - 7 PM</p>
                    </div>


                    <div className="rounded-lg text-center w-full sm:w-[280px] h-[150px] bg-white shadow-xl shadow-slate-500">
                        <div className="w-7 h-7 mx-auto mt-7 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#004080" d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z" /></svg>
                        </div>
                        <h1 className="text-blue-900 text-lg sm:text-xl font-semibold">
                            Contact Phone
                        </h1>
                        <p className="text-base font-normal">+880 1234 567890</p>
                    </div>
                </div>
            </div>
            <div className="bg-slate-100 pb-1 lg:pb-10 mt-[500px] lg:mt-0 justify-center">
                <div>
                    <h1 className="text-4xl font-bold pt-40 text-center">Get In Touch</h1>
                </div>
                <div className="mt-16 flex flex-col lg:flex-row lg:ml-[250px]">
                    <div className="pt-10 pl-5 lg:pl-10 w-full lg:w-[870px] h-[600px] lg:h-[470px] bg-white shadow-lg shadow-slate-400 rounded-lg lg:ml-10">
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col lg:flex-row mb-5">
                                <div className="mb-5 lg:mb-0 lg:mr-5 items-center gap-2 border border-gray-300 rounded-lg px-4 lg:px-24 py-2">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="grow p-2 border-none outline-none w-full"
                                        placeholder="Your Name*"
                                        required
                                    />
                                </div>
                                <div className="items-center gap-2 border border-gray-300 rounded-lg px-4 lg:px-24 py-2">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="grow p-2 border-none outline-none w-full"
                                        placeholder="Your Email*"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col lg:flex-row mb-5">
                                <div className="mb-5 lg:mb-0 lg:mr-5 items-center gap-2 border border-gray-300 rounded-lg px-4 lg:px-24 py-2">
                                    <input
                                        type="number"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="grow p-2 border-none outline-none w-full"
                                        placeholder="Your Phone Number*"
                                        required
                                    />
                                </div>
                                <div className="items-center gap-2 border border-gray-300 rounded-lg px-4 lg:px-24 py-2">
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="grow p-2 border-none outline-none w-full"
                                        placeholder="Subject*"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="items-center gap-2 border border-gray-300 rounded-lg w-full lg:w-[800px] py-8">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="grow p-5 border-none outline-none w-full"
                                    placeholder="Message*"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="px-4 py-2 mt-7 w-full lg:w-[800px] h-12 bg-gradient-to-r from-indigo-950 to-sky-600 text-white font-bold rounded-2xl shadow hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            >
                                {status === "sending" ? "Sending..." : "Submit"}
                            </button>
                        </form>
                    </div>
                </div>

                <div className=" justify-center items-center mb-28 mt-20 bg-gray-100">
                    <div className="mx-4 sm:mx-0 sm:ml-[350px] sm:mt-[250px] w-full max-w-[800px] h-auto sm:h-[350px] bg-white rounded-xl text-center shadow-lg p-6 sm:p-0">
                        <h1 className="pt-10 sm:pt-20 text-blue-900 text-lg sm:text-xl font-medium">
                            Rent Your Room
                        </h1>
                        <h1 className="text-2xl sm:text-4xl font-semibold pt-3 sm:pt-5">
                            Interested In Renting A Room?
                        </h1>
                        <h1 className="pt-3 sm:pt-5 text-sm sm:text-base">
                            Don’t hesitate and send us a message.
                        </h1>
                        <button className="px-4 mt-6 sm:mt-8 py-2 w-full sm:w-[170px] h-12 bg-gradient-to-r from-indigo-950 to-sky-600 text-white font-bold rounded-lg shadow hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-yellow-400">
                            Chat With Us
                        </button>
                    </div>
                </div>


            </div>
            <Footer></Footer>
        </div>

    );
};

export default Contact;


