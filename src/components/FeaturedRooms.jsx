import Image from "next/image";

// import  img4 from "@/public/assets/img4.png"


export default function FeaturedRooms() {
    return (

        <div>
            <div className=" flex flex-col items-center justify-center bg-white px-10 mb-20 ">



                <h2 className="text-3xl font-bold mb-3 text-black" > Featured Rooms</h2>
                <h1 className=" text-5xl mb-4 text-black  "> Choose a Better Room</h1>

            </div>

            <div className=" grid  grid-cols-1  md:grid-cols-2  ">

                <div>
                    <Image
                        width={800}
                        height={400}
                        src="/assets/img4.png"
                        alt="img4"
                        className=" absolute "

                    ></Image>
                    <div className=" relative mt-[400px] px-10  ">
                        <div className=" flex   ">
                            <div>

                                <h3 className=" text-white " >From $250/night</h3>

                                <h3 className=" text-white text-4xl " >Signature Room</h3>
                            </div>
                            <div>

                                <button className=" btn  bg-slate-600 p-2 border-spacing-1 text-white ml-40 "> Book Now </button>
                            </div>

                        </div >
                    </div>
                </div>
                <div>
                    <Image
                        width={800}
                        height={400}
                        src="/assets/img4.png"
                        alt="img4"
                        className=" absolute "

                    ></Image>
                    <div className=" relative mt-[400px] px-10  ">
                        <div className=" flex   ">
                            <div>

                                <h3 className=" text-white " >From $250/night</h3>

                                <h3 className=" text-white text-4xl " >Signature Room</h3>
                            </div>
                            <div>

                                <button className=" btn  bg-slate-600 p-2 border-spacing-1 text-white ml-40 "> Book Now </button>
                            </div>

                        </div >
                    </div>
                </div>

{/* bg image  */}




            </div>


        </div>




    );
}
