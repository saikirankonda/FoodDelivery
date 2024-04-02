import React from 'react';
import "./ExploreMenu.css";
import {menu_list} from "../../assets/assets";


const ExploreMenu = ({category,setCategory}) => {
  return (

    <div className='explpore-menu' id="explore-menu">
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culnary expertise.Our mission is satisfy your cravings and elevate your dining experiencem, one delicious meal at a time</p>
        <div className="explre-menu-list">
            {
                menu_list && menu_list?.map((each,i) =>{
                    return (
                        <div onClick={()=> setCategory(prev=> prev === each.menu_name ? "All" : each?.menu_name)} key={i} className='explore-menu-list-item'>
                                <img className={category === each.menu_name ? "active" : ''} src={each?.menu_image} alt='' />
                                <p>{each?.menu_name}</p>
                            </div>
                    )
                })
            }
        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu