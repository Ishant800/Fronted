function Maincontent() {
  const userdetails = JSON.parse(localStorage.getItem("user"))
  const username = userdetails.user.username
  return (
    <div className="h-160 full bg-blue-100 p-5">
        <h1 className="text-xl  font-semibold capitalize text-gray-700">Dashboard overview</h1>
       <h2 className="text-gray-500 font-semibold">Wellcome back, <span className="font-bold capitalize text-gray-900">{username}</span>  here's what happen today! </h2>
    
    </div>
  )
}

export default Maincontent