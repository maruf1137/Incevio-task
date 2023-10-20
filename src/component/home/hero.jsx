import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Autoplay } from "swiper";
import { hero_swiper_data, hero_swiper_thumbs_data } from "./data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const Hero = () => {
  const [activeThumb, setActiveThumb] = useState(null);

  return (
    <section className="relative h-[735px]">
      <Swiper
        modules={[Thumbs, Autoplay]}
        spaceBetween={0}
        loop={true}
        thumbs={{
          swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="full-slider h-full overflow-visible">
        {hero_swiper_data.map((item) => {
          const { image, id } = item;
          return (
            <SwiperSlide key={id}>
              <img
                src={image}
                className="w-full h-full object-cover opacity-80"
                alt=""
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* <!-- Thumbs --> */}
      <div className="absolute inset-x-0 bottom-2">
        <div className="max-w-7xl mx-auto">
          {/* <Thumbs_carousel /> */}
          <Swiper
            modules={[Thumbs]}
            onSwiper={setActiveThumb}
            loop={true}
            spaceBetween={10}
            slidesPerView="auto"
            breakpoints={{
              100: {
                slidesPerView: 2,
              },
              400: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
            }}
            className=" full-slider-thumbs swiper-initialized swiper-horizontal swiper-pointer-events swiper-thumbs">
            {hero_swiper_thumbs_data.map((item) => {
              const { image, id } = item;
              return (
                <SwiperSlide
                  className="swiper-slide cursor-pointer rounded p-5 swiper-slide-duplicate swiper-slide-duplicate-next "
                  key={id}>
                  <img
                    src={image}
                    className="w-full h-[200px] object-cover rounded-lg"
                    alt="thumb 1"
                  />
                  <div className="carousel-progress relative -bottom-5 z-10 -ml-5 -mr-5 h-0.5 bg-gray-400">
                    <div className="progress bg-red-500 absolute h-0.5 w-0"></div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Hero;
