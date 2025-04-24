import { useEffect, useState } from "react"

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-20 p-5 pb-20">
        {vansData.map((van) => {
          return (
            <div key={van.id}>
              <img src={van.imageUrl} className="rounded-md" alt="" />
              <div className="flex justify-between">
                <h1 className="text-nowrap font-bold pt-2 md:text-xl lg:text-2xl">{van.name}</h1>
                <div className="flex flex-col relative pt-2">
                  <p className="font-bold lg:text-xl">${van.price}</p>
                  <p className="text-sm text-gray-500 absolute top-6 lg:top-7 left-3">/day</p>
                </div>
              </div>
              <p className={`font-semibold text-white max-w-20 text-center p-1 rounded-md mt-2 ${getTypeClass(van.type)}`}>
                {van.type}
              </p>

            </div>
          )
        })}
      </div>
    </>
  )
}

export default Vans