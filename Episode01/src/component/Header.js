import { LOGO_URL } from "../utilis/contants";



const Header=()=>{
    return (
        <div className="Header">
            <div className="logo-container">
                <img className="logo"  src={LOGO_URL}/>
            </div>
            <div className="nav-items">
              <ul>
                <li ><a href="#"></a>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Cart</li>
              </ul>
            </div>
        </div>
    );
};

export default Header;