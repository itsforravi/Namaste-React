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
        <div className="Header">
            <div className="logo-container">
                <img className="logo"  src={LOGO_URL}/>
            </div>
            <div className="nav-items">
              <ul>
                <li>
                  Online Status:{onlineStatus?"Online":"Offline"  }
                </li>
                <li >
                  <Link to="/" >Home</Link>
                </li>
                <li>
                  <Link to="/about" >About us</Link>
                  </li>
                <li>
                  <Link to="/contact">Contact us</Link>
                  </li>
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