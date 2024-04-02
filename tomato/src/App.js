import Navbar from "./Components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/Placeorder/PlaceOrder";
function App() {
  return (
    <div className="app">
     <Navbar/>
     <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>} />
      <Route path="/placeorder" element={<PlaceOrder/>} />
     </Routes>
    </div>
  );
}

export default App;
