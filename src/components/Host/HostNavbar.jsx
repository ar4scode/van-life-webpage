import { NavLink } from "react-router";

const HostNavbar = () => {
  return (
    <div className="pt-20 flex ml-2 gap-3 font-semibold text-gray-400 md:gap-5 md:ml-10">
      <NavLink end className={({isActive}) => isActive ? "text-black underline" : "duration-200 hover:text-black"} to="/host">Dashboard</NavLink>
      <NavLink className={({isActive}) => isActive ? "text-black underline" : "duration-200 hover:text-black"} to="/host/income">Income</NavLink>
      <NavLink className={({isActive}) => isActive ? "text-black underline" : "duration-200 hover:text-black"} to="/host/vans">Vans</NavLink>
      <NavLink className={({isActive}) => isActive ? "text-black underline" : "duration-200 hover:text-black"} to="/host/reviews">Reviews</NavLink>
    </div>
  )
}

export default HostNavbar;