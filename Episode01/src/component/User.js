import { useEffect, useState } from "react";


const User=({name})=>{
    const [count,setCount]=useState(0);
    
    useEffect(()=>{
//API calls
setInterval(()=>{
    // console.log("Namaste React OP")
},1000);
console.log("useEffect")
return ()=>{
console.log("UseEffect return ");
}
    },[]);
    console.log("render");

  

    return (
    <div className="m-4 p-4 bg-gray-50 rounded-lg">
        <h1>Count={count}</h1>
        <h1>Count2={count2}</h1>
  <h2>Name:{name}</h2>
  <h3>Location:Gorakhpur</h3>
  <h4>Contact:@itsforravi</h4>
  <h5>Contact:@itsforravi/twitter</h5>
    </div>
    );
};
export default User;