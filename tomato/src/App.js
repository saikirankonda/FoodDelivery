import Navbar from "./Components/Navbar/Navbar"
import {Route, Routes} from "react-router-dom"
import Home from "./Pages/Home/Home"
import Cart from "./Pages/Cart/Cart"
import PlaceOrder from "./Pages/Placeorder/PlaceOrder"
import Footer from "./Components/Footer/Footer"
import LogInPopup from "./Components/LoginPopup/LogInPopup"
import { useEffect, useState } from "react"
import {useDispatch,useSelector} from "react-redux"
import {getMenulist,getFoodlist} from "./Redux/API"

function App() {

  const [ShowLogin ,setShowLogin] = useState(false)

   const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(getFoodlist()) 
  })

  
  const foodItemData = useSelector((state) => state.foodlisttData)
    
  console.log("app" ,foodItemData)

  return (
  <>
  {
    ShowLogin ?   <LogInPopup setShowLogin={setShowLogin}  /> : <></>
  }
  
    <div className="app">
     <Navbar setShowLogin ={setShowLogin} />
     <Routes>
     <Route path="/" element={<Home foodItemData={foodItemData}/>}/>
      <Route path="/home" element={<Home  />}/>
      <Route path="/cart" element={<Cart/>} />
      <Route path="/order" element={<PlaceOrder/>} />
     </Routes>
    </div>
     <Footer/>
  </>

    
  );
}

export default App;
