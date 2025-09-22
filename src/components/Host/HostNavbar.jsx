import { Link } from "react-router";

const HostNavbar = () => {
  return (
    <div className="pt-20 flex ml-2 gap-3 font-semibold text-gray-400 md:gap-5 md:ml-10">
      <Link to="/host">Dashboard</Link>
      <Link to="/host/income">Income</Link>
      <Link to="/vans">Vans</Link>
      <Link to="/host/reviews">Reviews</Link>
    </div>
  )
}

export default HostNavbar;