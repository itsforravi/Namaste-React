 import { useState,useEffect } from "react";
 import Shimmer from "./shimmer";
 import { useParams } from "react-router-dom";
 

 
 const RestaurantMenu=()=>{
 

const {resId}=useParams();
const resInfo=useRestaurantMenu(resId);
  



    if( resInfo===null)  return  <Shimmer/> ;

const {name,cuisines,cloudinaryImageId,costForTwo,avgRating}=resInfo?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info;

const {itemCards}=resInfo.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info;
console.log(itemCards);
return  (

        <div className="menu">
<h1>{name}</h1>
<p>
{cuisines.join(",")}-{costForTwo}

</p>
<h3>{avgRating}</h3>
<h2>Menu</h2>
<ul>
    
{itemCards.map((item)=>(<li key={item.card.info.id}>
    {item.card.info.name}-{"Rs."}{item.card.info.price || item.card.info.defaultPrice}</li>))};
</ul>
        </div>
    );
};
export default RestaurantMenu;