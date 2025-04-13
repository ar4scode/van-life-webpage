import aboutBgImg from '../assets/about-hero.png';
import { Link } from 'react-router';

const About = () => {
  return (
    <div className='font-sans'>
      <img className='pt-20 lg:w-250 mx-auto' src={aboutBgImg} alt="about pic" />
      <h1 className='font-bold text-2xl pt-6 px-3 md:text-3xl'>Don't squeeze in a sedan when you could relax in a van</h1>
      <p className='mt-5 px-3 md:w-3/4'>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.</p>
      <p className='mt-5 px-3 md:w-3/4'>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels</p>

      <div className='bg-amber-200 rounded-md mt-10 mx-5 p-4 flex flex-col gap-2 md:items-center md:w-3/4 md:mx-auto lg:max-w-2/4'>
        <h1 className='font-bold text-xl '>Your destination is waiting.</h1> 
        <p className='font-bold text-xl'>Your van is ready</p>
        <Link className='bg-black w-1/2 text-center  rounded-xl text-white p-2' to="/vans">Explore our vans</Link>
      </div>
    </div>
  )
}

export default About;