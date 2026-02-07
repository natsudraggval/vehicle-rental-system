import React from "react";

function Body() {
  return (
    <>
      {/* Background Image Section  */}
      <div className="flex flex-col md:flex-row h-[640px] w-full bg-gray-100 px-6 md:px-12">
        {/* Text */}
        <div className="flex flex-col justify-center flex-1 ml-0 md:ml-12 mt-10 md:-mt-32 text-center md:text-left">
          <h1 className="text-gray-900 text-5xl md:text-7xl font-bold leading-tight mb-2">
            Fast.
            <br className="block md:hidden" />
            <span className="md:ml-3">
              Easy.
            </span>
            <br />
            Reliable Rides.
          </h1>
          <div className="text-gray-700 text-lg md:text-xl font-light">
            <p>A comprehensive vehicle rental platform designed for</p>
            <p>convenient access across Nepal.</p>
          </div>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center md:justify-end flex-1 mt-6 md:mt-0">
          <img
            src="/image/hero-image.png"
            alt="Hero"
            className="h-[220px] md:h-[120%] w-auto object-contain"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gray-50 py-16 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              A Student-Built Vehicle Rental Platform
            </h2>
            <p className="mt-3 text-xl text-gray-700 sm:mt-4">
              Smart, accessible mobility powered by community-driven adoption —
              more engaging than traditional rental services.
            </p>
          </div>
        </div>
        <div className="mt-10 pb-1">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-50"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <dl className="rounded-lg bg-white shadow-xl sm:grid sm:grid-cols-3">
                  <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-700">
                      App Impressions
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-gray-900">
                      150+
                    </dd>
                  </div>
                  <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-700">
                      Total Rentals
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-gray-900">
                      20+
                    </dd>
                  </div>
                  <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-700">
                      Registered Users
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-gray-900">
                      35+
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
