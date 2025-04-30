import React from 'react';
import radio from '../assests/radio.jpg';
import clock from '../assests/clock.jpg';
import books from '../assests/books.jpg';
import gramophone from '../assests/gramophone.jpg';
import mirror from '../assests/mirror.jpg';
import camera from '../assests/camera.jpg';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 

const Home1 = () => {
  return (
   <div>
     <div>
      <section className=" ">
 
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          interval={4000}
          transitionTime={800}
        >
          {/* Slide 1 */}
          <div className="w-full overflow-hidden relative">
            <img src={radio} alt="Rare Antique Radio" className="h-80 object-cover w-full" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40">
              <h2 className="text-3xl md:text-4xl font-itallics text-yellow-100 mb-4 ">Rare Antique Radio</h2>
              <Link to="/auction/1" className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-full transition">
                Bid Now
              </Link>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="w-full  overflow-hidden relative">
            <img src={gramophone} alt="Vintage Gramophone" className="h-80 object-cover w-full" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40">
              <h2 className="text-3xl md:text-4xl font-itallics text-yellow-100 mb-4">Vintage gramophone</h2>
              <Link to="/auction/2" className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-full transition">
                Bid Now
              </Link>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="w-full  overflow-hidden relative">
            <img src={clock} alt="Ancient Clock" className="h-80 object-cover w-full" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40">
              <h2 className="text-3xl md:text-4xl font-itallics text-yellow-100 mb-4">Ancient clock</h2>
              <Link to="/auction/3" className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-full transition">
                Bid Now
              </Link>
            </div>
          </div>
          <div className="w-full  overflow-hidden relative">
            <img src={books} alt="Ancient books" className="h-80 object-cover w-full" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40">
              <h2 className="text-3xl md:text-4xl font-itallics text-yellow-100 mb-4">Ancient book</h2>
              <Link to="/auction/3" className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-full transition">
                Bid Now
              </Link>
            </div>
          </div>
          <div className="w-full  overflow-hidden relative">
            <img src={camera} alt="camera " className="h-80 object-cover w-full" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40">
              <h2 className="text-3xl md:text-4xl font-itallics text-yellow-100 mb-4">camera </h2>
              <Link to="/auction/3" className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-full transition">
                Bid Now
              </Link>
            </div>
          </div>
          <div className="w-full  overflow-hidden relative">
            <img src={mirror} alt="mirror" className="h-80 object-cover w-full" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40">
              <h2 className="text-3xl md:text-4xl font-bold text-yellow-100 mb-4"> Vintage mirror</h2>
              <Link to="/auction/3" className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-full transition">
                Bid Now
              </Link>
            </div>
          </div>
        </Carousel>
      </section>

    </div>
   </div>
  );
};

export default Home1;
