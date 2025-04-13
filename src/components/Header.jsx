import { Link } from "react-router";

const Header = () => {
  return (
    <div className="fixed z-10 right-0 left-0 bg-white flex justify-between items-center p-5 font-sans">
      <Link className="font-extrabold text-2xl" to="/">#VANLIFE</Link>
      <div className=" flex gap-5">
        <Link className="text-gray-400 font-semibold" to="/about">About</Link>
        <Link className="text-gray-400 font-semibold" to="/vans">Vans</Link>
      </div>
    </div>
  )
}

export default Header;