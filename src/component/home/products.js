import React, { useEffect, useState } from "react";
import { topCollectionsData } from "./data";
import Image from "next/image";
import Link from "next/link";

const Products = () => {
  return (
    <div className="bg-gray-50 py-14">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-[#131740] font-semibold mb-8 text-center text-3xl">
          Top Collections
        </h2>

        <div className="grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-3">
          {topCollectionsData.map((item) => {
            const { id, image, title, price, desc } = item;

            return (
              <article key={id}>
                <div className="border-gray-100 border-solid rounded-lg block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
                  <figure className="relative">
                    <Link href="#">
                      <img
                        src={image}
                        alt="item 5"
                        className="w-full h-[230px] rounded-[0.625rem] object-cover"
                      />
                    </Link>

                    <div className="absolute top-3 right-3 flex items-center rounded-md bg-white py-1 px-3 text-red-500 text-md font-medium">
                      {price}
                    </div>
                  </figure>
                  <div className="mt-7 flex items-center justify-between">
                    <span className="font-display text-gray-700 text-base font-semibold">
                      {title}
                    </span>
                  </div>
                  <div className="mt-2 text-sm">{desc}</div>

                  <div className="mt-3 flex items-center justify-between">
                    <button className="text-accent font-display text-sm font-semibold bg-red-500 hover:bg-red-600 p-2 px-4 rounded-md text-white">
                      Buy now
                    </button>
                    <button className="text-accent font-display text-sm font-semibold bg-red-500 hover:bg-red-600 p-2 px-4 rounded-md text-white">
                      View Details
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="flex justify-center items-center mt-8">
          <button className="text-red-500 border-2 border-red-500 border-solid hover:bg-red-500 hover:text-white py-3 px-8 rounded-md transition-all duration-200 ease-linear text-base font-semibold">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
