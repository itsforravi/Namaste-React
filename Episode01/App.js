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
 *   -Img
 *   -name of Res, star Rating,Cuisines ,etc
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

const ResturentCard=()=>{
    return (
        <div className="res-card-1">
            <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/tphvhqznraaptconll30"/>
       <h3 > Megna Food</h3>
     
          </div>
    );
};

const Body=()=>{
 return (
    <div className="body">
   <div className="search">Search</div>
        <div className="res-container">
      <ResturentCard/>
        </div>
    </div>
 );
};

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