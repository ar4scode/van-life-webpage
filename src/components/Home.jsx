import homeBg from '../assets/home-hero.png';
import { Link } from 'react-router-dom';
import Header from './Header';

const Home = () => {
  return (
        <div
          className="relative w-full h-lvh bg-cover flex flex-col gap-5 font-sans px-3"
          style={{ backgroundImage: `url(${homeBg})` }}
        >
          {/* Overlay to darken the background */}
          <div className="absolute inset-0 bg-black opacity-40"></div>

          {/* Content on top */}
          <h1 className="relative z-10 text-amber-50 font-bold text-3xl mt-60 md:w-3/4 md:mx-auto lg:w-1/2">
            You got the travel plans, we got the travel vans.
          </h1>
          <p className="relative z-10 text-gray-200 font-semibold md:w-3/4 md:mx-auto lg:w-1/2">
            Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
          </p>
          <Link
            className="relative z-10 md:w-3/4 md:mx-auto bg-amber-300 text-center p-3 rounded-md font-bold text-white duration-250 hover:bg-amber-500 lg:w-1/2"
            to="/vans"
          >
            Find your van
          </Link>
        </div>
  );
};

export default Home;
