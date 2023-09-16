 
 import Shimmer from "./shimmer";
 import { useParams } from "react-router-dom";
 import useRestaurantMenu from "../utilis/useRestraurantMenu";
import RestaurantCatagory from "./RestaurantCategory";
import { useState } from "react";

 
 const RestaurantMenu=()=>{
 

const {resId}=useParams();
const resInfo=useRestaurantMenu(resId);
  
const [showIndex,setShowIndex]=useState(null);



    if( resInfo===null)  return  <Shimmer/> ;

const {name,cuisines,cloudinaryImageId,costForTwo,avgRating}=resInfo?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info;

const {itemCards}=resInfo.cards[2]?.
card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info;
console.log(itemCards);
const categories=resInfo?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants.filte
(c=>c.card?.card?.['@type']==="type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget");
console.log(categories)
return  (

        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl "></h1>
<h1>{name}</h1>
<p className="font-bold text-lg">
{cuisines.join(",")}-{costForTwo}

</p>

{categories.map((category,index)=>(
<RestaurantCatagory 
    key={category?.card?.card.title}
     data={category?.card?.card}
     showItem={index==showIndex ?true:false}
     setShowIndex={()=>setShowIndex(index)}
     />
     ))}


        </div>
    );
};
export default RestaurantMenu;