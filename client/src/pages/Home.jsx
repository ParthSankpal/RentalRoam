import React from "react";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <body class=" font-Higuen">
      <div class="relative">
        <img
          class="w-full h-[24rem] md:h-[30rem] brightness-50"
          src="https://img.freepik.com/premium-photo/parking-lot-with-many-cars-one-that-says-car-parking-it_883586-1139.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1698883200&semt=ais"
        />
        <h1 class="absolute text-2xl sm:text-5xl text-center text-white top-12 sm:left-12 p-4  sm:p-10">
          Your key to hassle-free journeys. Unlock a world of convenience with
          our diverse fleet, ensuring every mile is a joyride.
        </h1>
        <div className=" sm:w-auto absolute  text-white top-2/3 sm:left-[40%] p-4  sm:p-8">
          <div className="  flex align-middle gap-5 justify-evenly">
            {/* <button class="ease-in duration-300 ...">hire</button> */}
            <Link to="sign-in">
              <button
                type="button"
                class="ease-in duration-300 py-2 sm:py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm text-slate-700 font-medium focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 "
              >
                Hire a car
              </button>
            </Link>
            <p className=" flex align-middle">Or </p>
            <Link to="vendor-sign-in">
              <button
                type="button"
                class="ease-in duration-300 py-2 sm:py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm text-slate-700 font-medium focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 "
              >
              Vend Car
              </button>
            </Link>
            {/* <Link to="">
              <button
                type="button"
                class="ease-in duration-300 py-2 sm:py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm text-slate-700 font-medium focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 "
              >
                Admin
              </button>
            </Link> */}
            

            {/* <button class="ease-out duration-300 ...">vendor</button>
          <button class="ease-in-out duration-300 ...">Admin</button> */}
          </div>
        </div>
      </div>
    </body>
  );
};

export default Home;
