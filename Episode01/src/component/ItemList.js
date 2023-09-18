import { useDispatch } from "react-redux";
import {addItem} from "../utilis/cartSlice";
import { CDN_URL } from "../utilis/contants";

const ItemList=(items)=>{

    const Dispatch=useDispatch();


const handleAddItem=(item)=>{
    //Dispatch acction
    Dispatch(addItem(item))
}

return ( 
   <div>
    {items.map((item)=>
    (<div key={item.card.info.id} 
        className="p-2 m-2  border-gray-200 
    border-b-2 text-left flex justify-between">

<div className="w-9/122">
         <div className="py-2">
    <span>{item.card.info.name}</span>
    <span>-₹{item.card.info.price 
    ?item.card.info.price
    :item.card.info.defaultPrice }</span>
    
    </div>
    <p className="text-xs">{item.card.info.description}</p>
    </div>
    <div className="w-3/12 p-4">
        <div className="absolute">
        <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg ">
           onClick={()=>handleAddItem(item)}
            Add+
            </button>
    </div>
  
    <img src={CDN_URL+item.card.info.imageId} className="w-full"/>
</div>
</div>
 


   
   
   ))}
   
   </div>

);
};


export default ItemList;