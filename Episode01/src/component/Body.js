import ResturentCard from "./ResturentCard";
import resList from "../utilis/mockData.js";
import {useEffect, useState} from "react";
import Shimmer from "./shimmer";


const Body=()=>{


//Local State variable -Super powerful variable(create state variable)
let [ListOfRestaurent,setListofRestaurent]=useState([]);
// Normal JS variable
// let ListOfRestaurent=null;

    //  Normal Js variables
// let ListOfRestaurentJS=[
//     {
//         "info": {
//           "id": "740150",
//           "name": "Cake",
//           "cloudinaryImageId": "4cb1c895a46c07cf61ef4515f9cdf5dc",
//           "locality": "Jatepur North",
//           "areaName": "Golghar",
//           "costForTwo": "₹400 for two",
//           "cuisines": [
//             "Bakery"
//           ],
//           "avgRating":3.4,
//           "deliveryTime": 75,
//         }
//     },
//     {
//         "info": {
//           "id": "740151",
//           "name": "McD",
//           "cloudinaryImageId": "4cb1c895a46c07cf61ef4515f9cdf5dc",
//           "locality": "Jatepur North",
//           "areaName": "Golghar",
//           "costForTwo": "₹400 for two",
//           "cuisines": [
//             "Bakery"
//           ],
//           "avgRating":4.1,
//           "deliveryTime": 75,
//         }
//     },
//     {
//         "info": {
//           "id": "740159",
//           "name": "KFC",
//           "cloudinaryImageId": "4cb1c895a46c07cf61ef4515f9cdf5dc",
//           "locality": "Jatepur North",
//           "areaName": "Golghar",
//           "costForTwo": "₹400 for two",
//           "cuisines": [
//             "Bakery"
//           ],
//           "avgRating":4.3,
//           "deliveryTime": 75,
//         }
//     }
// ];


useEffect(()=>{
    fetchData();
},[]);
  
const fetchData=async()=>{
    const data= await fetch(
       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.1766701&lng=78.00807449999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json=await data.json();
    console.log(json);
    // Opptional Chaning
    setListofRestaurent(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};

// Conditional Rendering
// if(ListOfRestaurent.length===0){
//     return<Shimmer/>
// }


    return ListOfRestaurent.length===0 ? <Shimmer/>:
    (
       <div className="body">
      <div className="filter">
        <button 
        className="filter-btn" 
        onClick={()=>{
        
        //    FIllter Logic Here
         const filteredList=ListOfRestaurent.filter(
            (res)=>res.info.avgRating>4
        )
        setListofRestaurent(filteredList);
        }}>
            Top Rated restaurant</button>
      </div>
           <div className="res-container">
       { ListOfRestaurent.map(restaurant=>
       (<ResturentCard key={restaurant.info.id} resData={restaurant}/>))}
        
           </div> 
       </div>
    );
   };
export default Body;   