import React from "react";

function AllCategory() {
  return (
    <div className="bg-gray-100">
      <section
        id="Projects"
        className="px-6 md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center gap-y-4 gap-x-0 mt-2 mb-5 ml-24 mr-24"
      >
        <div className="w-54 bg-white border border-gray-200 shadow-lg rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <Link To="#">
            <img
              src="https://cdn.riderly.com/storage/media/img/bikes/Honda__Dio_100.png"
              alt="Product"
              className="h-60 w-60 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-64 text-center">
              <span className="text-gray-700 uppercase text-base font-semibold tracking-widest">
                Scooter
              </span>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default AllCategory;
