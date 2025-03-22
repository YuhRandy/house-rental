// src/components/HouseCard.jsx
import React from "react";
import "./HouseCard.css";
import { Link } from "react-router-dom";
import { PiArrowCircleUpRight } from "react-icons/pi";

const HouseCard = ({ house }) => {
  return (
    <Link to={`/house/${house.id}`}>
      <div className="house-card">
        <div className="img-container">
          <img src={house.image} alt={house.type} />
        </div>

        <div className="flex justify-between align-center px-2 my-5">
          <h2 className="font-medium text-2xl">{house.type}</h2>
          <PiArrowCircleUpRight className="h-8 w-8 text-green-700 hover:text-green-800" />
        </div>
        <p className="ps-2 mb-1">
          <span className="font-medium">Rent</span>:{" "}
          {house.rent.toLocaleString()} XAF/month
        </p>
        <p className="ps-2">
          <span className="font-medium">Location</span>: {house.location}
        </p>
      </div>
    </Link>
  );
};

export default HouseCard;
