import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to Elite Realty</h1>
      <p className="text-lg text-gray-600 mb-6">
        Providing luxury real estate consultation and premium property listings.
      </p>
      <button className="px-6 py-3 text-lg bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700">
        Get Started
      </button>
    </div>
  );
}
