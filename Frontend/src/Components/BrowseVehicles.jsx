import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const categories = ["All", "Bike", "Scooter", "Car"];

function BrowseVehicles() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { isPending, error, data } = useQuery({
    queryKey: ["browsevehicles"],
    queryFn: () =>
      fetch("http://localhost:3000/api/vehicles/get-vehicles").then((res) =>
        res.json()
      ),
  });

  const navigate = useNavigate();

  // Filter based on category
  const filteredData = data?.filter((dest) => {
    if (selectedCategory === "All") return true;

    // Support array or string category
    if (Array.isArray(dest.category)) {
      return dest.category.some(
        (cat) => cat.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    return dest.category?.toLowerCase() === selectedCategory.toLowerCase();
  });

  const truncateDescription = (desc, limit = 25) => {
    if (!desc) return "";
    let words = desc.split(" ");
    return words.length > limit
      ? words.slice(0, limit).join(" ") + "..."
      : desc;
  };

  return (
    <div className="w-full mt-8 mb-8">
      <button
        type="submit"
        className="w-[1310px] bg-cyan-500 text-white py-2 rounded-md mb-6 cursor-auto ml-26 font-os text-xl"
      >
        Browse Vehicles By Category
      </button>

      <ul className="flex justify-center items-center gap-4 flex-wrap">
        {categories.map((category) => (
          <li key={category}>
            <button
              onClick={() => {
                console.log("Clicked category:", category);
                setSelectedCategory(category);
              }}
              className={`px-6 py-2 rounded-full font-medium shadow-sm transition-all duration-200 ${selectedCategory === category
                ? "bg-cyan-600 text-white hover:bg-cyan-700"
                : "border border-cyan-600 text-cyan-600 bg-white hover:bg-cyan-600 hover:text-white"
                }`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>

      {/* Loading State */}
      {isPending && (
        <div className="flex justify-center items-center mt-2">
          <img src="/spinner.svg" alt="Loading" className="h-15 w-15" />
        </div>
      )}

      {/* Error State */}
      {error && <p className="text-center text-red-500">{error.message}</p>}

      {/* Vehicles Grid */}
      {!isPending && !error && (
        <section
          id="Projects"
          className="px-6 md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center gap-y-16 gap-x-10 mt-6 mb-5"
        >
          {filteredData?.map((item) => (
            <Link
              to={`/product/${item.id}`}
              key={item.id}
              className="w-64 bg-white border border-gray-200 shadow-lg rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                className="h-64 w-64 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-64">
                <span className="text-gray-700 mr-3 uppercase text-xs">
                  {item.category}
                </span>
                <p className="text-lg font-bold text-gray-900 truncate block capitalize">
                  {item.name}
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-gray-900 cursor-auto my-3">
                    {item.price}
                  </p>
                  <div className="ml-auto">
                    <button className="bg-cyan-500 text-white px-3 py-1 rounded hover:bg-cyan-700 transition duration-300">
                      View
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </section>
      )}
    </div>
  );
}

export default BrowseVehicles;
