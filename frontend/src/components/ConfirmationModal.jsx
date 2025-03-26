// src/components/ConfirmationModal.jsx
import React, { useEffect } from "react";
import confetti from "canvas-confetti";

const ConfirmationModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      // Trigger fireworks for 2 seconds
      const duration = 4 * 1000; // 2 seconds
      const animationEnd = Date.now() + duration;

      const randomInRange = (min, max) => Math.random() * (max - min) + min;

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti({
          startVelocity: 30,
          spread: 360,
          ticks: 60,
          origin: { x: randomInRange(0.1, 0.9), y: Math.random() - 0.2 },
          particleCount,
        });
      }, 250);

      // Cleanup
      return () => clearInterval(interval);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">🎉 Congratulations! 🎉</h2>
        <p className="mb-4">
          Your rental request has been submitted successfully!
        </p>
        <p className="mb-6">Would you like to explore more houses?</p>
        <div className="flex justify-center gap-4">
          <a href="/all-houses">
            <button
              onClick={onClose}
              className="px-4 py-2 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-semibold rounded-full text-md px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Explore More Houses
            </button>
          </a>
          <a href="/">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-600 text-white hover:bg-gray-700 rounded-full text-md px-5 py-2.5 text-center me-2 mb-2"
            >
              Close
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
