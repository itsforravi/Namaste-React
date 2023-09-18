import { LOGO_URL } from "../utilis/contants";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilis/useOnlineStatus";
import UserContext from "../utilis/UserContext";
import { useSelector } from "react-redux";

const Header=()=>{
 

const [btnNameReact,setBtnNameReact]=useState("login");

const onlineStatus=useOnlineStatus();

const {loggedInUser}=useContext(UserContext);
console.log(loggedInUser);

//Subscribing to the store using a  Seletor
const cart=useSelector((store)=>store.cart.items);

//if dependency arr=> useEffect is called on eveery render.
//If dependency array is empty =[]=> use effect is called on initial render(just once) 
//if dependeny array is [btnNameReact] => called every time benNameReact is updated
useEffect(()=>{
  console.log("useEffect Called")
    },[btnNameReact]);

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg mb-2 md:bg-yellow-200 lg:bg-red-200">
            <div className="logo-container">
                <img className="w-56"  src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
              <ul className="flex p-4 m-4" >
                <li className="px-4 hover:bg-neutral-100 rounded-xl">
                  Online Status:{onlineStatus?"✅":"🔴"  }
                </li>
                <li className="px-4 hover:bg-neutral-100 rounded-xl" >
                  <Link to="/" >Home</Link>
                </li>
                <li className="px-4 hover:bg-neutral-100 rounded-xl">
                  <Link to="/about" >About us</Link>
                  </li>
                <li className="px-4 hover:bg-neutral-100 rounded-xl">
                  <Link to="/contact">Contact us</Link>
                  </li>
                <li className="px-4 hover:bg-neutral-100 rounded-xl">
                  <Link to="/grocery">Grocery</Link>
                  </li>
                <li className="px-4 font-bold text-xl hover:bg-neutral-100 rounded-xl">Cart(0 items)</li>
                <button  className="px-4 hover:bg-neutral-100 rounded-xl"
                onClick={()=>
                  {  btnNameReact==="login"?
                    setBtnNameReact("logout")
                   : setBtnNameReact("login");
                 
                }}>
                    {btnNameReact}
                    </button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
              </ul>
            </div>
        </div>
    );
};

export default Header;