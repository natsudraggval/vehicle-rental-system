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
    <div className="w-full mb-5 bg-gray-50">
      <div className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-8">
        Categories
      </div>

      {/* Loading State */}
      {isPending && (
        <div className="flex justify-center items-center mt-2">
          <img src="/spinner.svg" alt="Loading" className="h-15 w-15" />
        </div>
      )}

      {/* Error State */}
      {error && <p className="text-center text-red-500">{error.message}</p>}

      {/* Category Grid */}
      {!isPending && !error && (
        <div className="bg-gray-50">
          <section
            id="Projects"
            className="px-6 md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center gap-y-4 gap-x-0 mt-2 ml-34 mr-34"
          >
            {data.map((item) => (
              <Link
                to={`/product/${item.id}`}
                key={item.id}
                className="w-54 bg-white border border-gray-200 shadow-lg rounded-xl duration-500 hover:scale-105 hover:shadow-xl cursor-auto"
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
