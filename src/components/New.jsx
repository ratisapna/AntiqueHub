import React from 'react';
import clock1 from '../assests/clock1.jpg';
import hourglass from '../assests/hourglass.jpg';
import lamp from '../assests/lamp.jpg';
import phone from '../assests/phone.jpg';
import vase from '../assests/vase.jpg';
import box from '../assests/box.jpg';

const New = () => {
  return (
    <div className="w-full min-h-screen bg-orange-200 p-8">
      {/* New Releases Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Latest Treasures</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Example Product Card */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <img src={clock1} alt="Antique Item" className="h-60 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Vintage Clock</h3>
              <p className="text-gray-500 text-sm mt-2">Classic 1950s handmade clock.</p>
              <div className="flex items-center justify-between mt-4">
                <span className="font-bold text-gray-800">$150</span>
                <button className="bg-black text-white px-4 py-1 rounded-lg hover:bg-gray-700">View Details</button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <img src={lamp} alt="Antique Item" className="h-60 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Vintage lamp</h3>
              <p className="text-gray-500 text-sm mt-2">Classic 1970s vintage lamp.</p>
              <div className="flex items-center justify-between mt-4">
                <span className="font-bold text-gray-800">$100</span>
                <button className="bg-black text-white px-4 py-1 rounded-lg hover:bg-gray-700">View Details</button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <img src={phone} alt="Antique Item" className="h-60 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Telephone</h3>
              <p className="text-gray-500 text-sm mt-2">telephone made in 1940s.</p>
              <div className="flex items-center justify-between mt-4">
                <span className="font-bold text-gray-800">$200</span>
                <button className="bg-black text-white px-4 py-1 rounded-lg hover:bg-gray-700">View Details</button>
              </div>
            </div>
          </div>
          {/* Repeat Product Cards */}
        </div>
      </section>

      {/* Offer Zone Section */}
      <section className="bg-yellow-100 py-10 rounded-2xl">
        <h2 className="text-4xl font-bold text-center mb-8 text-yellow-900">🎁 Offer Zone</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
          {/* Example Offer Card */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 relative">
            <img src={hourglass} alt="Antique Item" className="h-60 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Hourglass</h3>
              <p className="text-gray-500 text-sm mt-2">Rare 1940s Sand Hourglass.</p>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <span className="text-red-600 font-bold text-lg">$100</span>
                  <span className="line-through text-gray-400 text-sm ml-2">$50</span>
                </div>
                <button className="bg-red-600 text-white px-4 py-1 rounded-lg hover:bg-red-700">Buy Now</button>
              </div>
            </div>
            {/* Discount Badge */}
            <div className="absolute top-3 left-3 bg-red-600 text-white text-xs px-3 py-1 rounded-full">-50%</div>
          </div>
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 relative">
            <img src={vase} alt="Antique Item" className="h-60 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Vintage Vase</h3>
              <p className="text-gray-500 text-sm mt-2">Vintage proclein vase.</p>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <span className="text-red-600 font-bold text-lg">$200</span>
                  <span className="line-through text-gray-400 text-sm ml-2">$350</span>
                </div>
                <button className="bg-red-600 text-white px-4 py-1 rounded-lg hover:bg-red-700">Buy Now</button>
              </div>
            </div>
            {/* Discount Badge */}
            <div className="absolute top-3 left-3 bg-red-600 text-white text-xs px-3 py-1 rounded-full">-30%</div>
          </div>
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 relative">
            <img src={box} alt="Antique Item" className="h-60 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Vintage Ornament Box</h3>
              <p className="text-gray-500 text-sm mt-2">Rare decorative red parrot jungle box.</p>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <span className="text-red-600 font-bold text-lg">$400</span>
                  <span className="line-through text-gray-400 text-sm ml-2">$850</span>
                </div>
                <button className="bg-red-600 text-white px-4 py-1 rounded-lg hover:bg-red-700">Buy Now</button>
              </div>
            </div>
            {/* Discount Badge */}
            <div className="absolute top-3 left-3 bg-red-600 text-white text-xs px-3 py-1 rounded-full">-50%</div>
          </div>
          {/* Repeat Offer Cards */}
        </div>
      </section>
    </div>
  );
};

export default New;
