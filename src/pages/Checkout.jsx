import React, { useState } from 'react';

const Checkout = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    paymentMethod: 'cod',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
    alert('Order placed successfully!');
  };

  return (
    <section className="px-4 py-10 bg-[#fffaf4] min-h-screen">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">🧾 Checkout</h2>
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
          <input className="w-full border p-2 rounded" name="fullName" placeholder="Full Name" onChange={handleChange} required />
          <input className="w-full border p-2 rounded" name="address" placeholder="Address" onChange={handleChange} required />
          <div className="flex gap-4">
            <input className="w-1/2 border p-2 rounded" name="city" placeholder="City" onChange={handleChange} required />
            <input className="w-1/2 border p-2 rounded" name="state" placeholder="State" onChange={handleChange} required />
          </div>
          <input className="w-full border p-2 rounded" name="zip" placeholder="ZIP Code" onChange={handleChange} required />

          <div>
            <label className="block font-medium mb-1">Payment Method</label>
            <select name="paymentMethod" className="w-full border p-2 rounded" onChange={handleChange}>
              <option value="cod">Cash on Delivery</option>
              <option value="card">Credit/Debit Card</option>
              <option value="upi">UPI</option>
            </select>
          </div>

          <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">Place Order</button>
        </form>
      </div>
    </section>
  );
};

export default Checkout;
