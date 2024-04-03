import Navbar from "./Components/Navbar/Navbar"
import {Route, Routes} from "react-router-dom"
import Home from "./Pages/Home/Home"
import Cart from "./Pages/Cart/Cart"
import PlaceOrder from "./Pages/Placeorder/PlaceOrder"
import Footer from "./Components/Footer/Footer"
import LogInPopup from "./Components/LoginPopup/LogInPopup"
import { useState } from "react"
function App() {

  const [ShowLogin ,setShowLogin] = useState(false)
  return (
  <>
  {
    ShowLogin ?   <LogInPopup setShowLogin={setShowLogin}  /> : <></>
  }
  
    <div className="app">
     <Navbar setShowLogin ={setShowLogin} />
     <Routes>
     <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>} />
      <Route path="/order" element={<PlaceOrder/>} />
     </Routes>
    </div>
     <Footer/>
  </>

    
  );
}

export default App;
