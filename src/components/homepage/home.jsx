import Footer from "../footer/footer"
import Landingpage from "../main/Landingpage"
import Landingpage2 from "../main/landingpage2"
import Landingpage3 from "../main/landingpage3"
import Navabar from "../navbar/navbar"

function Homepage() {
  return (
    <div>
        <Navabar/>
        <Landingpage/>
        <Landingpage3/>
        <Landingpage2/>
        <Footer/>
    </div>
  )
}

export default Homepage