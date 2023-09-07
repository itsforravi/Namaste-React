import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header.js";
import Body from "./component/Body.js";

import About from "./component/About.js";
import Contact from "./component/Contact.js";
import Error from "./component/Error.js";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import RestaurantMenu from "./component/RestaurantMenu.js";
import Grocery from "./component/Grocery.js";



//Chunking
//Code Splitting
//Dynamic Bundling


  const AppLayout=()=>{
    return (
        <div  className="app">
          
   <Header/>
   <Outlet/>
 
  </div>
    );
  };

const appRouter=createBrowserRouter([
{
  path: "/",
  element:<AppLayout/>,
  children:[
    {
      path:"/",
      element:<Body/>,
    },
    {
      path:"/about",
      element:<About/>,
    },
    {
      path:"/contact",
      element:<Contact/>,
    },
    {
      path:"/grocery",
      element:<Grocery/>,
    },
    {
      path:"/restaurants/:resId",
      element:<RestaurantMenu/>,
    },
  ],
  errorElement:<Error/>,
},

]);

    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(<RouterProvider router={(appRouter)}/>);