// src/components/Step.jsx
import React from "react";
import RoughAnnotation from "./RoughAnnotation";

const Step = ({ number, title, description, isLast }) => {
  return (
    <div className="flex relative pb-10">
      {/* Vertical line (except for last step) */}
      {!isLast && (
        <div className="absolute h-full w-0.5 bg-green-200 left-5 top-6"></div>
      )}

      {/* Step number circle */}
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-700 flex items-center justify-center text-white font-bold z-10">
        {number}
      </div>

      {/* Step content */}
      <div className="ml-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  );
};

const Steps = () => {
  const rentalSteps = [
    {
      number: 1,
      title: "Browse Listings",
      description: "Explore our curated selection of available houses",
    },
    {
      number: 2,
      title: "Submit Application",
      description: "Complete the rental application form with your details",
    },
    {
      number: 3,
      title: "Schedule Viewing",
      description: "Contact us to arrange an in-person or virtual tour",
    },

    {
      number: 4,
      title: "Sign Agreement",
      description: "Review and sign the rental contract documents",
    },
    {
      number: 5,
      title: "Move In",
      description: "Complete payment and receive your keys",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold font-space text-center mx-auto mb-8 ">
          Become a House owner in
          <br />
          <RoughAnnotation
            className="text-dark"
            text=" 5 easy steps "
            type="box"
            color="#15803d"
          />
        </h2>
        <div className="max-w-3xl mx-auto">
          {rentalSteps.map((step, index) => (
            <Step
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              isLast={index === rentalSteps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
