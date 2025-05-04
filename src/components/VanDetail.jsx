import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const VanDetail = () => {
  const { id } = useParams()
  const [van, setVan] = useState(null)

  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then(res => res.json())
      .then(data => setVan(data.vans))  // adjust this based on your API structure
  }, [id])

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
    <div className="pt-20">
      {van ? (
        <div className="flex flex-col px-4 ">
          <Link to="/vans" className="underline hover:opacity-60 duration-150 text-sm">Back to all vans</Link>
          <img src={van.imageUrl} className="w-70 mt-5 rounded-md mx-auto" alt="" />
          <p className={` text-white text-sm max-w-20 text-center p-1 rounded-md mt-8 ${getTypeClass(van.type)}`}>
                {van.type}
          </p>
          <h1 className="mt-2 text-2xl font-bold">{van.name}</h1>
          <div className="flex items-center">
            <p className="font-bold mt-2">${van.price}</p>
            /day
          </div>
          <p className="mt-2 text-sm">{van.description}</p>
          <button className="bg-amber-600 mt-4 p-2 rounded-md font-bold text-white md:w-100 md:mx-auto cursor-pointer duration-200 hover:opacity-80">Rent this van</button>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  )
}

export default VanDetail
