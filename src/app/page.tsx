"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { FaBuilding, FaHome, FaCity } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const images = [
  { src: "/hero-1.jpg", title: "Light House NY", details: "3 Bed • 2 Bath • 2200 Sq Ft", price: "$3,272" },
  { src: "/hero-2.jpg", title: "Modern Villa", details: "4 Bed • 3 Bath • 3000 Sq Ft", price: "$4,500" },
  { src: "/hero-4.jpg", title: "Cozy Apartment", details: "2 Bed • 1 Bath • 1200 Sq Ft", price: "$2,100" }
];

const properties = [
  { type: "Apartment", img: "/home-apartment.jpg", details: "2 Bed • 2 Bath • 1500 Sq Ft", price: "$2,500" },
  { type: "Office", img: "/home-2.jpg", details: "500 Sq Ft • Prime Location", price: "$1,800" },
  { type: "Classic Home", img: "/home-3.jpg", details: "3 Bed • 2 Bath • 2000 Sq Ft", price: "$3,200" },
  { type: "Mansion", img: "/home-4.jpg", details: "2 Bed • 2 Bath • 1500 Sq Ft", price: "$3,500" },
  { type: "Pen House", img: "/home-7.jpg", details: "500 Sq Ft • Prime Location", price: "$4,800" },
  { type: "Duplex", img: "/home-6.jpg", details: "3 Bed • 2 Bath • 2000 Sq Ft", price: "$9,200" },
];

const lists = [
  { type: "Apartment", img: "/home-apartment.jpg", details: "2 Bed • 2 Bath • 1500 Sq Ft", price: "$2,500" },
  { type: "Office", img: "/home-2.jpg", details: "500 Sq Ft • Prime Location", price: "$1,800" },
  { type: "Classic Home", img: "/home-3.jpg", details: "3 Bed • 2 Bath • 2000 Sq Ft", price: "$3,200" },
  { type: "Mansion", img: "/home-4.jpg", details: "2 Bed • 2 Bath • 1500 Sq Ft", price: "$3,500" },
  { type: "Pen House", img: "/home-7.jpg", details: "500 Sq Ft • Prime Location", price: "$4,800" },
  { type: "Duplex", img: "/home-6.jpg", details: "3 Bed • 2 Bath • 2000 Sq Ft", price: "$9,200" },
  { type: "Basic", img: "/home-5.jpg", details: "2 Bed • 2 Bath • 1500 Sq Ft", price: "$3,500" },
  { type: "Luxurious Home", img: "/home-9.jpg", details: "500 Sq Ft • Prime Location", price: "$4,800" },
  { type: "Mama's Home", img: "/home-10.jpg", details: "3 Bed • 2 Bath • 2000 Sq Ft", price: "$9,200" },
];

const agents = [
  { name: "Jimmy Changa", img: "/agent-1.jpg", role: "Real Estate Agent" },
  { name: "Buster Hyman", img: "/agent-2.jpg", role: "Real Estate Agent" },
  { name: "Buster Hyman", img: "/agent-3.jpg", role: "Real Estate Agent" },
  { name: "Holly Graham", img: "/agent-4.jpg", role: "Real Estate Agent" },
];

const propertyTypes = [
  { name: "Home & Appartment", icon: "/icon-home.png" },
  { name: "Vila", icon: "/icon-vila.png" },
  { name: "Studio", icon: "/icon-studio.png" },
  { name: "Office", icon: "/icon-office.png" },
];

const services = [
  {
    icon: <FaBuilding size={40} />,
    title: "Sell home or office",
    description:
      "Get started by choosing from one of our pre-built page templates to showcase your properties.",
  },
  {
    icon: <FaHome size={40} />,
    title: "Rent home or office",
    description:
      "Get started by choosing from one of our pre-built page templates to showcase your properties.",
  },
  {
    icon: <FaCity size={40} />,
    title: "Find next",
    description:
      "Get started by choosing from one of our pre-built page templates to showcase your properties.",
  },
];


export default function HomePage() {
  const [activeTab, setActiveTab] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % agents.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + agents.length) % agents.length);
  };

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
        <p className="mt-6 text-gray-600">You Love what you see, get one for yourself</p>
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

            <section className=" mt-6 relative py-16 text-center bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/hero-3.jpeg')" }}>
      <div className="absolute inset-0  bg-opacity-90"></div>
      <div className="relative z-10 max-w-5xl mx-auto text-white px-6">
        <h2 className="text-4xl font-bold mb-10">How we help people?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-blue-500 p-6 rounded-lg shadow-lg text-white">
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>


    <div className="w-full">
      {/* Explore Property Types */}
      <section className="mt-6 flex flex-col md:flex-row items-center justify-between bg-gray-100 p-8">
        <div>
          <h2 className="text-3xl font-bold">Explore by Property Type</h2>
          <p className="text-gray-600 mt-2">
            Get started by choosing from one of our pre-built page templates to showcase your properties
          </p>
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-lg">
            View All Property
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white p-6 rounded-lg shadow-lg">
          {propertyTypes.map((property, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <img src={property.icon} alt={property.name} className="w-12 h-12" />
              <p className="mt-2 font-semibold">{property.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Agents Section */}
      <section className="text-center my-12">
        <h2 className="text-3xl font-bold">Our Agents</h2>
        <p className="text-gray-600">Get started by choosing from one of our pre-built page templates to showcase your properties</p>

        <div className="relative mt-6 w-full overflow-hidden">
          <div className="flex items-center justify-center space-x-4">
            <button onClick={prevSlide} className="text-gray-500 hover:text-blue-600">
              <FaArrowLeft size={24} />
            </button>

            <motion.div
              key={index}
              className="flex space-x-6 overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {agents.slice(index, index + 3).map((agent, i) => (
                <div key={i} className="bg-white shadow-lg p-4 rounded-lg">
                  <img src={agent.img} alt={agent.name} className="w-40 h-40 object-cover rounded-full mx-auto" />
                  <h3 className="text-lg font-semibold mt-2">{agent.name}</h3>
                  <p className="text-gray-600">{agent.role}</p>
                </div>
              ))}
            </motion.div>

            <button onClick={nextSlide} className="text-gray-500 hover:text-blue-600">
              <FaArrowRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Subscribe Newsletter */}
      <section className="flex flex-col md:flex-row items-center justify-between bg-blue-900 text-white p-8">
        <div>
          <h2 className="text-2xl font-bold">Subscribe Newsletter</h2>
          <p className="mt-2">Get started by choosing from one of our pre-built page templates to showcase your properties</p>
          <div className="mt-4 flex">
            <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-l-lg text-black w-64" />
            <button className="px-6 py-2 bg-blue-600 rounded-r-lg">Subscribe</button>
          </div>
        </div>
        <img src="/luxury-house.jpg" alt="Luxury House" className="w-80 rounded-lg mt-4 md:mt-0" />
      </section>
    </div>
    
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
