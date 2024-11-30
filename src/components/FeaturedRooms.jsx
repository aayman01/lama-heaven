import Image from "next/image";
import image1 from "/public/assets/img1.png";
import image2 from "/public/assets/img2.png";
import image3 from "/public/assets/img3.png";
import image4 from "/public/assets/img4.png";


export default function FeaturedRooms() {

    const images = [
        {
            id: 1,
            img: image1
        },
        {
            id: 2,
            img: image2
        },
        {
            id: 3,
            img: image3
        },
        {
            id: 4,
            img: image4
        },

    ]

    return (
      <div className="mb-28 ">
        <div className=" flex flex-col items-center justify-center bg-white px-10 my-20 ">
          <h2 className="text-3xl font-bold mb-3 text-black">
           
            Featured Rooms
          </h2>
          <h1 className=" text-5xl mb-4 text-black  "> Choose a Better Room</h1>
        </div>
        <div className=" grid  grid-cols-1  md:grid-cols-2   ">
          {images.map(( image) => (
            <div key={image.id} className="group text-white  relative">
              <div className="overflow-hidden">
                <Image
                  src={image?.img}
                  width={620}
                  height={780}
                  alt={`Featured Room ${image.id}`}
                  className="relative transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              {/* Text Positioned at the Bottom */}
              <div className="absolute bottom-0 left-0 w-full z-10 bg-gradient-to-t from-black via-transparent to-transparent">
                <div className="flex justify-between p-5">
                  <div>
                    <h3 className="text-white">From $250/night</h3>
                    <h3 className="text-white text-4xl">Signature Room</h3>
                  </div>
                  <div>
                    <button className="btn border-b-2 text-white hover:text-blue-500 hover:border-blue-500">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}
