import React from "react";

function Features() {
  return (
    <section
      id="services"
      className="mx-auto px-4 space-y-6 bg-gray-200 py-8 md:py-12 lg:py-20"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-gray-900 text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
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
                Options for flexible rentals, for customers based on their usage
                and budget.
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
  );
}

export default Features;
