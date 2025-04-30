import React from 'react';
import radio from '../assests/radio.jpg';
import clock from '../assests/clock.jpg';
import books from '../assests/books.jpg';
import gramophone from '../assests/gramophone.jpg';
import mirror from '../assests/mirror.jpg';
import camera from '../assests/camera.jpg';



const products = [
  {
    id: 1,
    title: 'Vintage Radio',
    price: 3200,
    image: {radio},
  },
  {
    id: 2,
    title: 'Classic Clock',
    price: 1800,
    image:{clock},
  },
  {
    id: 3,
    title: 'Antique Books',
    price: 2400,
    image: {books},
  },
  {
    id: 4,
    title: 'Old Gramophone',
    price: 7200,
    image: {gramophone},
  },
  {
    id: 5,
    title: 'Wooden Mirror',
    price: 1500,
    image: {mirror},
  },
  {
    id: 6,
    title: 'Retro Camera',
    price: 2900,
    image: {camera},
  },
];

const ProductListing = () => {
  return (
    <section className="px-4 py-8 bg-[#fff7ed] min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8">🛒 Available Antiques</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-xl shadow hover:shadow-lg transition-all">
            <img
              src={product.image}
              alt={product.title}
              className="rounded-t-xl w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{product.title}</h3>
              <p className="text-gray-600">$ {product.price.toLocaleString()}</p>
              <button className="mt-3 bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductListing;
