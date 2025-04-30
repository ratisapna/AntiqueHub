import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const dummyProduct = {
  id: 1,
  title: 'Vintage Radio',
  description: 'A beautifully preserved vintage radio from the 1940s. Fully functional and highly collectible.',
  price: 3200,
  image: '/assets/radio.jpg',
  category: 'Electronics',
  condition: 'Excellent',
  age: '80 years',
  seller: 'Heritage Dealers',
  isAuction: true, // 👈 mark if this is an auction item
  highestBid: 3600,
  bidEndTime: '2025-05-05T18:00:00Z',
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = dummyProduct;

  const [yourBid, setYourBid] = useState('');
  const [bidMessage, setBidMessage] = useState('');

  const handleBid = () => {
    const bidValue = parseInt(yourBid);
    if (isNaN(bidValue) || bidValue <= product.highestBid) {
      setBidMessage('❌ Your bid must be higher than the current highest bid.');
    } else {
      setBidMessage(`✅ Bid placed successfully: ₹${bidValue}`);
      // later: send to backend
    }
  };

  return (
    <section className="px-4 py-10 bg-[#fffaf4] min-h-screen">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-start">
        {/* Image */}
        <div className="flex-1 w-full">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[450px] object-cover rounded-xl shadow"
          />
        </div>

        {/* Info */}
        <div className="flex-1 w-full">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-600 mb-2">🗂 Category: {product.category}</p>
          <p className="text-gray-600 mb-2">📅 Age: {product.age}</p>
          <p className="text-gray-600 mb-2">📦 Condition: {product.condition}</p>
          <p className="text-lg text-gray-700 mt-4 mb-4">{product.description}</p>

          <p className="text-2xl font-bold text-green-700 mb-6">
            {product.isAuction ? `Current Bid: ₹${product.highestBid}` : `₹${product.price.toLocaleString()}`}
          </p>

          {/* Buttons */}
          {!product.isAuction ? (
            <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
              Buy Now
            </button>
          ) : (
            <>
              <div className="flex gap-3 items-center mb-4">
                <input
                  type="number"
                  placeholder="Enter your bid"
                  className="border rounded px-4 py-2 w-40"
                  value={yourBid}
                  onChange={e => setYourBid(e.target.value)}
                />
                <button
                  onClick={handleBid}
                  className="bg-black text-white px-5 py-2 rounded hover:bg-gray-800"
                >
                  Bid Now
                </button>
              </div>
              {bidMessage && (
                <p className={`text-sm ${bidMessage.includes('✅') ? 'text-green-600' : 'text-red-500'}`}>
                  {bidMessage}
                </p>
              )}
              <p className="text-sm text-gray-600 mt-2">
                Auction ends on: {new Date(product.bidEndTime).toLocaleString()}
              </p>
            </>
          )}

          <p className="mt-6 text-sm text-gray-500">Sold by: <strong>{product.seller}</strong></p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
