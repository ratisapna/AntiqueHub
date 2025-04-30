import React, { useState, useEffect } from 'react';

const auctionData = {
  title: "Antique Vase",
  description: "A beautiful ancient vase from the Ming dynasty.",
  startingBid: 5000,
  currentBid: 5500,
  highestBidder: "JohnDoe",
  auctionEndTime: new Date("2025-04-30T17:00:00").getTime(),
  bidHistory: [
    { amount: 5500, bidder: "JohnDoe", time: "10 minutes ago" },
    { amount: 5000, bidder: "JaneDoe", time: "1 hour ago" },
  ],
};

const Auction = () => {
  const [currentBid, setCurrentBid] = useState(auctionData.currentBid);
  const [bidAmount, setBidAmount] = useState('');
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = auctionData.auctionEndTime - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft('Auction Ended');
      } else {
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft(`${hours}:${minutes}:${seconds}`);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleBid = (e) => {
    e.preventDefault();
    if (parseInt(bidAmount) > currentBid) {
      setCurrentBid(parseInt(bidAmount));
      auctionData.bidHistory.unshift({ amount: parseInt(bidAmount), bidder: "You", time: "Just Now" });
      setBidAmount('');
    } else {
      alert("Your bid must be higher than the current bid!");
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <header>
        <h1 className="text-3xl font-bold text-center mb-6">Auction Page</h1>
      </header>

      <section className="flex justify-between items-center mb-8">
        <div className="w-1/3">
          <img src="antique.jpg" alt="Antique Vase" className="w-full h-auto" />
        </div>
        <div className="w-2/3 pl-8">
          <h2 className="text-2xl font-semibold mb-2">{auctionData.title}</h2>
          <p className="text-gray-600 mb-4">{auctionData.description}</p>
          <p className="font-semibold mb-2"><strong>Starting Bid:</strong> ₹{auctionData.startingBid}</p>
          <p className="font-semibold mb-2"><strong>Current Bid:</strong> ₹{currentBid} by {auctionData.highestBidder}</p>
          <p className="font-semibold"><strong>Time Left:</strong> {timeLeft}</p>
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Place Your Bid</h3>
        <form onSubmit={handleBid} className="flex flex-col items-center">
          <input
            type="number"
            value={bidAmount}
            onChange={(e) => setBidAmount(e.target.value)}
            placeholder="Enter your bid"
            className="p-2 mb-4 border border-gray-300 rounded"
            required
          />
          <button type="submit" className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Place Bid
          </button>
        </form>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">Bid History</h3>
        <ul>
          {auctionData.bidHistory.map((bid, index) => (
            <li key={index} className="mb-2">
              ₹{bid.amount} - {bid.bidder} ({bid.time})
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Auction;
