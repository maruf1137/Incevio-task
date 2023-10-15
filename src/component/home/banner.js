import React from "react";

const Banner = () => {
  return (
    <div className="bg-white py-14">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-5">
          <figure className="w-full h-[350px]">
            <img
              src="https://i.pinimg.com/originals/db/c0/cd/dbc0cd0bd2ecf2316627422083665fc3.png"
              alt=""
              className="h-full w-full object-cover rounded-md"
            />
          </figure>
          <figure className="w-full h-[350px]">
            <img
              src="https://i.pinimg.com/originals/db/c0/cd/dbc0cd0bd2ecf2316627422083665fc3.png"
              alt=""
              className="h-full w-full object-cover rounded-md"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Banner;
