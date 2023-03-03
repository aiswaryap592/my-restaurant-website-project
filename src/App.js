import { HashRouter,Routes,Route, Router } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Menu from "./Menu";
import About from "./About";
import Contact from "./Contact";
import Footer from "./footer";
function App(){
  return(
<>
<HashRouter>
  <Navbar/>
 

  <Routes>
    <Route exact path = "/"element={<Home/>}/>
    <Route exact path = "/menu"element={<Menu/>}/>
    <Route exact path = "/about"element={<About/>}/>
    <Route exact path = "/contact"element={<Contact/>}/>
  </Routes>
  <Footer/>
</HashRouter>


</>
  )
}
export default App;