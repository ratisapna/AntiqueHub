import React from 'react';

const UserProfile = () => {
  const user = {
    name: 'Rati Singh',
    email: 'rati@example.com',
    joined: 'March 2024',
    address: '123 Heritage Street, Jaipur, India',
  };

  return (
    <section className="px-4 py-10 bg-[#fffaf4] min-h-screen">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">👤 Profile</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Address:</strong> {user.address}</p>
        <p><strong>Member Since:</strong> {user.joined}</p>
        <button className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Edit Profile</button>
      </div>
    </section>
  );
};

export default UserProfile;
