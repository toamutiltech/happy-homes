"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const images = [
  { src: "/hero-1.jpg", title: "Light House NY", details: "3 Bed • 2 Bath • 2200 Sq Ft", price: "$3,272" },
  { src: "/hero-2.jpg", title: "Modern Villa", details: "4 Bed • 3 Bath • 3000 Sq Ft", price: "$4,500" },
  { src: "/hero-4.jpg", title: "Cozy Apartment", details: "2 Bed • 1 Bath • 1200 Sq Ft", price: "$2,100" }
];

const properties = [
  { type: "Apartment", img: "/home-apartment.jpg", details: "2 Bed • 2 Bath • 1500 Sq Ft", price: "$2,500" },
  { type: "Office", img: "/home-office.jpg", details: "500 Sq Ft • Prime Location", price: "$1,800" },
  { type: "Classic Home", img: "/home-3.jpg", details: "3 Bed • 2 Bath • 2000 Sq Ft", price: "$3,200" },
  { type: "Mansion", img: "/home-4.jpg", details: "2 Bed • 2 Bath • 1500 Sq Ft", price: "$3,500" },
  { type: "Pen House", img: "/home-7.jpg", details: "500 Sq Ft • Prime Location", price: "$4,800" },
  { type: "Duplex", img: "/home-6.jpg", details: "3 Bed • 2 Bath • 2000 Sq Ft", price: "$9,200" },
];

const lists = [
  { type: "Apartment", img: "/home-apartment.jpg", details: "2 Bed • 2 Bath • 1500 Sq Ft", price: "$2,500" },
  { type: "Office", img: "/home-office.jpg", details: "500 Sq Ft • Prime Location", price: "$1,800" },
  { type: "Classic Home", img: "/home-3.jpg", details: "3 Bed • 2 Bath • 2000 Sq Ft", price: "$3,200" },
  { type: "Mansion", img: "/home-4.jpg", details: "2 Bed • 2 Bath • 1500 Sq Ft", price: "$3,500" },
  { type: "Pen House", img: "/home-7.jpg", details: "500 Sq Ft • Prime Location", price: "$4,800" },
  { type: "Duplex", img: "/home-6.jpg", details: "3 Bed • 2 Bath • 2000 Sq Ft", price: "$9,200" },
  { type: "Mansion", img: "/home-4.jpg", details: "2 Bed • 2 Bath • 1500 Sq Ft", price: "$3,500" },
  { type: "Pen House", img: "/home-7.jpg", details: "500 Sq Ft • Prime Location", price: "$4,800" },
  { type: "Duplex", img: "/home-6.jpg", details: "3 Bed • 2 Bath • 2000 Sq Ft", price: "$9,200" },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="min-h-screen bg-gradient-to-r text-gray-900">
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-blue-600">Happy Homes</h1>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            {["home", "listing", "contact"].map((tab) => (
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
              {["home", "listing", "contact"].map((tab) => (
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
            <div className="relative w-full h-screen">
              <Image
                src={images[currentImageIndex].src}
                alt="Hero Image"
                layout="fill"
                objectFit="cover"
                priority
              />
              <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-6">
                <motion.h2
                  className="text-5xl font-bold"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {images[currentImageIndex].title}
                </motion.h2>
                <p className="mt-4 text-lg">{images[currentImageIndex].details}</p>
                <p className="text-2xl font-bold mt-2">{images[currentImageIndex].price}</p>
                <motion.button
                  className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg text-lg font-semibold"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  View Property
                </motion.button>
              </div>
            </div>
          

   {/* Featured Properties */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Display Latest & Featured Properties</h2>
            <div className="mt-6 grid md:grid-cols-3 gap-6 px-6">
            {properties.map((property) => (
  <motion.div 
    key={property.type} 
    className="bg-white shadow-lg p-4 rounded-lg" 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    transition={{ duration: 0.5 }}
  >
    <img src={property.img} alt={property.type} className="w-full h-48 object-cover rounded-t-lg" />
    <h3 className="text-xl font-semibold mt-2">{property.type}</h3>
    <p className="text-gray-600">{property.details}</p>
    <p className="text-blue-600 font-bold mt-1">{property.price}</p>
  </motion.div>
))}
            </div>
        </section>
            <motion.button
              className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg text-lg font-semibold"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActiveTab("listing")} // Navigate to Listings Tab
            >
              Browse Listings
            </motion.button>
          </motion.div>
          
          
        )}

                {activeTab === "listing" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="p-10"
                  >
                    <h2 className="text-4xl font-bold text-blue-600">🏗️ Our Listing</h2>
                    <p className="mt-4 text-lg text-gray-700">
                      Discover our latest real estate developments and properties.
                    </p>
                    <div className="mt-6 grid md:grid-cols-3 gap-6 px-6">
            {lists.map((list) => (
  <motion.div 
    key={list.type} 
    className="bg-white shadow-lg p-4 rounded-lg" 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    transition={{ duration: 0.5 }}
  >
    <img src={list.img} alt={list.type} className="w-full h-48 object-cover rounded-t-lg" />
    <h3 className="text-xl font-semibold mt-2">{list.type}</h3>
    <p className="text-gray-600">{list.details}</p>
    <p className="text-blue-600 font-bold mt-1">{list.price}</p>
  </motion.div>
))}
            </div>
                    <motion.button
                      className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg shadow-lg text-lg font-semibold"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      More Properties
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
