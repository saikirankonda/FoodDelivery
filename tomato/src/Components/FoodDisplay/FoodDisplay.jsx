import React, { useContext } from 'react';
import './FoodDisplay.css';
import{StoreContext} from "../../Context/StoreContext";
import FoodItem from '../FoodItem/FoodItem';
// import { useSelector,useDispatch } from 'react-redux';
import { assets } from '../../assets/assets';
const FoodDisplay = ({category,foodItemData}) => {

  const { cartItems,addToCart,removeFromCart,food_list} = useContext(StoreContext);



    console.log("foodItemData" , foodItemData)



  return (
    <div className='food-display' id="food-display" >
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {
          foodItemData && foodItemData?.map((each,i) =>(
            <div className='food-item'>
         <div className="food-item-img-container">
            <img className='food-item-image' src="E:\FoodDelivery\tomato\src\assets\food_1" alt="fooditem"/>
            { 
           !cartItems[i]
           ? <img onClick={() => addToCart(i)} className='add' src={assets.add_icon_white} alt='' />
           :
           <div className='food-item-counter'>
                  <img onClick={() => removeFromCart(i)} src={assets.remove_icon_red} alt='' />
                  <p>{cartItems[i]}</p>
                  <img onClick={() => addToCart(i)} src={assets.add_icon_green} alt="" />
            </div>
            }
         </div>
         <div className="food-item-info">
            <div className="food-item-name-rating">
                <p >{each?.name}</p>
                <img src={assets.rating_starts} alt=''/>
            </div>
            <p className="food-item-desc">{each?.description} </p>
            <p className="food-item-price">${each?.price}</p>
         </div>
    </div>
          ))
        }
      </div>
    </div>
  )
}

export default FoodDisplay