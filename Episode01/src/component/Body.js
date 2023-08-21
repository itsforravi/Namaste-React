import ResturentCard from "./ResturentCard";
import resList from "../utilis/mockData.js";
import {useState} from "react";


const Body=()=>{


//Local State variable -Super powerful variable(create state variable)
let [ListOfRestaurent,setListofRestaurent]=useState([
    {
        "info": {
          "id": "740150",
          "name": "Cake",
          "cloudinaryImageId": "4cb1c895a46c07cf61ef4515f9cdf5dc",
          "locality": "Jatepur North",
          "areaName": "Golghar",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Bakery"
          ],
          "avgRating":3.4,
          "deliveryTime": 75,
        }
    },
    
    {
        "info": {
          "id": "740151",
          "name": "McD",
          "cloudinaryImageId": "4cb1c895a46c07cf61ef4515f9cdf5dc",
          "locality": "Jatepur North",
          "areaName": "Golghar",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Bakery"
          ],
          "avgRating":4.1,
          "deliveryTime": 75,
        }
    },
    {
        "info": {
          "id": "740159",
          "name": "KFC",
          "cloudinaryImageId": "4cb1c895a46c07cf61ef4515f9cdf5dc",
          "locality": "Jatepur North",
          "areaName": "Golghar",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Bakery"
          ],
          "avgRating":4.3,
          "deliveryTime": 75,
        }
    }
]);
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
  
    return (
       <div className="body">
      <div className="filter">
        <button 
        className="filter-btn" 
        onClick={()=>{
            setListofRestaurent()
        //    FIllter Logic Here
         const filteredList=ListOfRestaurent.filter(
            (res)=>res.info.avgRating>4
        )
        setListofRestaurent(filteredList);
        }}>
            Top Rated restaurant</button>
      </div>
           <div className="res-container">
       {
         ListOfRestaurent.map(restaurant=>(<ResturentCard key={restaurant.info.id} resData={restaurant}/>))
       }
        
           </div>
       </div>
    );
   };
export default Body;   