
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import avase from '../assests/avase.jpg';
import painting from '../assests/painting.jpg';
import sculpture from '../assests/sculpture.jpg';
import statue from '../assests/statue.jpg';
import Home1 from '../components/Home1.jsx';
import Explore from '../components/Explore';
import New from '../components/New';
import Category from '../pages/Category';

import Footer from '../components/Footer';





const Home = () => {
  const [antiques, setAntiques] = useState([]);


  useEffect(() => {
    const fetchedAntiques = [
      { id: 1, title: 'Antique Vase', image: avase, description: 'A beautiful ancient vase.' },
      { id: 2, title: 'Ancient Painting', image: painting, description: 'A painting from the 18th century.' },
      { id: 3, title: 'Antique Sculpture', image: sculpture, description: 'A beautiful ancient sculpture of a woman.' },
      { id: 4, title: 'Antique Oil Lamp', image: statue, description: 'A beautiful ancient oil lamp from indian chola dynasty .' },
    ];
    setAntiques(fetchedAntiques);
  }, []);
  return (
    <div className="maindiv bg-orange-200 mt-0 pt-0">

      <Home1 />
      <Explore />
      <New />
      <Category />



      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-center mb-6">Welcome to AntiqueHub</h1>
        <h2 className="text-2xl font-semibold text-center mb-6">Featured Antiques</h2>
        <div className="flex flex-wrap justify-around">
          {antiques.map((antique) => (
            <div key={antique.id} className="max-w-sm mb-8">
              <img src={antique.image} alt={antique.title} className="w-full h-80 mb-4" />
              <h3 className="text-xl font-semibold">{antique.title}</h3>
              <p className="text-sm text-gray-600">{antique.description}</p>
              <Link
                to={`/auction/${antique.id}`}
                state={{ product: antique }}
                className="text-green-500 mt-4 inline-block hover:text-green-600"
              >
                View Auction
              </Link>

            </div>
          ))}
        </div>
      </div>
      <Footer />

    </div>
  );

}
export default Home;