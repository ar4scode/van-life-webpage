import homeBg from '../assets/home-hero.png'
import { Link } from 'react-router';
import Header from './Header';

const Home = () => {
  return (
    <>
      <Header />
      <div className="w-full h-lvh bg-cover flex flex-col gap-5 font-sans gra px-3" style={{backgroundImage: `url(${homeBg})`}}>
        <h1 className='text-amber-50 font-bold text-3xl mt-60'>You got the travel plans, we got the travel vans.</h1>
        <p className='text-gray-300 font-semibold'>Add adventure to your life by joining the #vanlife movement.Rent the perfect van to make your perfect road trip.</p>
        <Link className='bg-amber-300 text-center p-3 rounded-md font-bold text-amber-50' to="/vans" >Find your van</Link>
      </div>
    </>
  )
}

export default Home;