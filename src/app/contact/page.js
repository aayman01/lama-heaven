"use client";

import Footer from "../../components/Footer";

const contact = () => {
    return (
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


            <Footer></Footer>
        </div>
    );
};

export default contact;
