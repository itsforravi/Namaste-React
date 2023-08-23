import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header.js";
import Body from "./component/Body.js";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import About from "./component/About.js";
import Contact from "./component/Contact.js";
import Error from "./component/Error.js";




  const AppLayout=()=>{
    return (
        <div  className="app">
          
   <Header/>
   <Body/>


        </div>
    );
  };

const appRouter=createBrowserRouter([
{
  path: "/",
  element:<AppLayout/>,
  errorElement:<Error/>,
},
{
  path:"/about",
  element:<About/>,
},
{
  path:"/contact",
  element:<Contact/>,
},
])

    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(<RouterProvider router={(appRouter)}/>);