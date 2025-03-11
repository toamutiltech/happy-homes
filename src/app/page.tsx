"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="min-h-screen bg-gradient-to-r text-gray-900">
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-blue-600">Happy Homes</h1>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            {["home", "projects", "contact"].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-lg font-semibold transition-all ${
                  activeTab === tab ? "text-blue-600 scale-110" : "text-gray-700"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="flex flex-col items-center space-y-4 py-4">
              {["home", "projects", "contact"].map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setMenuOpen(false);
                  }}
                  className={`text-lg font-semibold transition-all ${
                    activeTab === tab ? "text-blue-600 scale-110" : "text-gray-700"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Main Content */}
      <div className="pt-24 px-6 text-center">
        {activeTab === "home" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="p-10"
          >
            <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/hero-image.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-6">
          <motion.h2 className="text-5xl font-bold" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            Light House NY
          </motion.h2>
          <p className="mt-4 text-lg">3 Bed • 2 Bath • 2200 Sq Ft</p>
          <p className="text-2xl font-bold mt-2">$3,272</p>
          <motion.button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg text-lg font-semibold" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            View Property
          </motion.button>
        </div>
      </div>

      {/* Featured Properties */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Display Latest & Featured Properties</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6 px-6">
          {["Apartment", "Office", "Classic Home"].map((type) => (
            <motion.div key={type} className="bg-white shadow-lg p-4 rounded-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <img src={`/property-${type.toLowerCase()}.jpg`} alt={type} className="w-full h-48 object-cover rounded-t-lg" />
              <h3 className="text-xl font-semibold mt-2">${type}</h3>
              <p className="text-gray-600">2 Bedroom • 2 Bathroom • 1500 Sq Ft</p>
            </motion.div>
          ))}
        </div>
      </section>
            <motion.button
              className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg text-lg font-semibold"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Browse Listings
            </motion.button>
          </motion.div>
        )}

        {activeTab === "projects" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="p-10"
          >
            <h2 className="text-4xl font-bold text-blue-600">🏗️ Our Projects</h2>
            <p className="mt-4 text-lg text-gray-700">
              Discover our latest real estate developments and properties.
            </p>
            <motion.button
              className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg shadow-lg text-lg font-semibold"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              View Projects
            </motion.button>
          </motion.div>
        )}

        {activeTab === "contact" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="p-10"
          >
            <h2 className="text-4xl font-bold text-blue-600">📞 Contact Us</h2>
            <p className="mt-4 text-lg text-gray-700">
              Get in touch for more information about our properties.
            </p>
            <motion.button
              className="mt-6 px-6 py-3 bg-red-600 text-white rounded-lg shadow-lg text-lg font-semibold"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Get in Touch
            </motion.button>
          </motion.div>
        )}
        <footer className="bg-gray-800 text-white py-6 mt-12 text-center">
        <p>© 2025 Happy Homes. All Rights Reserved.</p>
      </footer>
    </div>
    </div>
  );
}
