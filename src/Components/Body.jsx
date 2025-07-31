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

      {/* Features */}
      <section
        id="services"
        className="mx-auto px-4 space-y-6 bg-gray-100 py-8 md:py-12 lg:py-20"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-bold text-gray-900 text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Features
          </h2>
          <p className="max-w-[85%] leading-normal text-gray-700 text-muted-foreground sm:text-lg sm:leading-7">
            This vehicle rental app offers real-time availability, customizable
            booking options, and tailored vehicle suggestions based on your
            preferences. Enjoy secure transactions, easy scheduling, and
            responsive support for a smooth rental experience.
          </p>
        </div>

        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 text-slate-700">
          <div
            className="relative overflow-hidden rounded-lg border border-gray-300
 bg-white select-none hover:shadow-lg hover:shadow-teal-200 p-2"
          >
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-slate-700"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 12l4-4H8v4z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Wide Vehicle Selection</h3>
                <p className="text-sm text-muted-foreground">
                  Choose from a variety of vehicles, that suits your needs.
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-gray-300 bg-white select-none hover:shadow-lg hover:shadow-teal-200 p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-slate-700"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a8 8 0 108 8H10V2z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Flexible Rental Durations</h3>
                <p className="text-sm text-muted-foreground">
                  Options for flexible rentals, for customers based on their
                  usage and budget.
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-gray-300 bg-white select-none hover:shadow-lg hover:shadow-teal-200 p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-slate-700"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v2H2V6zm0 4h16v6a2 2 0 01-2 2H4a2 2 0 01-2-2v-6z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Secure Online Payment</h3>
                <p className="text-sm text-muted-foreground">
                  Fast, safe, and encrypted transactions for your rentals.
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-gray-300 bg-white select-none hover:shadow-lg hover:shadow-teal-200 p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-slate-700"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M4 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V8l-5-5H4z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Easy Booking</h3>
                <p className="text-sm text-muted-foreground">
                  Book your desired car or bike in just a few clicks.
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-gray-300 bg-white select-none hover:shadow-lg hover:shadow-teal-200 p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-slate-700"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.96h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448 1.287 3.96c.3.921-.755 1.688-1.54 1.117L10 13.011l-3.372 2.211c-.784.57-1.838-.196-1.539-1.117l1.286-3.96-3.37-2.448c-.783-.57-.38-1.81.588-1.81h4.162l1.286-3.96z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Reviews & Ratings</h3>
                <p className="text-sm text-muted-foreground">
                  Check real feedback from users before renting.
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-gray-300 bg-white select-none hover:shadow-lg hover:shadow-teal-200 p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-slate-700"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M4 3a2 2 0 00-2 2v2h4V3H4zm6 0h6a2 2 0 012 2v2h-8V3zm8 6v2h-4V9h4zM2 9h4v2H2V9zm4 4v4H4a2 2 0 01-2-2v-2h4zm2 0h8v4a2 2 0 01-2 2H8v-6z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">24/7 Customer Support</h3>
                <p className="text-sm text-muted-foreground">
                  Round-the-clock assistance for bookings, roadside emergencies,
                  and rental support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Body;
