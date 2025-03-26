// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
// import Logo from "./logo";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* App Info Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">FindHome</h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner for finding your dream home.
            </p>
            {/* <p className="text-gray-500 text-sm">
              © {currentYear} FindHome. All rights reserved.
            </p> */}
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/all-houses"
                  className="text-gray-400 hover:text-white transition"
                >
                  All Houses
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="text-gray-400 not-italic">
              <p className="mb-2">123 Rental Street, Bambili</p>
              <p className="mb-2">Cameroon</p>
              <p className="mb-2">Email: info@findhome.com</p>
              <p>Phone: +237 6XX XXX XXX</p>
            </address>

            {/* Social Media Links */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">Facebook</span>
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">Twitter</span>
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">Instagram</span>
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">LinkedIn</span>
                <i className="fab fa-linkedin text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p className="text-gray-500 text-sm">
            © {currentYear} FindHome. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
