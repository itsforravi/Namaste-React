import { CDN_URL } from "../utilis/contants";

const ResturentCard=(props)=>{
    const {resData}=props;
    const {cloudinaryImageId,name,cuisines,costForTwo,avgRating,deliveryTime}=resData?.info;
       return (
           <div className="res-card-1">
               <img className="res-logo" alt="res-logo" src={CDN_URL
               +cloudinaryImageId
               }
               
               />
          <h3 > {name}</h3>
          <h3 > {cuisines.join(",")}</h3>
          <h3 > {costForTwo}</h3>
          <h3 > {avgRating} Rating</h3>
          <h3 > {deliveryTime}Minutes</h3>
          
        
             </div>
       );
   };
   export default ResturentCard;