import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

function BrowseVehicles() {
  const { isPending, error, data } = useQuery({
    queryKey: ["browsevehicles"],
    queryFn: () =>
      fetch("https://api-vehicles.vercel.app/api/vehicles").then((res) =>
        res.json()
      ),
  });

  const truncateDescription = (desc, limit = 25) => {
    if (!desc) return "";
    let words = desc.split(" ");
    return words.length > limit
      ? words.slice(0, limit).join(" ") + "..."
      : desc;
  };

  return (
    <div className="w-full mt-10 mb-5">
      <button
        type="submit"
        className="w-[1310px] bg-cyan-500 text-white py-2 rounded-md mb-8 cursor-auto ml-26"
      >
        Browse Vehicles
      </button>

      {/* Loading State */}
      {isPending && (
        <p className="text-center text-lg font-semibold">
          Fetching Vehicles . . .
        </p>
      )}

      {/* Error State */}
      {error && <p className="text-center text-red-500">{error.message}</p>}

      {/* Vehicles Grid */}
      {!isPending && !error && (
        <section
          id="Projects"
          className="px-6 md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center gap-y-16 gap-x-10 mt-2 mb-5"
        >
          {data.map((item) => (
            <Link
              to={`/product/${item.id}`}
              key={item.id}
              className="w-64 bg-white border border-gray-200 shadow-lg rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-64 w-64 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-64">
                <span className="text-gray-700 mr-3 uppercase text-xs">
                  {item.category}
                </span>
                <p className="text-lg font-bold text-gray-900 truncate block capitalize">
                  {item.title}
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-gray-900 cursor-auto my-3">
                    {item.price}
                  </p>
                  <div class="ml-auto">
                    <button class="bg-cyan-500 text-white px-3 py-1 rounded hover:bg-cyan-700 transition duration-300">
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
