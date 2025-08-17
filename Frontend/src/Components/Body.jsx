import React from "react";

function Body() {
  return (
    <>
      {/* Background Image Section  */}
      <div
        className="bg-cover bg-center h-[640px] w-full"
        style={{ backgroundImage: "url('/image/hero-image.jpg')" }}
      >
        <div className="flex flex-col items-start h-full px-6 md:px-20 md:ml-16 pt-28">
          <h1 className="text-gray-900 text-6xl tracking-wide font-bold leading-tight mb-2">
            Fast. Easy. <br />
            Reliable Rides.
          </h1>
          <div className="text-gray-700 text-lg font-light leading-snug">
            <p>A comprehensive vehicle rental platform designed for</p>
            <p>convenient access across Nepal.</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gray-50 py-16 pt-32">
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
