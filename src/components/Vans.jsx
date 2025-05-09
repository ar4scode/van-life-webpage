import { useEffect, useState } from "react";
import { Link } from "react-router";

const Vans = () => {
  const [vansData, setVansData] = useState([])

  useEffect(() => {
    fetch("/api/vans")
    .then(res => res.json())
    .then(data => setVansData(data.vans));
  }, [])

  const getTypeClass = (type) => {
    switch(type) {
      case 'simple':
        return 'bg-orange-400';
      case 'luxury':
        return 'bg-black';
      case 'rugged':
        return 'bg-green-700';
      default:
        return 'bg-gray-500';
    }
  }
  
  
  return (

    <>
      <h1 className="pt-20 font-bold text-3xl px-4">Explore our van options</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 pt-10 p-5 pb-20 fonts">
        {vansData.map((van) => {
          return (
            <Link to={`/vans/${van.id}`} key={van.id} className="duration-200 hover:shadow-md p-1">
              <img src={van.imageUrl} className="rounded-md" alt="" />
              <div className="flex flex-col gap-2 md:flex-row md:justify-between">
                <h1 className="text-nowrap font-bold pt-2 md:text-xl lg:text-2xl">{van.name}</h1>
                <div className="flex md:flex-col items-center relative pt-2">
                  <p className="font-bold lg:text-xl">${van.price}</p>
                  <p className="text-sm text-gray-500 md:absolute md:top-6 lg:top-7 left-3">/day</p>
                </div>
              </div>
              <p className={`font-semibold text-white max-w-20 text-center p-1 rounded-md mt-5 ${getTypeClass(van.type)}`}>
                {van.type}
              </p>

            </Link>
          )
        })}
      </div>
    </>
  )
}

export default Vans