// src/components/CTA.jsx
import React from "react";
import { Link } from "react-router-dom";
import CTAImg from "../assets/CTAImg.png";
import RoughAnnotation from "./RoughAnnotation";

const CTA = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Image at the top */}
          <div className="mb-5 flex justify-center">
            <img
              src={CTAImg} // Replace with your image path
              alt="Dream House"
              className="h-48 w-auto object-contain rounded-lg"
            />
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-space font-semibold mb-4">
            Ready to Find Your{" "}
            <span className="text-3xl md:text-4xl">
              <RoughAnnotation
                text="Dream Home"
                type="underline"
                color="#15803d"
              />
            </span>{" "}
            ?
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Browse our exclusive listings and start your journey to the perfect
            rental today.
          </p>

          {/* Call to Action Button */}
          <div className="mx-auto">
            <Link to="/all-houses">
              <button
                type="button"
                className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Explore Available Houses <span aria-hidden="true">&rarr;</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
