import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed z-10 right-0 left-0 bg-white flex justify-between items-center p-5 font-sans">
      <NavLink className="font-extrabold text-2xl" to="/">#VANLIFE</NavLink>
      <div className=" flex gap-5">
        <NavLink className={({isActive}) => isActive ? "text-black underline font-semibold" : "text-gray-400 font-semibold hover:text-black duration-200" } to="/host">Host</NavLink>
        <NavLink className={({isActive}) => isActive ? "text-black underline font-semibold" : "text-gray-400 font-semibold hover:text-black duration-200" } to="/about">About</NavLink>
        <NavLink className={({isActive}) => isActive ? "text-black underline font-semibold" : "text-gray-400 font-semibold hover:text-black duration-200" } to="/vans">Vans</NavLink>
      </div>
    </div>
  )
}

export default Header;