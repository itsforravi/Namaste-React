 import { useState,useEffect } from "react";
 import Shimmer from "./shimmer";
 import { useParams } from "react-router-dom";
 import { MENU_API } from "../utilis/contants";

 
 const RestaurantMenu=()=>{
 
const [resInfo,setResInfo]=useState(null);
const {resId}=useParams();

    useEffect(()=>{
  fetchMenu();
    });
    const fetchMenu=async ()=>{
        const data=await fetch(
            MENU_API+resId
        );
        const json=await data.json();
        console.log(json);
        setResInfo(json.data);
    };
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