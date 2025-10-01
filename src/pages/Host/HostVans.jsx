import { useEffect, useState } from "react";

const HostVans = () => {

  const [vans , setVans] = useState([])

  useEffect(() => {
    fetch("/api/vans")
    .then(res => res.json())
    .then(data => setVans(data.vans));
  }, [])
  
  return (
    <div>
      <h1 className="font-bold text-2xl mx-4 mt-8">Your Listed Vans</h1>

      <div className="flex flex-col m-8 gap-10 md:grid md:grid-cols-3">
        {vans.map((vans) => {
          return (
            <div className="flex items-center gap-5">
              <img className="w-15 rounded-md md:w-30" src={vans.imageUrl} alt="" />
              <div className="flex flex-col md:gap-2">
                <h1 className="md:text-xl font-semibold">{vans.name}</h1>
                <p className="text-sm text-gray-500">${vans.price}/day</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HostVans;