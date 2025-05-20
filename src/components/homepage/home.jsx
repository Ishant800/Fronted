import Footer from "../footer/footer"
import Categories from "../main/categories"

import Landingpage from "../main/Landingpage"
// import Landingpage1 from "../main/landingpage1"
import Landingpage2 from "../main/landingpage2"
import Landingpage3 from "../main/landingpage3"
// import Landingpage4 from "../main/landingpage4"
import Navabar from "../navbar/navbar"
import Roomview from "../roompage/roomview"

function Homepage() {
  return (
    <div>
      <Navabar />

      <Landingpage />
      <Roomview/>
      {/* <Landingpage1 /> */}
      <Categories/>
      
      <Landingpage2 />
      {/* <Landingpage4 /> */}
      <Landingpage3 />
      <Footer />
    </div>
  )
}

export default Homepage