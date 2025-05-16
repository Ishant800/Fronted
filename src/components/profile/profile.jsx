

function Profile() {
  return (
    <div className="h-full">
        <h1 className="text-xl ml-10 font-semibold ">Profile page</h1>
        <div className="p-10">
            
            <div className="pt-2 w-1/4 flex-col justify-center items-center bg-slate-100 rounded-2xl">
               <div className=" p-5">
                    <img src="https://images.pexels.com/photos/32086958/pexels-photo-32086958/free-photo-of-elegant-woman-in-a-red-dress-posing-indoors.jpeg?auto=compress&cs=tinysrgb&w=600" 
                className="h-50 w-full object-cover rounded-xl"
                alt="" />
                     <span className="text-xl w-full inline-block text-center font-bold">John Doe</span>
                     <span className="text-md w-full inline-block text-start font-semibold">New York ,London</span>
                      <span className="text-md w-full inline-block text-start font-semibold">Hi i am a software engineer</span>
                      <span className="text-md  w-full inline-block text-start font-semibold">total account: $2000</span>
               </div>

               
               
            </div>

        </div>
    </div>
  )
}

export default Profile