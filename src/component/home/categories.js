import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { category_data } from "./data";
// import Browse_category_data from "../../data/Browse_category_data";

const Categories = () => {
  return (
    <section className="py-14 relative">
      <h2 className="font-display text-[#131740] font-semibold mb-8 text-center text-3xl">
        Browse by category
      </h2>

      <div className="relative">
        <div className="overflow-hidden">
          <Swiper
            slidesPerView="auto"
            spaceBetween={10}
            loop={true}
            breakpoints={{
              // when window width is >= 640px
              100: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              // when window width is >= 768px
              700: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              900: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 7,
                spaceBetween: 30,
              },
            }}
            className="card-slider-4-columns !py-3"
            style={{ transform: "scaleX(1.2)" }}>
            {category_data.map((item) => {
              const { id, image, title, bgColor } = item;
              return (
                <SwiperSlide key={id}>
                  <article>
                    <div className="rounded-2xl block border border-gray-200 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg border-solid cursor-pointer">
                      <figure
                        style={{ backgroundColor: bgColor }}
                        className="rounded-t-[0.625rem] w-full rounded-[0.625rem p-2">
                        <img
                          src={image}
                          alt="item 1"
                          className="rounded-t-[0.625rem]"
                        />
                      </figure>
                      <div className="mt-1 text-center">
                        <span className="font-display text-lg text-black">
                          {title}
                        </span>
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Categories;
