import { LOGO_URL } from "../utilis/contants";
import { useState } from "react";


const Header=()=>{
 

const [btnNameReact,setBtnNameReact]=useState("login");
console.log("Header Render");
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