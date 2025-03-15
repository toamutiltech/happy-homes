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
  { name: "Home & Appartment", icon: "/icons8-home-128.png" },
  { name: "Vila", icon: "/icons8-home-400.png" },
  { name: "Studio", icon: "/studio_4783008.png" },
  { name: "Office", icon: "/workspace_1599910.png" },
];

const services = [
  {
    icon: <FaBuilding size={40} />,
    title: "Sell home or office",
    description:
      "Selling Your Home or Office? Lets Make It Happen!",
  },
  {
    icon: <FaHome size={40} />,
    title: "Rent home or office",
    description:
      "Ready to Move In? Rent Your Home or Office Now!",
  },
  {
    icon: <FaCity size={40} />,
    title: "Find next",
    description:
      "Ready for Whats Next? Find Your Ideal Home or Office Now!",
  },
];


export default function HomePage() {
  const [activeTab, setActiveTab] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [index, setIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

    // Function to update number of items per slide
    const updateItemsPerSlide = () => {
      setItemsPerSlide(window.innerWidth < 768 ? 1 : 3);
    };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      const updateItemsPerSlide = () => {
        setItemsPerSlide(window.innerWidth < 768 ? 1 : 3);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Auto-change image every 5 seconds
  useEffect(() => {
    if (typeof window !== "undefined") {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [images.length]);

  // Toggle menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Slider functions
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
        <div className="flex items-center space-x-2">
            <img src="/icons8-home-128.png" alt="Happy Homes" className="h-8" />
            <h1 className="text-3xl font-extrabold text-blue-600">Happy Homes</h1>
          </div>
       

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
      <div className="text-center">
        {activeTab === "home" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        
          >
<div className="relative w-full h-[90vh] md:h-screen">
  <Image
    src={images[currentImageIndex].src}
    alt="Hero Image"
    fill
    className="w-full h-full object-cover"
    priority
  />
  
  {/* Overlay Content */}
  <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-4 md:px-6 w-full">
    <motion.h2
      className="text-3xl md:text-5xl font-bold w-full"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {images[currentImageIndex].title}
    </motion.h2>
    
    <p className="mt-3 text-base md:text-lg w-full">{images[currentImageIndex].details}</p>
    <p className="text-lg md:text-2xl font-bold mt-2 w-full">{images[currentImageIndex].price}</p>
    
    <motion.button
      className="mt-5 px-5 py-2 md:px-6 md:py-3 bg-blue-600 text-white rounded-lg shadow-lg text-base md:text-lg font-semibold"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      View Property
    </motion.button>
  </div>
</div>


          

   {/* Featured Properties */}
      <section className=" text-center">
        <h2 className="py-6 text-3xl font-bold text-white">Display Latest & Featured Properties</h2>
        <p className="mt-6 text-white">You Love what you see, get one for yourself</p>
            <div className="mt-6 grid md:grid-cols-3 gap-6 px-6 grid-cols-1 sm:grid-cols-2">
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

    <section className="text-center my-12">
  <h2 className="text-3xl font-bold text-white">Properties for Sale</h2>
  <p className="text-white">You can get one of our properties with just one click</p>

  <div className="relative mt-6 w-full overflow-hidden">
    <div className="flex items-center justify-center space-x-4">
      {/* Previous Slide Button */}
      <button onClick={prevSlide} className="text-gray-500 hover:text-blue-600">
        <FaArrowLeft size={24} />
      </button>

      {/* Motion div for sliding effect */}
      <motion.div
        key={index}
        className="flex space-x-6 overflow-hidden"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Dynamically render properties based on screen size */}
        {lists
          .slice(index, index + (window.innerWidth < 768 ? 1 : 3)) // Show 1 item on small screens, 3 on larger
          .map((list, i) => (
            <div key={i} className="bg-white shadow-lg p-4 rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              <img src={list.img} alt={list.type} className="w-full h-48 object-cover rounded-t-lg" />
              <h3 className="text-xl font-semibold mt-2">{list.type}</h3>
              <p className="text-gray-600">{list.details}</p>
              <p className="text-blue-600 font-bold mt-1">{list.price}</p>
            </div>
          ))}
      </motion.div>

      {/* Next Slide Button */}
      <button onClick={nextSlide} className="text-gray-500 hover:text-blue-600">
        <FaArrowRight size={24} />
      </button>
    </div>
  </div>
</section>



    <div className="w-full">
      {/* Explore Property Types */}
      <section className="mt-6 flex flex-col lg:flex-row items-center justify-between bg-gray-100 p-6 sm:p-8">
  {/* Left Section */}
  <div className="text-center lg:text-left mb-6 lg:mb-0">
    <h2 className="text-2xl sm:text-3xl font-bold">Explore by Property Type</h2>
    <p className="text-gray-600 mt-2 max-w-md">
      Discover Diverse Spaces, Explore by Property Type
    </p>
    <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition">
      View All Property
    </button>
  </div>

  {/* Right Section - Property Grid */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-lg lg:max-w-xl">
    {propertyTypes.map((property, i) => (
      <div key={i} className="flex flex-col items-center text-center">
        <img src={property.icon} alt={property.name} className="w-12 h-12 sm:w-14 sm:h-14" />
        <p className="mt-2 font-semibold text-sm sm:text-base">{property.name}</p>
      </div>
    ))}
  </div>
</section>


      {/* Our Agents Section */}
      <section className="text-center my-12">
        <h2 className="text-3xl font-bold text-white">Our Agents</h2>
        <p className="text-white">Your Property Journey Starts Here; Connect with Our Agent</p>

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
              {agents
              .slice(index, index + (window.innerWidth < 768 ? 1 : 3))
              .map((agent, i) => (
                <div key={i} className="bg-white shadow-lg p-4 rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
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
      <section className="flex flex-col md:flex-row items-center justify-between bg-blue-900 text-white p-6 md:p-8 space-y-6 md:space-y-0">
  {/* Text & Input Section */}
  <div className="text-center md:text-left w-full md:w-1/2">
    <h2 className="text-2xl font-bold">Subscribe to Our Newsletter</h2>
    <p className="mt-2">Be in the Know, Subscribe to Our Newsletter</p>

    {/* Email Input & Button */}
    <div className="mt-4 flex flex-col sm:flex-row items-center sm:items-stretch w-full max-w-lg">
      <input 
        type="email" 
        placeholder="Enter your email" 
        className="px-4 py-3 rounded-lg text-white bg-transparent w-full border border-white focus:border-gray-300 focus:ring-2 focus:ring-white placeholder-white sm:rounded-r-none"
      />
      <button className="w-full sm:w-auto mt-2 sm:mt-0 sm:ml-0 px-6 py-3 bg-blue-600 rounded-lg sm:rounded-l-none">
        Subscribe
      </button>
    </div>
  </div>

  {/* Image Section */}
  <div className="w-full md:w-1/2 flex justify-center">
    <img src="/hero-6.jpg" alt="Luxury House" className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg" />
  </div>
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
                    <h2 className="p-10 text-4xl font-bold text-white">🏗️ Our Listing</h2>
                    <p className="mt-4 text-lg text-white">
                      Discover our latest real estate developments and properties.
                    </p>
                    <div className="mt-6 grid md:grid-cols-3 gap-6">
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
            <h2 className="p-10 text-4xl font-bold text-white">📞 Contact Us</h2>
            <p className="mt-4 text-lg text-white">
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
<footer className="bg-gray-300 text-white py-6">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <div className="flex items-center space-x-2">
            <img src="/icons8-home-128.png" alt="Happy Homes" className="h-8" />
            <h2 className="text-2xl font-semibold text-gray-900">Happy Homes</h2>
          </div>
          <p className="text-gray-500 mt-2">
          Welcome to Happy Homes, where your journey to finding the perfect space begins. Whether you are looking for 
          a cozy home to create lasting memories or a modern office to boost productivity, 
          Happy Homes is dedicated to making your dreams a reality. Discover blissful living and exceptional 
          comfort with our expertly curated properties. 
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-600 text-xl"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-gray-600 text-xl"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-gray-600 text-xl"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="text-gray-600 text-xl"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Navigation</h3>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Services</h3>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li>Drone Mapping</li>
            <li>Real Estate</li>
            <li>Commercial</li>
            <li>Construction</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Contact Us</h3>
          <p className="text-gray-600 mt-3">Drone Mapping</p>
          <a href="mailto:contact@carwash.com" className="text-blue-500 hover:underline">contact@happyhomes.com</a>
          <p className="text-blue-700 font-bold text-lg mt-1">10 (87) 738-3940</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t pt-4">
        Copyright ©2025 Happy Homes. All rights reserved | This Site is made with 💙 by 
        <a href="#" className="text-blue-500 hover:underline"> WebNCraft</a>
      </div>
    </footer>

      </div>
    </div>
  );
}
