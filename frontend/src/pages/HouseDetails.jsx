// src/pages/HouseDetails.jsx
import React from "react";
import { Link, useParams } from "react-router-dom";
import data from "../data.json";
import { IoShareSocialOutline } from "react-icons/io5";
import BackButton from "../components/Backbutton";
import { IoBedOutline } from "react-icons/io5";
import { PiBathtub } from "react-icons/pi";
import { RiSofaLine } from "react-icons/ri";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

const HouseDetails = () => {
  const { id } = useParams();
  const house = data.find((house) => house.id === parseInt(id));

  if (!house) {
    return <div>House not found</div>;
  }

  return (
    <div className="px-8 pt-8">
      <div className="flex justify-between items-center my-5">
        <BackButton />
        <h1 className="text-2xl md:text-4xl font-semibold ">House Details</h1>
        <IoShareSocialOutline className="h-7 w-7" />
      </div>
      <hr className="border-t border-gray-300 mb-5" />
      {/* image */}
      <div className="image">
        <img className="w-500 h-50 mb-5" src={house.image} alt={house.type} />
      </div>

      <div className="flex flex-col lg:flex-row sm:gap-2 gap-8 ">
        {/* Info */}
        <div className="pe-4">
          <h2 className="text-2xl md:text-3xl my-3">{house.type}</h2>
          <div className="flex justify-between mb-3 p-0">
            <div className="flex gap-1 md:gap-4 items-center flex-col md:flex-row">
              <p className="flex justify-between items-center gap-2">
                <IoBedOutline className="w-7 h-7" />{" "}
                {house.bedroom.toLocaleString()} Bedroom
              </p>
              <p className="flex justify-between items-center gap-2">
                <PiBathtub className="w-7 h-7" />{" "}
                {house.bathroom.toLocaleString()} Bathroom
              </p>
              <p className="flex justify-between items-center gap-2">
                <RiSofaLine className="w-7 h-7" />
                {house.livingroom.toLocaleString()} Livingroom
              </p>
            </div>
          </div>
          <p>
            <span className="font-medium">Rent</span>{" "}
            {house.rent.toLocaleString()} XAF/month
          </p>
          <p>
            <span className="font-medium">Location</span>: {house.location}
          </p>

          <div>
            <p className="mt-3">
              <span className="font-semibold">Description</span>:{" "}
              {house.characteristics.join(", ")}
            </p>
            <p>{house.description}</p>
          </div>
        </div>
        {/* payment prompt */}
        <div className="flex flex-col lg:border-s lg:border-t-0 border-t pt-8 lg:pt-0  border-gray-300 lg:ps-4">
          <p>Rent this home today!</p>
          <h2 className="md:text-3xl font-semibold text-2xl">
            {house.rent.toLocaleString()} XAF/month
          </h2>
          <p className="mt-3">
            We accept payments via MTN Momo, Orange Money and Bank transfer
          </p>
          <p>
            We offer a secured payment system so trust the process and get your
            house in a few clicks.
          </p>
          <Link to={`/house/${house.id}/payment`}>
            <button
              type="button"
              className="mt-3 w-full h-14 md:h-auto md:w-1/2 justify-center flex items-center gap-2 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-semibold rounded-full text-md px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              <IoShieldCheckmarkOutline className="w-6 h-6" />
              Pay Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HouseDetails;
