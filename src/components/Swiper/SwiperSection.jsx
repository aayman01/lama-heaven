import { Fullscreen } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./swiper.css";
import image1 from "/public/assets/img1.png";
import image2 from "/public/assets/img2.png";
import image3 from "/public/assets/img3.png";
import image4 from "/public/assets/img4.png";

const SwiperSection = ({ fakeData }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  console.log(fakeData);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide className="mx-auto">
          <Image width={Fullscreen} alt="swiper image" src={image1} />
        </SwiperSlide>
        <SwiperSlide className="mx-auto">
          <Image width={Fullscreen} alt="swiper image" src={image2} />
        </SwiperSlide>
        <SwiperSlide className="mx-auto">
          <Image width={Fullscreen} alt="swiper image" src={image3} />
        </SwiperSlide>
        <SwiperSlide className="mx-auto">
          <Image width={Fullscreen} alt="swiper image" src={image4} />
        </SwiperSlide>
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide className="mx-auto">
          <Image width={Fullscreen} alt="swiper image" src={image1} />
        </SwiperSlide>
        <SwiperSlide className="mx-auto">
          <Image width={Fullscreen} alt="swiper image" src={image2} />
        </SwiperSlide>
        <SwiperSlide className="mx-auto">
          <Image width={Fullscreen} alt="swiper image" src={image3} />
        </SwiperSlide>
        <SwiperSlide className="mx-auto">
          <Image width={Fullscreen} alt="swiper image" src={image4} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperSection;
