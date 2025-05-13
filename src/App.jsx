// import Searchroom from "./components/form/searchroom"
import Homepage from "./components/homepage/home"
import{BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
  return (
   <BrowserRouter>
   <Routes>
<Route path="/" element={<Homepage/>}/>
{/* <Route path="/search" element={<Searchroom/>}/> */}
   </Routes>
   
   
   </BrowserRouter>
  )
}

export default App 