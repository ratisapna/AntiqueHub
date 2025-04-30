import React from 'react';

const OrderTracking = () => {
  const order = {
    id: 'AH2025043001',
    status: 'Shipped',
    steps: ['Order Placed', 'Processing', 'Shipped', 'Out for Delivery', 'Delivered'],
    currentStep: 2,
    estimatedDelivery: '2025-05-04',
  };

  return (
    <section className="px-4 py-10 bg-[#fffaf4] min-h-screen">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">🚚 Track Order</h2>
        <p><strong>Order ID:</strong> {order.id}</p>
        <p><strong>Status:</strong> {order.status}</p>
        <p><strong>Estimated Delivery:</strong> {order.estimatedDelivery}</p>

        <div className="mt-6">
          <div className="flex items-center justify-between text-sm font-medium text-gray-600">
            {order.steps.map((step, index) => (
              <div key={index} className="flex-1 text-center">
                <div className={`h-3 w-3 mx-auto rounded-full ${index <= order.currentStep ? 'bg-green-600' : 'bg-gray-300'}`}></div>
                <p className="mt-2">{step}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2">
            {order.steps.map((_, i) => (
              i < order.steps.length - 1 && (
                <div key={i} className={`flex-1 h-1 mx-1 ${i < order.currentStep ? 'bg-green-600' : 'bg-gray-300'}`} />
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderTracking;
