import React, { useState } from 'react';

const initialCart = [
  {
    id: 1,
    name: 'Vintage Radio',
    price: 3200,
    image: '/assests/radio.jpg',
    quantity: 1,
  },
  {
    id: 2,
    name: 'Antique Clock',
    price: 2500,
    image: '/assests/clock.jpg',
    quantity: 2,
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCart);

  const updateQuantity = (id, amount) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const removeItem = id => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section className="bg-[#fffaf4] min-h-screen px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">🛒 Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-6">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
                  <div className="flex items-center gap-4">
                    <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
                    <div>
                      <h4 className="font-semibold text-lg">{item.name}</h4>
                      <p className="text-gray-600">₹ {item.price.toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button onClick={() => updateQuantity(item.id, -1)} className="px-2 bg-gray-200 rounded">−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} className="px-2 bg-gray-200 rounded">+</button>
                    <button onClick={() => removeItem(item.id)} className="text-red-500 ml-4">Remove</button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="mt-10 border-t pt-6 flex justify-between items-center">
              <h3 className="text-xl font-semibold">Total: ₹ {total.toLocaleString()}</h3>
              <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;
