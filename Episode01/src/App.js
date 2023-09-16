import React ,{lazy,Suspense, useEffect, useState}from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header.js";

import Error from "./component/Error.js";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";

import UserContext from "./utilis/UserContext.js";




const Grocery=lazy(()=>import("./component/Grocery.js"));

const About=lazy(()=>import("./component/About.js"));
const Contact =lazy(()=>import("./component/Contact.js"));
const Body =lazy(()=>import("./component/Body.js"));
const RestaurantMenu =lazy(()=>import("./component/RestaurantMenu.js"));

  const AppLayout=()=>{


const [userName,setUserName]=useState();

//Authentication
useEffect(()=>{
//Make an API call and send username and password
const data={
name:"Ravi Kumar Gupt"
}
setUserName(data.name);

},[])


    return (
     //default value 
      <UserContext.Provider value={{loggedInUser:userName}}>
        {/* Ravi Kumar */}
        <div  className="app">
           <UserContext.Provider value={{loggedInUser:"Ravi"}}>
            {/* {Ravi} */}

          <Header/>
          </UserContext.Provider>
   <Outlet/>
  </div>
  </UserContext.Provider>
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