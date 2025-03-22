// src/pages/AllHouses.jsx
import React, { useEffect, useState } from "react";
import data from "../data.json"; // Import the JSON file
import HouseCard from "../components/HouseCard"; // Import the HouseCard component

const AllHouses = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    // Simulate fetching data from a database
    setHouses(data);
  }, []);

  return (
    <div className="px-8 pt-8">
      <h1 className="text-3xl md:text-4xl font-semibold my-5">
        Available Houses
      </h1>
      <hr class="border-t border-gray-300 mb-5" />
      <div className="flex flex-wrap justify-evenly">
        {houses.map((house) => (
          <HouseCard key={house.id} house={house} />
        ))}
      </div>
    </div>
  );
};

export default AllHouses;
