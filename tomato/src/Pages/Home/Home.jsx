import React, { useEffect, useState } from 'react';
import "./Home.css";
import Header  from '../../Components/Header/Header';
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay';
import AppDownload from '../../Components/AppDownload/AppDownload';
import {getMenulist,getFoodlist} from '../../Redux/API'
// import {useDispatch,useSelector} from "react-redux"

const Home = () => {
  // const dispatch = useDispatch();

  // useEffect(() =>{
  //   dispatch(getMenulist())  
  //   dispatch(getFoodlist()) 
  // },[])

  
  // const foodItemData = useSelector((state) => state.foodlisttData)
  // console.log("home" , foodItemData)
    

  const [category,setCategory] = useState("All");
  return (
    <div>
    <Header/>
    <ExploreMenu category={category} setCategory={setCategory}/>
     <FoodDisplay category={category} setCategory={setCategory} />
     <AppDownload/>
    </div>
  )
}

export default Home