import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

function AllCategory() {
  const { isPending, error, data } = useQuery({
    queryKey: ["allcategory"],
    queryFn: () =>
      fetch("https://api-vehicles.vercel.app/api/category").then((res) =>
        res.json()
      ),
  });

  return (
    <div className="w-full mt-10 mb-5">
      <button
        type="submit"
        className="w-[1310px] bg-cyan-500 text-white py-2 rounded-md mb-8 cursor-auto ml-26"
      >
        Categories
      </button>

      {/* Loading State */}
      {isPending && (
        <p className="text-center text-lg font-semibold text-gray-900">
          Fetching Vehicles . . .
        </p>
      )}

      {/* Error State */}
      {error && <p className="text-center text-red-500">{error.message}</p>}

      {/* Category Grid */}
      {!isPending && !error && (
        <div className="bg-gray-100">
          <section
            id="Projects"
            className="px-6 md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center gap-y-4 gap-x-0 mt-2 mb-5 ml-24 mr-24"
          >
            {data.map((item) => (
              <Link
                to={`/product/${item.id}`}
                key={item.id}
                className="w-54 bg-white border border-gray-200 shadow-lg rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-60 w-60 object-cover rounded-t-xl"
                />
                <div className="px-4 py-3 w-64 text-center">
                  <span className="text-gray-700 uppercase text-base font-semibold tracking-widest">
                    {item.category}
                  </span>
                </div>
              </Link>
            ))}
          </section>
        </div>
      )}
    </div>
  );
}

export default AllCategory;
