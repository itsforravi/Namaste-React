const ItemList=(items)=>{

console.log(items);

return <div>
   <ul>
    {items.map((item)=>
    (<div key={item.card.info.id} className="p-2 m-2 border border-black 
    bottom">
<div>
    <span>{item.card.info.name}</span>
    <span>{item.card.info.price}</span>
    
    </div>
    <p>{item.card.info.description}</p>

    </div>))}
   </ul>
    </div>


}


export default ItemList;