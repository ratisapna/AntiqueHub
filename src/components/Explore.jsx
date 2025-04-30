import React, { useEffect } from 'react';
import face from '../assests/face.jpg';
import thrifting from '../assests/thrifting.jpg';

const Explore = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes floatUpDown {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-15px); }
      }
      .float-up-down {
        animation: floatUpDown 3s ease-in-out infinite;
      }
      .float-delay {
        animation-delay: 1.5s;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="relative bg-[#fefce8] py-20 px-4 md:px-16 overflow-hidden">
      {/* Floating Images */}
      <img
        src={thrifting}
        alt="Antique Left"
        className="absolute left-4 top-10 w-32 md:w-48 float-up-down rounded-full"
      />
      <img
        src={face}
        alt="Antique Right"
        className="absolute right-4 top-20 w-32 md:w-48 float-up-down float-delay rounded-full"
      />

      {/* Main Content */}
      <div className="text-center z-10 relative ">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">🔍 Explore Timeless Treasures</h2>
        <p className="text-gray-600 mb-8 text-lg">Find unique antiques by name, category, or era</p>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto flex shadow-md rounded-full overflow-hidden border border-gray-300 bg-white">
          <input
            type="text"
            placeholder="Search antiques..."
            className="flex-grow px-6 py-3 text-gray-700 focus:outline-none"
          />
          <button className="bg-black text-white px-6 hover:bg-gray-800 transition-all">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Explore;
