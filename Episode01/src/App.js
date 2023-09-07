import React ,{lazy,Suspense}from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header.js";
// import Body from "./component/Body.js";

// import About from "./component/About.js";
// import Contact from "./component/Contact.js";
import Error from "./component/Error.js";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
// import RestaurantMenu from "./component/RestaurantMenu.js";
// import Grocery from "./component/Grocery.js";



//Chunking
//Code Splitting
//Dynamic Bundling
//lazy Loading
//on demad loading


const Grocery=lazy(()=>import("./component/Grocery.js"));

const About=lazy(()=>import("./component/About.js"));
const Contact =lazy(()=>import("./component/Contact.js"));
const Body =lazy(()=>import("./component/Body.js"));
const RestaurantMenu =lazy(()=>import("./component/RestaurantMenu.js"));

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
      element:<Suspense fallback={<h1>Loading...</h1>}>
     <Body/>
    </Suspense>,
    },
    {
      path:"/about",
      element:<Suspense fallback={<h1>Loading...</h1>}>
      <About/>
    </Suspense>,
    },
    {
      path:"/contact",
      element:<Suspense fallback={<h1>Loading...</h1>}>
      <Contact/>
    </Suspense>,
    },
    {
      path:"/grocery",
      element:<Suspense fallback={<h1>Loading...</h1>}>
        <Grocery/>
      </Suspense>,
    },
    {
      path:"/restaurants/:resId",
      element:<Suspense fallback={<h1>Loading...</h1>}>
   <RestaurantMenu/>
    </Suspense>,
    },
  ],
  errorElement:<Error/>,
},

]);

    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(<RouterProvider router={(appRouter)}/>);