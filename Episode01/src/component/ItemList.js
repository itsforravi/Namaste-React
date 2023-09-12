import { CDN_URL } from "../utilis/contants";

const ItemList=(items)=>{

console.log(items);

return ( <div>
   <div>
    {items.map((item)=>
    (<div key={item.card.info.id} 
        className="p-2 m-2  border-gray-200 
    border-b-2 text-left flex justify-between">



<div className="py-2">
    <span>{item.card.info.name}</span>
    <span>-₹{item.card.info.price 
    ?item.card.info.price
    :item.card.info.defaultPrice }</span>
    
    </div>
    <p className="text-xs">{item.card.info.description}</p>

    </div>
    
    ))}
   </div>
    </div>

);
}


export default ItemList;