import { useEffect } from "react"
import Footer from "../footer/footer"
import Categories from "../main/categories"

import Landingpage from "../main/Landingpage"
import Landingpage2 from "../main/landingpage2"
import Landingpage3 from "../main/landingpage3"

import Navabar from "../navbar/navbar"
import Roomview from "../roompage/roomview"
import { useDispatch } from "react-redux"
import { setUser } from "../redux/authredux"
import Fetauresroom from "../roompage/fetauresrom"

function Homepage() {
  const dispatch = useDispatch()
  
useEffect(()=>{
const user = localStorage.getItem("user")
if(!user === "undefined") 
dispatch(setUser(JSON.parse(user)))  
},[dispatch])



  return (
    <>
      <Navabar />

      <Landingpage />
      {/* <Roomview/> */}
     <Fetauresroom/>
      <Categories/>
      
      <Landingpage2 />
      
      <Landingpage3 />
      <Footer />
    </>
  )
}

export default Homepage