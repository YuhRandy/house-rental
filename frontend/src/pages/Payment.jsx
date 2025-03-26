// src/pages/HouseDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import { IoShareSocialOutline } from "react-icons/io5";
import BackButton from "../components/Backbutton";
import "../components/HouseCard.css";
import RentalForm from "../components/RentalForm";

const Payment = () => {
  const { id } = useParams();
  const house = data.find((house) => house.id === parseInt(id));

  if (!house) {
    return <div>House not found</div>;
  }

  return (
    <div className="px-5 pt-8">
      <div className="flex justify-between items-center my-5">
        <BackButton />
        <h1 className="text-2xl md:text-4xl font-semibold ">Payment</h1>
        <IoShareSocialOutline className="h-7 w-7" />
      </div>
      <hr className="border-t border-gray-300 mb-5" />

      <div className="flex flex-col lg:flex-row sm:gap-2 gap-10 lg:px-30">
        {/* Card */}
        <div className="payment-house-card h-150 w-full lg:w-3/5">
          <div className="img-container h-110">
            <img src={house.image} alt={house.type} />
          </div>

          <div className="flex justify-between align-center px-2 my-5">
            <h2 className="font-medium text-2xl">{house.type}</h2>
          </div>
          <p className="ps-2 mb-1">
            <span className="font-medium">Rent</span>:{" "}
            {house.rent.toLocaleString()} XAF/month
          </p>
          <p className="ps-2">
            <span className="font-medium">Location</span>: {house.location}
          </p>
        </div>
        {/* payment prompt */}
        <div className="flex flex-col  lg:border-t-0 border-t pt-8 lg:pt-0  border-gray-300 lg:ps-4">
          <p>Rent this home today!</p>
          <h2 className="md:text-3xl font-semibold text-2xl">
            Secured Checkout
          </h2>
          <p className="mb-3 text-sm">
            Checkout in a few clicks and come home!
          </p>
          <RentalForm house={house} />
        </div>
      </div>
    </div>
  );
};

export default Payment;
