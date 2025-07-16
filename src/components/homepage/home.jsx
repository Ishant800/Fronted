import Footer from "../footer/footer"
import { useAuthSync } from "../hooks/useAuth"
import Categories from "../main/categories"
import Landingpage from "../main/Landingpage"
import Navabar from "../navbar/navbar"
import Fetauresroom from "../roompage/fetauresrom"
import WhyChooseUs from '../main/WhyChooseUs'
import Testimonials from "../main/landingpage3"
import RoomFeatures from "../main/roomfeatures"
import RoomMap from "../main/roomamp"

function Homepage() {
useAuthSync()
const sections = [{id:"hero",component:<Landingpage/>},
                  {id:"featuresroom",component:<Fetauresroom/>},
                  {id:"categories",component:<Categories/>},
                  {id:"whychooseus",component:<WhyChooseUs/>},
                  {id:"testimonials",component:<Testimonials/>},{
                    id:"roomfeatures",component:<RoomFeatures/>
                  },{
                    id:"roommap",component:<RoomMap/>
                  }
                ]
    return (
    <div className="w-full">
      <Navabar/>
     {sections.map((item)=>(
      <div key={item.id}>{item.component}</div>))}  
    <Footer />
    </div>
  )
}

export default Homepage