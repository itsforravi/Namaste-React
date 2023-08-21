import ResturentCard from "./ResturentCard";
import resList from "../utilis/mockData.js";
const Body=()=>{
let ListOfRestaurent=[
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
];
  
    return (
       <div className="body">
      <div className="filter">
        <button 
        className="filter-btn" 
        onClick={()=>{
        //    FIllter Logic Here
         ListOfRestaurent=ListOfRestaurent.filter(
            (res)=>res.info.avgRating>4
        )
        console.log(ListOfRestaurent)
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