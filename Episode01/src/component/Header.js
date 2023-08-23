import { LOGO_URL } from "../utilis/contants";
import { useState,useEffect } from "react";


const Header=()=>{
 

const [btnNameReact,setBtnNameReact]=useState("login");
console.log("Header Render");


//if dependency arr=> useEffect is called on eveery render.
//If dependency array is empty =[]=> use effect is called on initial render(just once) 
//if dependeny array is [btnNameReact] => called every time benNameReact is updated
useEffect(()=>{
  console.log("useEffect Called")
    },[btnNameReact]);

    return (
        <div className="Header">
            <div className="logo-container">
                <img className="logo"  src={LOGO_URL}/>
            </div>
            <div className="nav-items">
              <ul>
                <li ><a href="#">Home</a></li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Cart</li>
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