import React from "react";
import ReactDOM from "react-dom/client";


/**
 * Header
 *  -Logo
 *   -Nav Items
 * Body
 *   -Search
 *   -Resturent Container
 *   -ResturentCard
 * Footer
 *  -CopyRight
 *   -Links
 *   -Address
 *   -Contact
 */
  
const Header=()=>{
    return (
        <div className="Header">
            <div className="logo-container">
                <img className="logo" src="https://www.designmantic.com/logo-images/1759.png?company=Company+Name&slogan=&verify=1"/>
            </div>
            <div className="nav-items">
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Cart</li>
              </ul>
            </div>
        </div>
    );
};

const Body=()=>{
 return (
    <div className="body">
   <div className="Search">Search</div>
        <div className="res-container">
            
        </div>
    </div>
 )
}

  const AppLayout=()=>{
    return (
        <div  className="app">
   <Header/>
   <Body/>


        </div>
    )
  }



    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(<AppLayout/>);