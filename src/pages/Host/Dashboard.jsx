const Dashboard = () => {
  return (
    <div>
      <div className="bg-amber-100 p-4 mt-3 mx-2 rounded-md">
        <p className="font-bold text-2xl">Welcome!</p>
        <div className="flex justify-between mt-2">
          <p className="text-gray-400 text-sm">Income last <span className="text-black font-semibold pl-1 underline">30 days</span></p>
          <p className="font-semibold text-sm">Details</p>
        </div>
        <p className="font-bold text-3xl mt-3">$2,260</p>
      </div>

      <div className="bg-amber-300 flex justify-between p-4 mx-2 rounded-md">
        <div className="flex gap-2">
          <p className="font-bold">Review score </p>
          <p>...</p>
        </div>
        <p className="text-sm font-semibold">Details</p>
      </div>
    </div>
  )
}

export default Dashboard;