import { LOGO_URL } from "../utilis/contants";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilis/useOnlineStatus";

const Header=()=>{
 

const [btnNameReact,setBtnNameReact]=useState("login");

const onlineStatus=useOnlineStatus();


//if dependency arr=> useEffect is called on eveery render.
//If dependency array is empty =[]=> use effect is called on initial render(just once) 
//if dependeny array is [btnNameReact] => called every time benNameReact is updated
useEffect(()=>{
  console.log("useEffect Called")
    },[btnNameReact]);

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg mb-2">
            <div className="logo-container">
                <img className="w-56"  src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
              <ul className="flex p-4 m-4" >
                <li className="px-4">
                  Online Status:{onlineStatus?"✅":"🔴"  }
                </li>
                <li className="px-4" >
                  <Link to="/" >Home</Link>
                </li>
                <li className="px-4">
                  <Link to="/about" >About us</Link>
                  </li>
                <li className="px-4">
                  <Link to="/contact">Contact us</Link>
                  </li>
                <li>
                  <Link to="/grocery">Grocery</Link>
                  </li>
                <li className="px-4">Cart</li>
                <button className="login" 
                onClick={()=>
                  {  btnNameReact==="login"?
                    setBtnNameReact("logout")
                   : setBtnNameReact("login");
                 
                }}>
                    {btnNameReact}</button>
              </ul>
            </div>
        </div>
    );
};

export default Header;