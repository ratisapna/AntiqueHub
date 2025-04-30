import React from 'react';
import { FaChair, FaClock, FaBook, FaCameraRetro, FaGuitar, FaCoins } from 'react-icons/fa';

const Category = () => {
  const categories = [
    { name: 'Furniture', icon: <FaChair size={40} /> },
    { name: 'Clocks & Watches', icon: <FaClock size={40} /> },
    { name: 'Books & Manuscripts', icon: <FaBook size={40} /> },
    { name: 'Cameras & Photography', icon: <FaCameraRetro size={40} /> },
    { name: 'Musical Instruments', icon: <FaGuitar size={40} /> },
    { name: 'Coins & Currency', icon: <FaCoins size={40} /> },
    // Add more categories here if needed
  ];

  return (
    <section className="w-full py-16 bg-orange-100">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">🗂️ Explore Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 px-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-100 p-6 rounded-2xl shadow-md hover:scale-105 hover:bg-gray-200 transition-all duration-300"
          >
            <div className="text-indigo-700 mb-4">{category.icon}</div>
            <h3 className="text-lg font-semibold text-gray-700">{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
