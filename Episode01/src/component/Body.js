import ResturentCard from "./ResturentCard";
import resList from "../utilis/mockData.js";
const Body=()=>{
    return (
       <div className="body">
      <div className="search">Search</div>
           <div className="res-container">
       {
         resList.map(restaurant=>(<ResturentCard key={restaurant.info.id} resData={restaurant}/>))
       }
        
           </div>
       </div>
    );
   };
export default Body;   