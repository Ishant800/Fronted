import Footer from "../footer/footer"
import Categories from "../main/categories"
import Landingpage from "../main/Landingpage"
import Navabar from "../navbar/navbar"
import Fetauresroom from "../roompage/fetauresrom"

function Homepage() {

const sections = [{id:"hero",component:<Landingpage/>},
                  {id:"featuresroom",component:<Fetauresroom/>},
                  {id:"categories",component:<Categories/>}
                ]
    return (
    <>
      <Navabar/>
     {sections.map((item)=>(
      <div key={item.id}>{item.component}</div>))}  
    <Footer />
    </>
  )
}

export default Homepage