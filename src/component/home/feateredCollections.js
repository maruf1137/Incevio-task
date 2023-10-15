import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Feature_collections_data } from "./data";
import Link from "next/link";

const FeateredCollections = () => {
  return (
    <div className="py-14 relative">
      <h2 className="font-display text-[#131740] font-semibold mb-8 text-center text-3xl">
        Featured Collections
      </h2>

      <div className="max-w-7xl mx-auto relative">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1100: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className=" card-slider-4-columns !py-5">
          {Feature_collections_data.map((item) => {
            const {
              id,
              bigImage,
              subImage1,
              subImage2,
              subImage3,
              userImage,
              title,
              itemsCount,
              userName,
            } = item;

            return (
              <SwiperSlide key={id}>
                <article>
                  <div className="border-gray-200 rounded-2xl border border-solid bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
                    <a href="#">
                      <div className="flex space-x-[0.625rem]">
                        <figure className="w-[74.5%] h-full">
                          <img
                            src={bigImage}
                            alt="item 1"
                            className="rounded-[0.625rem] h-full object-cover"
                          />
                        </figure>
                        <span className="flex w-1/3 flex-col space-y-[0.625rem]">
                          <img
                            src={subImage1}
                            alt="item 1"
                            className="h-full rounded-[0.625rem] object-cover"
                            loading="lazy"
                          />

                          <img
                            src={subImage2}
                            alt="item 1"
                            className="h-full rounded-[0.625rem] object-cover"
                            loading="lazy"
                          />
                          <img
                            src={subImage3}
                            alt="item 1"
                            className="h-full rounded-[0.625rem] object-cover"
                            loading="lazy"
                          />
                        </span>
                      </div>
                    </a>

                    <Link href="#">
                      <div className="font-display text-gray-700 mt-4 block text-base">
                        {title}
                      </div>
                    </Link>
                    <p className="text-sm text-gray-700 mt-2 block">
                      Ut enim nostrum rem voluptas. Nobis quae nobis rerum
                      asperiores quae. Consequatur voluptatem odit alias nisi
                      illum
                    </p>
                    <a
                      href="#"
                      className="text-base text-center bg-transparent border border-red-500 border-solid text-red-500 py-2 w-full rounded-md hover:bg-red-500 hover:text-white block mt-4 transition-all duration-200 ease-linear">
                      View Details
                    </a>
                  </div>
                </article>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* <!-- Slider Navigation --> */}
        <div className="group swiper-button-prev shadow-white-volume absolute !top-1/2 !-left-4 z-10 -mt-6 flex !h-10 !w-10 cursor-pointer items-center justify-center rounded-full bg-gray-700 p-3 text-jacarta-700 text-xl sm:!-left-6 after:hidden">
          <svg class="h-5 w-5 fill-white">
            <use xlinkHref="/icons.svg#icon-chevron-left"></use>
          </svg>
        </div>
        <div className="group swiper-button-next shadow-white-volume absolute !top-1/2 !-right-4 z-10 -mt-6 flex !h-10 !w-10 cursor-pointer items-center justify-center rounded-full bg-gray-700 p-3 text-jacarta-700 text-xl sm:!-right-6 after:hidden">
          <svg class="h-5 w-5 fill-white">
            <use xlinkHref="/icons.svg#icon-chevron-right"></use>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default FeateredCollections;
