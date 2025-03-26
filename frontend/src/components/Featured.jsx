import HouseCard from "./HouseCard"; // Your existing HouseCard component
import data from "../data.json"; // Your house data
const Featured = () => {
  // Get first 3 houses
  const featuredHouses = data.slice(0, 3);
  return (
    <section className="py-5 lg:px-8 px-auto">
      <h1 className="text-3xl md:text-4xl font-space font-semibold ps-2 pb-3">
        Featured Houses
      </h1>
      <div className="flex flex-wrap justify-evenly">
        {featuredHouses.map((house) => (
          <HouseCard key={house.id} house={house} />
        ))}
      </div>
    </section>
  );
};

export default Featured;
