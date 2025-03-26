// src/components/RentalForm.jsx
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConfirmationModal from "./ConfirmationModal";
import { ClipLoader } from "react-spinners";

const RentalForm = ({ house }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [loading, setLoading] = useState(false); // State to manage loading effect

  const duration = watch("duration", 1); // Default duration is 1 month
  const total = duration * house.rent;

  const onSubmit = async (data) => {
    setLoading(true); // Start loading

    const emailData = {
      ...data,
      total,
      houseType: house.type,
      houseLocation: house.location,
      houseId: house.id,
      rent: house.rent,
    };

    // Send email using EmailJS
    emailjs
      .send(
        "service_78mro1b", // Replace with your EmailJS service ID
        "template_5pvb4vg", // Replace with your EmailJS template ID
        emailData,
        "OKnVcBwh-LP1Prz4O" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          setIsModalOpen(true); // Open the modal on success

          console.log("EmailJS Response:", response);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          toast.error(
            "Failed to send rental request. Please check your internet connection and try again.",
            {
              position: "top-right",
              autoClose: 5000, // Close after 5 seconds
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            }
          );
        }
      );
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 w-full mx-auto"
      >
        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email", { required: "Email is required" })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Full Name Field */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            {...register("fullName", { required: "Full name is required" })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Telephone Field */}
        <div>
          <label
            htmlFor="telephone"
            className="block text-sm font-medium text-gray-700"
          >
            Telephone
          </label>
          <input
            id="telephone"
            type="tel"
            {...register("telephone", { required: "Telephone is required" })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.telephone && (
            <p className="text-red-500 text-sm mt-1">
              {errors.telephone.message}
            </p>
          )}
        </div>

        {/* Payment Method Field */}
        <div>
          <label
            htmlFor="paymentMethod"
            className="block text-sm font-medium text-gray-700"
          >
            Payment Method
          </label>
          <select
            id="paymentMethod"
            {...register("paymentMethod", {
              required: "Payment method is required",
            })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select payment method</option>
            <option value="Mobile Money (Momo)">Mobile Money (Momo)</option>
            <option value="Orange Money (OM)">Orange Money (OM)</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>
          {errors.paymentMethod && (
            <p className="text-red-500 text-sm mt-1">
              {errors.paymentMethod.message}
            </p>
          )}
        </div>

        {/* Duration Field */}
        <div>
          <label
            htmlFor="duration"
            className="block text-sm font-medium text-gray-700"
          >
            Duration (Months)
          </label>
          <input
            id="duration"
            type="number"
            min="1"
            defaultValue="1"
            {...register("duration", { required: "Duration is required" })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.duration && (
            <p className="text-red-500 text-sm mt-1">
              {errors.duration.message}
            </p>
          )}
        </div>

        {/* Total Field */}
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium text-gray-700">
            Total
          </label>
          <p className="mt-1 text-lg font-semibold">
            {total.toLocaleString()} XAF
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading} // Disable the button when loading
          className="mt-3 w-full h-14 md:h-auto  justify-center flex items-center gap-2 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-semibold rounded-full text-md px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          {loading ? (
            <>
              <ClipLoader color="#ffffff" size={22} />
              Loading...
            </>
          ) : (
            <>
              <IoShieldCheckmarkOutline className="w-6 h-6" />
              Pay Now
            </>
          )}
        </button>
      </form>
      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default RentalForm;
